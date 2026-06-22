# Foundry Module Build Checklist

This checklist tracks the work required to turn **Three Keys of Kara-Tur** into a complete Foundry VTT D&D 5e adventure module.

## 1. Repository and Module Foundation

- [x] Create GitHub repository: `VentysGrimm/Three-Keys-of-Kara-tur`
- [x] Add README
- [x] Add placeholder license
- [x] Add Foundry `module.json`
- [x] Add `scripts/` folder
- [x] Add `styles/` folder
- [x] Add `lang/` folder
- [x] Add `assets/` folder structure
- [x] Add `packs/` folder structure
- [x] Add production roadmap
- [x] Add adventure structure document
- [ ] Confirm module folder name matches Foundry manifest ID: `three-keys-of-kara-tur`
- [ ] Clone repo into Foundry `Data/modules/three-keys-of-kara-tur`
- [ ] Confirm module appears in Foundry's module list
- [ ] Confirm module activates without console errors

## 2. Manifest and Compatibility

- [x] Define module ID
- [x] Define module title
- [x] Define module version
- [x] Define D&D 5e system relationship
- [x] Define Foundry compatibility range
- [x] Register script file
- [x] Register stylesheet file
- [x] Register English localization file
- [x] Define Adventure compendium pack
- [x] Define Actor compendium pack
- [x] Define Item compendium pack
- [x] Define JournalEntry compendium pack
- [x] Define Scene compendium pack
- [x] Define RollTable compendium pack
- [x] Define Playlist compendium pack
- [x] Define Macro compendium pack
- [ ] Validate `module.json` in Foundry VTT v13
- [ ] Confirm D&D 5e system compatibility
- [ ] Confirm pack paths load correctly

## 3. Content Source Structure

- [x] Create Act I content source folder
- [x] Add Act I vertical slice plan
- [x] Add Act I Start Here journal source
- [x] Add Act I GM Overview journal source
- [x] Add Session 1 journal source
- [x] Add Session 2 journal source
- [x] Add Session 3 journal source
- [x] Add NPC Companion Guide source
- [x] Add Act I Secrets, Rewards, and Failure States source
- [ ] Add Temple of the Dawn Chain location source
- [ ] Add Ash Millet village location source
- [ ] Add Shrine of the Buried Bell location source
- [ ] Add Western Archive location source
- [ ] Add Act I scene index source
- [ ] Add Act I handout source files
- [ ] Add Act I GM quick-reference source

## 4. Act I Journals

- [ ] Convert `00-act-i-start-here.md` into Foundry JournalEntry
- [ ] Convert `01-gm-overview.md` into Foundry JournalEntry
- [ ] Convert `02-session-1-the-choosing-of-chains.md` into Foundry JournalEntry
- [ ] Convert `03-session-2-the-first-dead-seal.md` into Foundry JournalEntry
- [ ] Convert `04-session-3-the-grandmasters-test.md` into Foundry JournalEntry
- [ ] Convert `05-npc-companion-guide.md` into Foundry JournalEntry
- [ ] Convert `06-secrets-rewards-failure.md` into Foundry JournalEntry
- [ ] Add journal page headings and navigation
- [ ] Add GM-only secret sections where appropriate
- [ ] Add player-facing read-aloud sections
- [ ] Add cross-links between journals
- [ ] Add links from journals to Actors
- [ ] Add links from journals to Items
- [ ] Add links from journals to Scenes
- [ ] Add links from journals to Roll Tables

## 5. Act I Actors

### Companion and Major NPC Actors

- [ ] Grandmaster Iwamoto
- [ ] Master Ye Sol
- [ ] Master Seigen
- [ ] Yuko Yanagi
- [ ] Jon Soo
- [ ] Joka

### Village and Supporting NPC Actors

- [ ] Elder Hana
- [ ] Toma, Goat-Herder Child
- [ ] Old Man Ren

### Enemy Actors

- [ ] Seal-Warped Beast
- [ ] Bell-Eater Grub
- [ ] Masked Temple Guardian
- [ ] Seal-Warped Giant Rat variant
- [ ] Seal-Warped Wolf variant
- [ ] Seal-Warped Panther variant

### Actor Build Requirements

- [ ] Assign Actor type and D&D 5e sheet data
- [ ] Add biography text
- [ ] Add roleplay notes
- [ ] Add combat tactics
- [ ] Add default token image placeholder
- [ ] Add prototype token settings
- [ ] Add senses and movement
- [ ] Add attacks and features
- [ ] Add NPC helper abilities
- [ ] Add journal links
- [ ] Test each Actor in a combat encounter

## 6. Act I Items and Features

### Divine Marks

- [ ] Divine Mark: Bone Cradle
- [ ] Divine Mark: Silver Spear
- [ ] Divine Mark: Black Serpent

