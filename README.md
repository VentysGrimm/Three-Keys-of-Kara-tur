# Three Keys of Kara-Tur

**Three Keys of Kara-Tur** is a Foundry VTT adventure module project for a solo D&D 5e campaign set around the Temple of the Dawn Chain, the Pilgrimage of the Three Keys, and the confrontation with Atsumori Nine-Tails.

## Campaign Scope

- **System:** Dungeons & Dragons 5e
- **Platform:** Foundry Virtual Tabletop
- **Intended Play:** One player character supported by a rotating NPC party
- **Level Range:** 1–15
- **Structure:** Four-act campaign

## Acts

1. **Act I — The Temple Lie**: Levels 1–3. The monks choose their gods, survive their first missions, and discover the seals are weakening.
2. **Act II — Pilgrimage of the Three Keys**: Levels 4–8. The party travels Kara-Tur to recover the sealing arts of Name, Pattern, and Sacrifice.
3. **Act III — The Breaking Pilgrimage**: Levels 9–12. The disasters manifest through avatars, cults, dreams, mutations, and earthquakes.
4. **Act IV — The Fox Behind the Human Face**: Levels 13–15. The party returns to the Temple of the Dawn Chain and confronts Atsumori Nine-Tails below the hidden fourth seal.

## Foundry Module Goal

This repository will become a complete installable Foundry VTT module containing:

- Adventure compendium
- Journal entries
- Actors
- Items
- Scenes
- Roll tables
- Playlists
- Macros
- Art, maps, and token placeholders

## Development Standard

This project follows a **compendium-first, code-defined systems** workflow.

All campaign content and gameplay systems should be defined in the repository first, then generated, packed, or loaded into Foundry. The GM-facing workflow should be limited to installing/enabling the module and using the included compendiums or Adventure document.

See:

```text
docs/compendium-first-development-policy.md
```

## Current Status

Initial module scaffold with Act I source conversion and early precoded system work underway.

## Repository Layout

```text
assets/       Art, maps, tokens, and audio placeholders
content/      Human-authored campaign source files and manifests
data/         Structured system, item, actor, table, and rules data
foundry-src/  Generated Foundry-style document seed data before pack output
lang/         Localization files
packs/        Foundry compendium pack folders
scripts/      Module JavaScript and runtime systems
styles/       Module CSS
tools/        Build/conversion scripts
docs/         Design notes, policies, roadmaps, and QA docs
module.json   Foundry module manifest
```

## License

This project contains original campaign material. Final licensing should be confirmed before public distribution, especially for any third-party art, maps, audio, or rules text.
