const MODULE_ID = "three-keys-of-kara-tur";
const SYSTEMS_PATH = `modules/${MODULE_ID}/data/act-i/systems.json`;

function requireFoundryGlobal(name) {
  const value = globalThis[name];
  if (!value) throw new Error(`Three Keys of Kara-Tur | Missing Foundry global: ${name}`);
  return value;
}

async function fetchJson(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Three Keys of Kara-Tur | Failed to fetch ${path}: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

function byId(collection, id) {
  return collection.find((entry) => entry.id === id) ?? null;
}

function tableResultFromRoll(table, total) {
  return table.results.find((result) => total >= result.range[0] && total <= result.range[1]) ?? null;
}

function htmlList(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function getSpeaker(actor) {
  const ChatMessage = globalThis.ChatMessage;
  if (!ChatMessage || !actor) return undefined;
  return ChatMessage.getSpeaker({ actor });
}

export class ThreeKeysApi {
  constructor() {
    this.moduleId = MODULE_ID;
    this.data = null;
    this.skillChallengeState = new Map();
  }

  async init() {
    this.data = await fetchJson(SYSTEMS_PATH);
    this.registerSettings();
    this.exposeGlobalApi();
    console.log("Three Keys of Kara-Tur | Loaded precoded systems", this.data);
  }

  registerSettings() {
    const game = requireFoundryGlobal("game");
    game.settings.register(MODULE_ID, "enableChatSystemMessages", {
      name: "Three Keys: Enable Chat System Messages",
      hint: "Post system helper results, such as table rolls and skill challenge status, to chat.",
      scope: "world",
      config: true,
      default: true,
      type: Boolean
    });
  }

  exposeGlobalApi() {
    const game = requireFoundryGlobal("game");
    game.threeKeys = this;
    globalThis.ThreeKeysOfKaraTur = this;
  }

  getDivineMarks() {
    return this.data?.divineMarks ?? [];
  }

  getDivineMark(id) {
    return byId(this.getDivineMarks(), id);
  }

  getRollTables() {
    return this.data?.rollTables ?? [];
  }

  getRollTable(id) {
    return byId(this.getRollTables(), id);
  }

  getSkillChallenges() {
    return this.data?.skillChallenges ?? [];
  }

  getSkillChallenge(id) {
    return byId(this.getSkillChallenges(), id);
  }

  getCompanionSupport() {
    return this.data?.companionSupport ?? [];
  }

  async rollTable(id, { speaker = null, flavor = null } = {}) {
    const Roll = requireFoundryGlobal("Roll");
    const table = this.getRollTable(id);
    if (!table) throw new Error(`Three Keys of Kara-Tur | Unknown table id: ${id}`);

    const roll = await new Roll(table.formula).evaluate();
    const result = tableResultFromRoll(table, roll.total);
    const content = `
      <section class="three-keys-card three-keys-roll-table">
        <h2>${table.name}</h2>
        <p><strong>Roll:</strong> ${roll.total}</p>
        <p>${result?.text ?? "No result found."}</p>
      </section>
    `;

    if (this.shouldPostChat()) {
      await ChatMessage.create({
        speaker: speaker ?? getSpeaker(globalThis.canvas?.tokens?.controlled?.[0]?.actor),
        flavor: flavor ?? table.name,
        content
      });
    }

    return { table, roll, result, content };
  }

  startSkillChallenge(id) {
    const challenge = this.getSkillChallenge(id);
    if (!challenge) throw new Error(`Three Keys of Kara-Tur | Unknown skill challenge id: ${id}`);

    const state = {
      id,
      successes: 0,
      failures: 0,
      completed: false,
      failed: false,
      log: []
    };

    this.skillChallengeState.set(id, state);
    this.postSkillChallengeStatus(id, "started");
    return state;
  }

  addSkillChallengeSuccess(id, note = "Success") {
    const state = this.ensureSkillChallengeState(id);
    const challenge = this.getSkillChallenge(id);
    if (state.completed || state.failed) return state;

    state.successes += 1;
    state.log.push({ type: "success", note });

    if (state.successes >= challenge.successesRequired) {
      state.completed = true;
      this.postSkillChallengeStatus(id, "completed");
    } else {
      this.postSkillChallengeStatus(id, "success");
    }

    return state;
  }

  addSkillChallengeFailure(id, note = "Failure") {
    const state = this.ensureSkillChallengeState(id);
    const challenge = this.getSkillChallenge(id);
    if (state.completed || state.failed) return state;

    state.failures += 1;
    state.log.push({ type: "failure", note });

    if (state.failures >= challenge.failureThreshold) {
      state.failed = true;
      this.postSkillChallengeStatus(id, "failed");
    } else {
      this.postSkillChallengeStatus(id, "failure");
    }

    return state;
  }

  resetSkillChallenge(id) {
    this.skillChallengeState.delete(id);
    return this.startSkillChallenge(id);
  }

  ensureSkillChallengeState(id) {
    if (!this.skillChallengeState.has(id)) return this.startSkillChallenge(id);
    return this.skillChallengeState.get(id);
  }

  getSkillChallengeState(id) {
    return this.skillChallengeState.get(id) ?? null;
  }

  async postSkillChallengeStatus(id, eventName) {
    if (!this.shouldPostChat()) return;

    const challenge = this.getSkillChallenge(id);
    const state = this.getSkillChallengeState(id);
    if (!challenge || !state) return;

    const status = state.completed
      ? "Completed"
      : state.failed
        ? "Failed forward"
        : `${state.successes}/${challenge.successesRequired} successes, ${state.failures}/${challenge.failureThreshold} failures`;

    const content = `
      <section class="three-keys-card three-keys-skill-challenge">
        <h2>${challenge.name}</h2>
        <p><strong>Status:</strong> ${status}</p>
        <p><strong>Event:</strong> ${eventName}</p>
        <p><strong>Goal:</strong> ${challenge.goal}</p>
      </section>
    `;

    await ChatMessage.create({
      flavor: challenge.name,
      content
    });
  }

  shouldPostChat() {
    const game = globalThis.game;
    return game?.settings?.get(MODULE_ID, "enableChatSystemMessages") ?? true;
  }

  renderDivineMarkSummary() {
    return this.getDivineMarks()
      .map((mark) => `
        <section class="three-keys-card three-keys-divine-mark" data-mark-id="${mark.id}">
          <h2>${mark.name}</h2>
          <p><strong>God:</strong> ${mark.god}</p>
          <p><strong>Seal:</strong> ${mark.seal}</p>
          <p><strong>Symbol:</strong> ${mark.symbol}</p>
          <p><strong>Vision:</strong> ${mark.vision}</p>
          <p><strong>Minor Mark:</strong> ${mark.rulesText}</p>
          <p><strong>Burden:</strong> ${mark.burden}</p>
        </section>
      `)
      .join("\n");
  }

  async postDivineMarkSummary() {
    const content = `
      <section class="three-keys-card three-keys-divine-marks-summary">
        <h1>Three Divine Marks</h1>
        ${this.renderDivineMarkSummary()}
      </section>
    `;
    await ChatMessage.create({ flavor: "Three Divine Marks", content });
  }

  renderCompanionSupportSummary() {
    const entries = this.getCompanionSupport().map((support) => `${support.npc}: ${support.name} — ${support.effect}`);
    return htmlList(entries);
  }
}

export const threeKeysApi = new ThreeKeysApi();