### Story Items

- [ ] First Bell Fragment
- [ ] Fox-Marked Scroll Case
- [ ] Old Map of Kara-Tur
- [ ] Damaged Founding Sutra
- [ ] Prayer Tag in Iwamoto's Hand
- [ ] Recent Copy in Iwamoto's Hand

### NPC Features

- [ ] Yuko: Moonlit Step
- [ ] Yuko: Hunter's Glance
- [ ] Yuko: Soft Killing Art
- [ ] Jon Soo: Drunken Redirection
- [ ] Jon Soo: Laughing Guard
- [ ] Jon Soo: Masked Oath
- [ ] Joka: Zehir's Needle
- [ ] Joka: Shadow Fold
- [ ] Joka: Cruel Opening
- [ ] Seigen: Antidote Master
- [ ] Seigen: Orochi Venom
- [ ] Seigen: Serpent's Courtesy

### Item Build Requirements

- [ ] Add item descriptions
- [ ] Add activation type where needed
- [ ] Add uses per rest where needed
- [ ] Add save DCs where needed
- [ ] Add damage formulas where needed
- [ ] Add item images or placeholders
- [ ] Link items to relevant Actors
- [ ] Link items to relevant Journals

## 7. Act I Roll Tables

- [ ] Joka's Challenge
- [ ] Seal-Warped Beast Mutations
- [ ] Road to Ash Millet Complications
- [ ] Ash Millet Investigation Clues
- [ ] Shrine Entry Methods
- [ ] Bell-Eater Grub Spotlight Actions
- [ ] Masked Guardian Traits
- [ ] Archive Escape Checks
- [ ] Archive Escape Failure Complications
- [ ] Act I Failure Costs
- [ ] Act II Destination Hooks

### Roll Table Requirements

- [ ] Build each table in Foundry
- [ ] Add clear result text
- [ ] Add journal links where useful
- [ ] Add Actor or Item links where useful
- [ ] Test table rolls in chat

## 8. Act I Scenes

### Required Scenes

- [ ] Temple of the Dawn Chain
- [ ] Hall of Lamps
- [ ] Moon Gate Courtyard
- [ ] Grandmaster's Tea Room
- [ ] Medicine Hall
- [ ] Western Archive
- [ ] Village of Ash Millet
- [ ] Shrine of the Buried Bell
- [ ] Bell Chamber / Feeding Tunnel
- [ ] Act II Route Map

### Scene Build Requirements

- [ ] Add placeholder map image
- [ ] Set grid size
- [ ] Set scene dimensions
- [ ] Add lighting
- [ ] Add walls where useful
- [ ] Add ambient sound placeholders where useful
- [ ] Add journal pins
- [ ] Add token placements for encounters
- [ ] Add navigation notes
- [ ] Test scene loading performance

## 9. Act I Encounters

### Encounter 1: Seal-Warped Beast Attack

- [ ] Add encounter journal section
- [ ] Add Seal-Warped Beast Actor
- [ ] Add mutation roll table
- [ ] Add token placements in Hall of Lamps or courtyard scene
- [ ] Add NPC tactics notes
- [ ] Test for solo PC plus three NPC allies
- [ ] Add scaling advice

### Encounter 2: Bell-Eater Grub

- [ ] Add Bell-Eater Grub Actor
- [ ] Add boss abilities
- [ ] Add bloodied reaction
- [ ] Add spotlight mechanic
- [ ] Add Bell Chamber scene
- [ ] Add First Bell Fragment reward
- [ ] Test boss difficulty
- [ ] Add reduced and hard-mode variants

### Encounter 3: Masked Temple Guardians

- [ ] Add Masked Temple Guardian Actor
- [ ] Add guardian traits table
- [ ] Add Western Archive scene
- [ ] Add nonlethal objective notes
- [ ] Add archive escape transition
- [ ] Test fight-to-skill-challenge pacing

## 10. Act I Skill Challenges

### Archive Escape

- [ ] Define 5 successes before 3 failures
- [ ] Add valid skill list
- [ ] Add DC guidance
- [ ] Add NPC support options
- [ ] Add failure complications table
- [ ] Add success outcome
- [ ] Add failure outcome
- [ ] Add Foundry macro or journal quick button if useful

### Shrine Entry

- [ ] Define root-choked gate options
- [ ] Add checks and failure consequences
- [ ] Add NPC assistance guidance

### Ash Millet Investigation

- [ ] Define village clues
- [ ] Add villagers
- [ ] Add DCs
- [ ] Add fallback clue rule so the story cannot stall

## 11. Solo Companion System

