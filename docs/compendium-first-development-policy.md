# Compendium-First Development Policy

This repository should produce a Foundry VTT module that is usable through installed module compendiums, not a loose collection of notes that require manual construction inside Foundry.

## Core Rule

All campaign content and gameplay systems should be defined in the repository first, then generated, packed, or loaded into Foundry.

The GM-facing workflow should be:

1. Install or update the module.
2. Enable the module in a D&D 5e world.
3. Open the provided compendiums or Adventure document.
4. Import/use the included content.

The GM should not need to manually create Actors, Items, Journals, Roll Tables, Macros, Scenes, or rules systems inside Foundry except when deliberately customizing their own campaign.

## What Counts as Complete

A feature is not complete when it exists only as prose instructions.

A feature is complete when it has repo-defined implementation artifacts such as:

- source JSON
- generated Foundry document JSON
- module JavaScript
- module CSS
- compendium pack data
- macro code
- documented import/build command
- tests or validation checklist

## Preferred Build Flow

Use this order for every Act, feature, or subsystem:

```text
1. Define source data in /data or /content
2. Define conversion/build script in /tools
3. Generate Foundry-ready documents into /foundry-src or /packs
4. Wire runtime helpers in /scripts where needed
5. Style module-owned UI in /styles where needed
6. Register content through module.json packs
7. Validate in a clean Foundry D&D 5e world
8. Only then mark the issue complete
```

## Required Repo Artifacts by Content Type

### Journals

Journals should have:

- Markdown or JSON source in `content/`
- manifest entry describing target name/folder/permissions
- generated Foundry JournalEntry seed data
- final compendium pack entry before release

### Actors

Actors should have:

- source JSON in `data/actors/` or act-specific data folder
- D&D 5e sheet fields where possible
- biography and GM notes
- prototype token data
- item/feature references
- generated Actor document data
- final compendium pack entry

### Items and Features

Items should have:

- source JSON in `data/items/` or act-specific data folder
- D&D 5e item type
- activation/use/recharge data where relevant
- description text
- icon path
- generated Item document data
- final compendium pack entry

### Roll Tables

Roll Tables should have:

- source JSON table definition
- formula
- results with ranges
- generated RollTable document data
- final compendium pack entry

### Macros

Macros should have:

- source JavaScript in `scripts/macros/` or `data/macros/`
- generated Macro document data
- final compendium pack entry
- no hidden dependency on manual copy/paste

### Scenes

Scenes should have:

- scene source JSON
- module-relative image paths
- journal pins / notes where useful
- token placements where useful
- generated Scene document data
- final compendium pack entry

### Gameplay Systems

Gameplay systems such as divine marks, companion support, disaster clocks, skill challenges, travel clocks, mutation tables, and final ritual trackers should have:

- source data in `data/`
- runtime helper code in `scripts/systems/`
- optional macros that call the runtime API
- chat output or UI output where useful
- documentation for GM use

## Manual Foundry Work Is Allowed Only For

Manual Foundry work is acceptable only when it is being used as a temporary authoring tool and the output is committed back to the repo.

Allowed temporary work:

- testing a generated Actor
- checking a Scene layout
- validating an Adventure import
- exporting pack data after authoring

Not acceptable as final work:

- "Create this Actor manually in Foundry"
- "Copy this macro into Foundry"
- "Build this Roll Table by hand"
- "Make the scene notes yourself"
- "Use the Markdown source at the table instead of a JournalEntry"

## Issue Completion Standard

Every implementation issue should answer:

- Where is the source data?
- Where is the build/conversion script?
- Where is the generated Foundry-ready output?
- Which compendium pack will contain it?
- What does the GM do in Foundry?
- What remains blocked by other issues?

If the GM still has to manually create the thing inside Foundry, the issue is not complete.

## Labels / Language to Use in Issues

Use these phrases consistently:

- `repo-defined`
- `generated-document-data`
- `compendium-ready`
- `runtime-helper`
- `blocked-by-packaging`
- `blocked-by-actor-data`
- `blocked-by-item-data`
- `blocked-by-scene-data`

Avoid vague completion language like:

- "write notes"
- "plan later"
- "build in Foundry"
- "GM can create"

## Current Direction for Act I

For Act I, the immediate target is:

- source Markdown and manifests for journals
- source JSON for divine marks, skill challenges, roll tables, and companion support
- runtime API under `scripts/systems/`
- generated JournalEntry, Item, RollTable, Actor, Macro, and Scene seed data
- final compendium pack data

Once those exist, the GM should only need to open/import the module compendiums.
