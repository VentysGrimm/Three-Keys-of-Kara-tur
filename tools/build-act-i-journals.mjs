import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = process.cwd();
const manifestPath = path.join(root, "content", "act-i", "journal-manifest.json");
const outputDir = path.join(root, "foundry-src", "journals");
const outputPath = path.join(outputDir, "act-i-journal-entries.json");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function stableId(input) {
  return crypto.createHash("sha1").update(input).digest("hex").slice(0, 16);
}

function markdownToHtml(markdown) {
  const escaped = markdown
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const lines = escaped.split(/\r?\n/);
  const html = [];
  let inTable = false;
  let inList = false;
  let inBlockquote = false;
  let inCode = false;
  let codeLines = [];

  function closeList() {
    if (inList) {
      html.push("</ul>");
      inList = false;
    }
  }

  function closeTable() {
    if (inTable) {
      html.push("</tbody></table>");
      inTable = false;
    }
  }

  function closeBlockquote() {
    if (inBlockquote) {
      html.push("</blockquote>");
      inBlockquote = false;
    }
  }

  function inlineFormat(text) {
    return text
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }

  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      if (!inCode) {
        closeList();
        closeTable();
        closeBlockquote();
        inCode = true;
        codeLines = [];
      } else {
        html.push(`<pre><code>${codeLines.join("\n")}</code></pre>`);
        inCode = false;
      }
      continue;
    }

    if (inCode) {
      codeLines.push(line);
      continue;
    }

    if (!line.trim()) {
      closeList();
      closeTable();
      closeBlockquote();
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      closeList();
      closeTable();
      closeBlockquote();
      const level = heading[1].length;
      html.push(`<h${level}>${inlineFormat(heading[2])}</h${level}>`);
      continue;
    }

    if (line.startsWith("&gt;")) {
      closeList();
      closeTable();
      if (!inBlockquote) {
        html.push("<blockquote>");
        inBlockquote = true;
      }
      html.push(`<p>${inlineFormat(line.replace(/^&gt;\s?/, ""))}</p>`);
      continue;
    }

    if (/^\s*-\s+/.test(line)) {
      closeTable();
      closeBlockquote();
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      html.push(`<li>${inlineFormat(line.replace(/^\s*-\s+/, ""))}</li>`);
      continue;
    }

    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      closeList();
      closeBlockquote();
      const cells = line.trim().slice(1, -1).split("|").map((cell) => cell.trim());
      const isSeparator = cells.every((cell) => /^:?-{3,}:?$/.test(cell));
      if (isSeparator) continue;
      if (!inTable) {
        html.push("<table><tbody>");
        inTable = true;
      }
      html.push(`<tr>${cells.map((cell) => `<td>${inlineFormat(cell)}</td>`).join("")}</tr>`);
      continue;
    }

    closeList();
    closeTable();
    closeBlockquote();
    html.push(`<p>${inlineFormat(line)}</p>`);
  }

  closeList();
  closeTable();
  closeBlockquote();

  if (inCode) {
    html.push(`<pre><code>${codeLines.join("\n")}</code></pre>`);
  }

  return html.join("\n");
}

function makeJournalEntry(entry, index) {
  const sourcePath = path.join(root, entry.source);
  const markdown = readText(sourcePath);
  const pageId = stableId(`${entry.name}:page`);
  const entryId = stableId(entry.name);

  return {
    _id: entryId,
    name: entry.name,
    type: "base",
    folderPath: entry.folder,
    sort: index * 100000,
    ownership: entry.ownership,
    playersCanViewAfterDiscovery: entry.playersCanViewAfterDiscovery,
    flags: {
      "three-keys-of-kara-tur": {
        source: entry.source,
        act: "Act I — The Temple Lie",
        conversionStatus: entry.status
      }
    },
    pages: [
      {
        _id: pageId,
        name: entry.name,
        type: "text",
        sort: 100000,
        title: {
          show: true,
          level: 1
        },
        text: {
          format: 1,
          markdown,
          content: markdownToHtml(markdown)
        }
      }
    ]
  };
}

function main() {
  const manifest = readJson(manifestPath);
  fs.mkdirSync(outputDir, { recursive: true });

  const entries = manifest.entries.map(makeJournalEntry);
  const output = {
    schema: "three-keys-foundry-journal-seed-v1",
    generatedFrom: "content/act-i/journal-manifest.json",
    generatedAt: new Date().toISOString(),
    pack: manifest.journalPack,
    act: manifest.act,
    folder: manifest.foundryFolder,
    blockedLinks: manifest.blockedLinks,
    entries
  };

  fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");
  console.log(`Wrote ${entries.length} Act I journal entries to ${path.relative(root, outputPath)}`);
}

main();
