# Act I Journal Conversion

This document explains the current workflow for issue #5: converting Act I Markdown source into Foundry-style JournalEntry seed data.

## Source Files

The conversion uses:

```text
content/act-i/journal-manifest.json
content/act-i/00-act-i-start-here.md
content/act-i/01-gm-overview.md
content/act-i/02-session-1-the-choosing-of-chains.md
content/act-i/03-session-2-the-first-dead-seal.md
content/act-i/04-session-3-the-grandmasters-test.md
content/act-i/05-npc-companion-guide.md
content/act-i/06-secrets-rewards-failure.md
content/act-i/07-location-temple-of-the-dawn-chain.md
content/act-i/08-location-ash-millet.md
content/act-i/09-location-shrine-of-the-buried-bell.md
content/act-i/10-location-western-archive.md
content/act-i/11-act-i-handouts.md
content/act-i/12-act-i-gm-quick-reference.md
```

## Build Command

Run from the repository root:

```bash
node tools/build-act-i-journals.mjs
```

Expected output:

```text
foundry-src/journals/act-i-journal-entries.json
```

## What the Builder Does

- Reads `content/act-i/journal-manifest.json`.
- Reads each listed Markdown source file.
- Converts Markdown into simple Foundry-ready HTML.
- Preserves the original Markdown alongside generated HTML.
- Creates stable deterministic IDs from journal names.
- Adds folder path metadata.
- Adds ownership intent metadata.
- Records blocked cross-links that cannot be completed until Actors, Items, Scenes, Roll Tables, and Macros exist.

## Current Output Type

The generated file is a **Foundry-style seed JSON**, not yet a live Foundry compendium database.

The next import step should either:

1. Use a temporary world import script to create JournalEntry documents from the seed JSON, then export / package them into the module compendium; or
2. Extend the build tools to write Foundry v13 LevelDB pack data directly after confirming the exact target schema.

Option 1 is safer for now.

## Conversion Status

Complete for Markdown-to-Journal seed conversion.

Blocked for final embedded document links until these issues are completed:

- Actors: #6 and #7
- Items / handouts: #8
- Roll Tables and Macros: #9
- Scenes / Adventure import: #10

## QA Checklist

- [ ] Run the builder locally.
- [ ] Confirm it writes 13 JournalEntry seed objects.
- [ ] Confirm each entry has one text page.
- [ ] Confirm generated HTML opens without obvious formatting corruption.
- [ ] Confirm GM-only entries are marked as such in metadata.
- [ ] Confirm handouts are flagged as player-viewable after discovery.
- [ ] Import into a temporary Foundry world.
- [ ] Confirm pages can be opened in Foundry.
- [ ] Add cross-links after Actors, Items, Scenes, Roll Tables, and Macros exist.

## Notes for Future Improvement

- Improve table conversion so Markdown header rows become `<th>` cells.
- Add Foundry journal callout CSS classes for read-aloud and GM notes.
- Split very long session files into multiple journal pages if Foundry usability requires it.
- Add automatic link placeholder syntax once Actor and Item UUIDs exist.