- [ ] Define companion action economy rules
- [ ] Define how many NPC companions usually accompany the player
- [ ] Define NPC autonomy limits
- [ ] Define when NPCs can grant advantage
- [ ] Define when NPCs can take full turns
- [ ] Define how romance and rivalry affect assistance
- [ ] Define companion injury rules
- [ ] Define companion secret reveal triggers
- [ ] Add companion quick-reference journal
- [ ] Test with one player character at levels 1, 2, and 3

## 12. Macros

- [ ] Roll Seal-Warped Beast Mutation
- [ ] Roll Joka's Challenge
- [ ] Roll Road Complication
- [ ] Roll Ash Millet Clue
- [ ] Track Archive Escape Successes and Failures
- [ ] Roll Masked Guardian Trait
- [ ] Advance Act I Secret Clock
- [ ] Display Divine Mark choice summary

## 13. Assets

### Placeholder Assets

- [ ] Add module cover placeholder
- [ ] Add Act I cover placeholder
- [ ] Add NPC token placeholders
- [ ] Add enemy token placeholders
- [ ] Add Item icon placeholders
- [ ] Add Scene map placeholders

### Final Assets

- [ ] Commission or generate final cover art
- [ ] Create Temple of the Dawn Chain map
- [ ] Create Hall of Lamps battle map
- [ ] Create Ash Millet village map
- [ ] Create Shrine of the Buried Bell map
- [ ] Create Western Archive map
- [ ] Create NPC portraits
- [ ] Create enemy tokens
- [ ] Create magic item icons
- [ ] Confirm every asset has a valid license for module distribution

## 14. Adventure Document Packaging

- [ ] Create Act I Adventure document in Foundry
- [ ] Add Act I Journals to Adventure
- [ ] Add Act I Actors to Adventure
- [ ] Add Act I Items to Adventure
- [ ] Add Act I Scenes to Adventure
- [ ] Add Act I Roll Tables to Adventure
- [ ] Add Act I Macros to Adventure if ready
- [ ] Verify folder structure inside Adventure
- [ ] Build Adventure into compendium
- [ ] Export or commit generated pack data

## 15. Testing

### Local Foundry Testing

- [ ] Install module into Foundry Data/modules folder
- [ ] Activate module in a clean D&D 5e world
- [ ] Confirm all packs appear
- [ ] Import Act I Adventure
- [ ] Confirm Journals import
- [ ] Confirm Actors import
- [ ] Confirm Items import
- [ ] Confirm Scenes import
- [ ] Confirm Roll Tables import
- [ ] Confirm Macros import if included
- [ ] Confirm no missing image paths
- [ ] Confirm no console errors

### Playtest

- [ ] Run Session 1 with one player character
- [ ] Test divine vow choice
- [ ] Test Seal-Warped Beast fight
- [ ] Run Session 2 investigation
- [ ] Test Bell-Eater Grub boss
- [ ] Run Session 3 archive sequence
- [ ] Test skill challenge pacing
- [ ] Test Act II destination choice
- [ ] Record balance issues
- [ ] Revise content based on playtest

## 16. Documentation

- [ ] Add installation instructions
- [ ] Add GM quickstart
- [ ] Add known issues
- [ ] Add module version history
- [ ] Add content warning section
- [ ] Add solo-play advice
- [ ] Add conversion notes for future Acts
- [ ] Add asset license credits

## 17. Release Preparation

- [ ] Update version number
- [ ] Validate manifest URL strategy
- [ ] Validate download URL strategy
- [ ] Create release ZIP
- [ ] Test installing from ZIP
- [ ] Create GitHub release
- [ ] Attach ZIP to release
- [ ] Add release notes
- [ ] Tag release version

## 18. Future Acts

### Act II — Pilgrimage of the Three Keys

- [ ] Convert Act II journals
- [ ] Build three destination arcs
- [ ] Add Name, Pattern, and Sacrifice sealing arts
- [ ] Add travel tables
- [ ] Add regional Scenes
- [ ] Add Act II bosses

### Act III — The Breaking Pilgrimage

- [ ] Convert Act III journals
- [ ] Add disaster manifestation clocks
- [ ] Add cults and avatars
- [ ] Add dream intrusion mechanics
- [ ] Add mutation tables
- [ ] Add escalation Scenes

### Act IV — The Fox Behind the Human Face

- [ ] Convert Act IV journals
- [ ] Build Temple return sequence
- [ ] Build hidden fourth seal dungeon
- [ ] Add Atsumori Nine-Tails Actor
- [ ] Add final choice mechanics
- [ ] Add ending variants

## Current Next Tasks

1. Finish Act I location source files.
2. Create Act I Actor specification files.
3. Create Act I Item specification files.
4. Create Act I Roll Table specification files.
5. Decide whether to generate JSON compendium seed data manually or build inside Foundry first and commit the exported packs.
