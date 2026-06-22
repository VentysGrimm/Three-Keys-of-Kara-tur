const MODULE_ID = "three-keys-of-kara-tur";

export const THREE_KEYS_PACKS = {
  adventure: `${MODULE_ID}.three-keys-adventures`,
  actors: `${MODULE_ID}.three-keys-actors`,
  items: `${MODULE_ID}.three-keys-items`,
  journals: `${MODULE_ID}.three-keys-journals`,
  scenes: `${MODULE_ID}.three-keys-scenes`,
  rollTables: `${MODULE_ID}.three-keys-roll-tables`,
  playlists: `${MODULE_ID}.three-keys-playlists`,
  macros: `${MODULE_ID}.three-keys-macros`
};

export class ThreeKeysCompendiumIndex {
  constructor() {
    this.packs = THREE_KEYS_PACKS;
  }

  getPack(key) {
    const packId = this.packs[key] ?? key;
    return game.packs.get(packId) ?? null;
  }

  async getIndex(key, fields = []) {
    const pack = this.getPack(key);
    if (!pack) return [];
    return pack.getIndex({ fields });
  }

  async findByName(key, name) {
    const index = await this.getIndex(key, ["name", "type"]);
    return Array.from(index).find((entry) => entry.name === name) ?? null;
  }

  async getDocumentByName(key, name) {
    const pack = this.getPack(key);
    const entry = await this.findByName(key, name);
    if (!pack || !entry) return null;
    return pack.getDocument(entry._id);
  }

  async summarize() {
    const rows = [];
    for (const [key, packId] of Object.entries(this.packs)) {
      const pack = game.packs.get(packId);
      if (!pack) {
        rows.push({ key, packId, exists: false, count: 0 });
        continue;
      }
      const index = await pack.getIndex();
      rows.push({ key, packId, exists: true, count: Array.from(index).length });
    }
    return rows;
  }
}

export const threeKeysCompendiumIndex = new ThreeKeysCompendiumIndex();
