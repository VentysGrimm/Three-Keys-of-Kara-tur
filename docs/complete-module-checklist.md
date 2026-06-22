# Complete Foundry Module Checklist

This checklist tracks the full production path for **Three Keys of Kara-Tur**, from campaign manuscript to a complete installable Foundry VTT D&D 5e adventure module covering Acts I–IV.

## Completion Definition

The module is complete when a GM can install it into Foundry, activate it in a clean D&D 5e world, import the complete Adventure document, and run the full solo campaign from level 1 to level 15 with linked journals, actors, items, scenes, roll tables, macros, and assets.

## 1. Project Foundation

- [x] Create GitHub repository
- [x] Add README
- [x] Add placeholder license
- [x] Add Foundry `module.json`
- [x] Add `scripts/` folder
- [x] Add `styles/` folder
- [x] Add `lang/` folder
- [x] Add `assets/` folder
- [x] Add `packs/` folder
- [x] Add `content/` source folder
- [x] Add project roadmap
- [x] Add adventure structure document
- [x] Add Act I vertical slice checklist
- [ ] Add complete module checklist to README index
- [ ] Add contribution / workflow notes
- [ ] Add content naming conventions
- [ ] Add Foundry development setup instructions
- [ ] Add release packaging instructions

## 2. Foundry Manifest

- [x] Define module ID: `three-keys-of-kara-tur`
- [x] Define module title
- [x] Define module description
- [x] Define author
- [x] Define version number
- [x] Define Foundry compatibility
- [x] Define D&D 5e system relationship
- [x] Register JavaScript file
- [x] Register CSS file
- [x] Register localization file
- [x] Register Adventure pack
- [x] Register Actor pack
- [x] Register Item pack
- [x] Register JournalEntry pack
- [x] Register Scene pack
- [x] Register RollTable pack
- [x] Register Playlist pack
- [x] Register Macro pack
- [ ] Validate `module.json` against Foundry v13
- [ ] Confirm module loads without console errors
- [ ] Add manifest URL for release
- [ ] Add download URL for release
- [ ] Confirm module folder name matches manifest ID

## 3. Campaign-Wide Adventure Structure

- [ ] Create `00 - Start Here` journal
- [ ] Create `01 - Campaign Overview` journal
- [ ] Create `02 - Solo Play Rules` journal
- [ ] Create `03 - Companion NPCs` journal
- [ ] Create `04 - Act I: The Temple Lie` journal folder
- [ ] Create `05 - Act II: Pilgrimage of the Three Keys` journal folder
- [ ] Create `06 - Act III: The Breaking Pilgrimage` journal folder
- [ ] Create `07 - Act IV: The Fox Behind the Human Face` journal folder
- [ ] Create `08 - Factions and Cults` journal folder
- [ ] Create `09 - Disaster Avatars` journal folder
- [ ] Create `10 - Magic Items and Sealing Arts` journal folder
- [ ] Create `11 - GM Secrets` journal folder
- [ ] Create `12 - Endings` journal folder
- [ ] Add Adventure navigation index
- [ ] Add linked campaign flowchart
- [ ] Add level advancement table
- [ ] Add campaign clocks overview
- [ ] Add content warnings and safety tools section

## 4. Solo Campaign System

- [ ] Define solo encounter balance assumptions
- [ ] Define companion turn rules
- [ ] Define companion support actions
- [ ] Define companion injury rules
- [ ] Define companion death / capture rules
- [ ] Define companion loyalty and romance tracking
- [ ] Define companion rivalry tracking
- [ ] Define secret reveal triggers
- [ ] Define how NPCs advise without stealing player agency
- [ ] Define how many NPCs travel with the player by default
- [ ] Define fallback rules if the player rejects a companion
- [ ] Add solo play quick-reference journal
- [ ] Add solo balance GM notes to every major combat encounter
- [ ] Playtest levels 1, 3, 5, 8, 12, and 15 with one PC

## 5. Act I — The Temple Lie

### Source Conversion

- [x] Add Act I Start Here source
- [x] Add Act I GM Overview source
- [x] Add Session 1 source
- [x] Add Session 2 source
- [x] Add Session 3 source
- [x] Add NPC Companion Guide source
- [x] Add Secrets, Rewards, and Failure States source
- [ ] Add Temple of the Dawn Chain location source
- [ ] Add Ash Millet location source
- [ ] Add Shrine of the Buried Bell location source
- [ ] Add Western Archive location source
- [ ] Add Act I handouts source
- [ ] Add Act I GM quick-reference source

### Journals

- [ ] Convert all Act I sources into Foundry JournalEntries
- [ ] Add read-aloud blocks
- [ ] Add GM-only secret blocks
- [ ] Add encounter summaries
- [ ] Add treasure callouts
- [ ] Add links to Actors, Items, Scenes, and Roll Tables

### Actors

- [ ] Grandmaster Iwamoto
- [ ] Master Ye Sol
- [ ] Master Seigen
- [ ] Yuko Yanagi
- [ ] Jon Soo
- [ ] Joka
- [ ] Elder Hana
- [ ] Toma
- [ ] Old Man Ren
- [ ] Seal-Warped Beast
- [ ] Bell-Eater Grub
- [ ] Masked Temple Guardian

### Items

- [ ] Divine Mark: Bone Cradle
- [ ] Divine Mark: Silver Spear
- [ ] Divine Mark: Black Serpent
- [ ] First Bell Fragment
- [ ] Fox-Marked Scroll Case
- [ ] Old Map of Kara-Tur
- [ ] Damaged Founding Sutra
- [ ] Prayer Tag in Iwamoto's Hand

### Scenes

- [ ] Temple of the Dawn Chain
- [ ] Hall of Lamps
- [ ] Moon Gate Courtyard
- [ ] Grandmaster's Tea Room
- [ ] Medicine Hall
- [ ] Western Archive
- [ ] Village of Ash Millet
- [ ] Shrine of the Buried Bell
- [ ] Bell Chamber / Feeding Tunnel

### Roll Tables and Macros

- [ ] Seal-Warped Beast Mutations
- [ ] Road to Ash Millet Complications
- [ ] Ash Millet Investigation Clues
- [ ] Masked Guardian Traits
- [ ] Archive Escape Complications
- [ ] Archive Escape Tracker macro

### Act I Playtest

- [ ] Run Session 1
- [ ] Run Session 2
- [ ] Run Session 3
- [ ] Test level 1 to 3 pacing
- [ ] Test companion spotlight balance
- [ ] Test Act II hook clarity

## 6. Act II — Pilgrimage of the Three Keys

### Source Conversion

- [ ] Add Act II overview source
- [ ] Add pilgrimage structure source
- [ ] Add Three Keys overview source
- [ ] Add Name sealing art arc source
- [ ] Add Pattern sealing art arc source
- [ ] Add Sacrifice sealing art arc source
- [ ] Add travel events source
- [ ] Add regional factions source
- [ ] Add Act II secrets source
- [ ] Add Act II failure states source
- [ ] Add Act II transition to Act III source

### Journals

- [ ] Convert Act II overview into JournalEntry
- [ ] Convert each pilgrimage region into JournalEntry
- [ ] Convert each Key dungeon / trial into JournalEntry
- [ ] Add GM route guidance
- [ ] Add alternate order guidance for the three Keys
- [ ] Add player-facing handouts
- [ ] Add clue summaries
- [ ] Add escalation notes

### Actors

- [ ] Key guardians
- [ ] Local guides
- [ ] Rival pilgrims
- [ ] Cult scouts
- [ ] Regional monsters
- [ ] Dream-touched enemies
- [ ] Shrine defenders
- [ ] Act II boss for Name arc
- [ ] Act II boss for Pattern arc
- [ ] Act II boss for Sacrifice arc

### Items and Features

- [ ] Name Key
- [ ] Pattern Key
- [ ] Sacrifice Key
- [ ] Name sealing art feature
- [ ] Pattern sealing art feature
- [ ] Sacrifice sealing art feature
- [ ] Pilgrimage relics
- [ ] Regional charms
- [ ] Companion boons
- [ ] Ritual components

### Scenes

- [ ] Kara-Tur pilgrimage route map
- [ ] Name Key destination map
- [ ] Pattern Key destination map
- [ ] Sacrifice Key destination map
- [ ] Road encounter maps
- [ ] Shrine maps
- [ ] Safe camp scene
- [ ] Act II finale scene

### Roll Tables and Macros

- [ ] Pilgrimage Road Events
- [ ] Regional Omens
- [ ] Rival Pilgrim Encounters
- [ ] Key Trial Complications
- [ ] Companion Tension Events
- [ ] Fox Spirit Bargains
- [ ] Act II travel clock macro
- [ ] Key progress tracker macro

### Act II Playtest

- [ ] Test each Key arc independently
- [ ] Test all possible Key orders
- [ ] Test level 4 to 8 pacing
- [ ] Test travel table frequency
- [ ] Test companion scenes during travel
- [ ] Test Act III escalation trigger

## 7. Act III — The Breaking Pilgrimage

### Source Conversion

- [ ] Add Act III overview source
- [ ] Add disaster escalation source
- [ ] Add cult activity source
- [ ] Add dream intrusion source
- [ ] Add mutation and corruption source
- [ ] Add avatar manifestation source
- [ ] Add Grandmaster manipulation reveal source
- [ ] Add Act III failure states source
- [ ] Add Act III transition to Act IV source

### Journals

- [ ] Convert Act III overview into JournalEntry
- [ ] Convert disaster clocks into JournalEntries
- [ ] Convert cult chapters into JournalEntries
- [ ] Convert avatar chapters into JournalEntries
- [ ] Add dream sequence journals
- [ ] Add mutation consequence journals
- [ ] Add companion crisis journals
- [ ] Add campaign midpoint revelation journal

### Actors

- [ ] Disaster cult leaders
- [ ] Disaster cultists
- [ ] Mutated villagers
- [ ] Dream intruders
- [ ] Tarrasque avatar
- [ ] Sliver avatar
- [ ] Aboleth avatar
- [ ] Corrupted pilgrims
- [ ] Temple defectors
- [ ] Act III major boss actors

### Items and Features

- [ ] Disaster corruption effects
- [ ] Dream scars
- [ ] Mutation conditions
- [ ] Strengthened Key features
- [ ] Broken seal fragments
- [ ] Companion crisis boons
- [ ] Ritual repair components

### Scenes

- [ ] Disaster spread map
- [ ] Earthquake-torn village
- [ ] Dream battlefield
- [ ] Cult hideout
- [ ] Mutated shrine
- [ ] Avatar manifestation site
- [ ] Breaking pilgrimage route scene
- [ ] Act III finale scene

### Roll Tables and Macros

- [ ] Disaster Escalation Events
- [ ] Cult Complications
- [ ] Dream Intrusions
- [ ] Disaster Mutations
- [ ] Companion Crisis Events
- [ ] Earthquake Complications
- [ ] Avatar Omens
- [ ] Disaster clock macro
- [ ] Dream intrusion macro
- [ ] Mutation macro

### Act III Playtest

- [ ] Test level 9 to 12 pacing
- [ ] Test disaster clock pressure
- [ ] Test dream intrusion frequency
- [ ] Test cult encounter variety
- [ ] Test avatar encounters
- [ ] Test Grandmaster reveal clarity
- [ ] Test transition back to the Temple

## 8. Act IV — The Fox Behind the Human Face

### Source Conversion

- [ ] Add Act IV overview source
- [ ] Add return to Temple source
- [ ] Add hidden fourth seal source
- [ ] Add Atsumori Nine-Tails source
- [ ] Add final ritual source
- [ ] Add kill / redeem / seal / release ending source
- [ ] Add companion final choice source
- [ ] Add epilogue source

### Journals

- [ ] Convert Act IV overview into JournalEntry
- [ ] Convert Temple return sequence into JournalEntry
- [ ] Convert hidden fourth seal dungeon into JournalEntry
- [ ] Convert Atsumori confrontation into JournalEntry
- [ ] Convert ending variants into JournalEntries
- [ ] Add final GM quick-reference
- [ ] Add final player handouts

### Actors

- [ ] Atsumori Nine-Tails
- [ ] Human-faced Iwamoto form
- [ ] Fox spirit echoes
- [ ] Fourth seal guardians
- [ ] Final cult remnants
- [ ] Disaster echoes
- [ ] Companion final-state variants if needed

### Items and Features

- [ ] Completed Three Keys ritual item
- [ ] Fourth seal key
- [ ] Atsumori's curse feature
- [ ] Final sacrifice options
- [ ] Redemption ritual feature
- [ ] Seal-breaking feature
- [ ] Epilogue boons and scars

### Scenes

- [ ] Returned Temple of the Dawn Chain
- [ ] Sealed Lower Stair
- [ ] Hidden Fourth Seal dungeon
- [ ] Fox Court dream chamber
- [ ] Atsumori final arena
- [ ] Ritual aftermath scene
- [ ] Ending tableau scenes

### Roll Tables and Macros

- [ ] Atsumori Temptations
- [ ] Fourth Seal Echoes
- [ ] Final Companion Appeals
- [ ] Final Sacrifice Costs
- [ ] Ending Consequences
- [ ] Final ritual tracker macro
- [ ] Atsumori phase tracker macro

### Act IV Playtest

- [ ] Test level 13 to 15 pacing
- [ ] Test final dungeon length
- [ ] Test Atsumori difficulty
- [ ] Test each ending path
- [ ] Test companion closure scenes
- [ ] Test final ritual choices
- [ ] Test epilogue readability

## 9. Campaign-Wide Actors

### Companion Actors

- [ ] Build full level-scaled companion versions
- [ ] Add level 1–3 stat profiles
- [ ] Add level 4–8 stat profiles
- [ ] Add level 9–12 stat profiles
- [ ] Add level 13–15 stat profiles
- [ ] Add companion-specific items and features
- [ ] Add token art
- [ ] Add portrait art
- [ ] Add biography and secret tabs
- [ ] Add relationship tracking notes

### Enemy Actors

- [ ] Create shared enemy naming convention
- [ ] Create minion templates
- [ ] Create elite templates
- [ ] Create boss templates
- [ ] Add scaling guidance
- [ ] Add token art placeholders
- [ ] Add final token art
- [ ] Test all combat actors

### NPC Actors

- [ ] Add all named NPCs from Acts I–IV
- [ ] Add village / civilian templates
- [ ] Add temple monk templates
- [ ] Add cultist templates
- [ ] Add shrine guardian templates
- [ ] Add fox spirit templates

## 10. Campaign-Wide Items

- [ ] Build all divine marks
- [ ] Build all sealing arts
- [ ] Build all Key relics
- [ ] Build all ritual components
- [ ] Build all companion boons
- [ ] Build all corruption effects
- [ ] Build all story handout items
- [ ] Build all treasure parcels
- [ ] Add item art placeholders
- [ ] Add final item icons
- [ ] Test item activations
- [ ] Test limited-use features
- [ ] Test saving throw formulas
- [ ] Test damage / healing formulas

## 11. Campaign-Wide Roll Tables

- [ ] Build travel tables
- [ ] Build omen tables
- [ ] Build cult tables
- [ ] Build mutation tables
- [ ] Build dream tables
- [ ] Build companion tension tables
- [ ] Build fox bargain tables
- [ ] Build disaster escalation tables
- [ ] Build sacrifice cost tables
- [ ] Build ending consequence tables
- [ ] Link roll tables to relevant journals
- [ ] Test all roll tables in chat

## 12. Campaign-Wide Scenes

- [ ] Create regional overview maps
- [ ] Create Act I scene maps
- [ ] Create Act II scene maps
- [ ] Create Act III scene maps
- [ ] Create Act IV scene maps
- [ ] Add map pins
- [ ] Add journal notes
- [ ] Add walls where useful
- [ ] Add lighting where useful
- [ ] Add sounds where useful
- [ ] Add token placements
- [ ] Add scene thumbnails
- [ ] Optimize image sizes
- [ ] Confirm no broken scene paths

## 13. Macros and Automation

- [ ] Add disaster clock macro
- [ ] Add companion reaction macro
- [ ] Add companion tension macro
- [ ] Add dream intrusion macro
- [ ] Add mutation macro
- [ ] Add travel event macro
- [ ] Add sealing ritual tracker macro
- [ ] Add archive escape tracker macro
- [ ] Add final ritual tracker macro
- [ ] Add macro documentation journal
- [ ] Test macros as GM
- [ ] Test macros with limited player permissions where needed

## 14. Playlists and Audio

- [ ] Add temple ambience playlist
- [ ] Add pilgrimage road playlist
- [ ] Add disaster rising playlist
- [ ] Add dream realm playlist
- [ ] Add fox court playlist
- [ ] Add final seal playlist
- [ ] Add combat music placeholders
- [ ] Add ambience placeholders
- [ ] Confirm all audio is licensed
- [ ] Confirm audio paths work after import

## 15. Art and Asset Pipeline

- [ ] Define art style guide
- [ ] Define token style guide
- [ ] Define map style guide
- [ ] Define filename conventions
- [ ] Create cover art
- [ ] Create act header art
- [ ] Create NPC portraits
- [ ] Create enemy tokens
- [ ] Create item icons
- [ ] Create battle maps
- [ ] Create regional maps
- [ ] Create handout art
- [ ] Compress assets for Foundry use
- [ ] Confirm all asset licenses
- [ ] Add asset credits

## 16. Adventure Document Packaging

- [ ] Build complete Adventure document in Foundry
- [ ] Add all Journals
- [ ] Add all Actors
- [ ] Add all Items
- [ ] Add all Scenes
- [ ] Add all Roll Tables
- [ ] Add all Playlists
- [ ] Add all Macros
- [ ] Preserve folder organization
- [ ] Confirm embedded links survive Adventure build
- [ ] Confirm scene token links survive Adventure build
- [ ] Confirm compendium references work
- [ ] Commit generated pack data
- [ ] Import Adventure into clean world
- [ ] Verify imported structure

## 17. Quality Assurance

### Technical QA

- [ ] Install module from local repo
- [ ] Install module from ZIP
- [ ] Activate module in clean D&D 5e world
- [ ] Verify all compendia load
- [ ] Verify Adventure imports
- [ ] Verify all journals open
- [ ] Verify all actors open
- [ ] Verify all items open
- [ ] Verify all scenes load
- [ ] Verify all roll tables roll
- [ ] Verify all macros execute
- [ ] Check browser console for errors
- [ ] Check missing asset paths
- [ ] Check broken document links

### Content QA

- [ ] Proofread all journals
- [ ] Check consistency of NPC names
- [ ] Check consistency of locations
- [ ] Check divine seal terminology
- [ ] Check level advancement pacing
- [ ] Check encounter difficulty
- [ ] Check solo companion agency
- [ ] Check clue availability
- [ ] Check failure states
- [ ] Check ending logic

### Accessibility QA

- [ ] Use readable journal headings
- [ ] Avoid overlong journal pages where possible
- [ ] Add clear GM summaries
- [ ] Add player-facing handout separation
- [ ] Add alt-text notes for key handout images where useful
- [ ] Use consistent table formatting

## 18. Playtesting

- [ ] Run Act I full playtest
- [ ] Run Act II full playtest
- [ ] Run Act III full playtest
- [ ] Run Act IV full playtest
- [ ] Run complete campaign continuity review
- [ ] Test with martial PC
- [ ] Test with caster PC
- [ ] Test with stealth/social PC
- [ ] Test with low-optimization PC
- [ ] Test with high-optimization PC
- [ ] Record balance notes
- [ ] Record pacing notes
- [ ] Record confusing clues
- [ ] Revise based on feedback

## 19. Legal and Release Readiness

- [ ] Decide final license
- [ ] Remove or rewrite unlicensed rules text
- [ ] Confirm D&D 5e compatibility language
- [ ] Confirm Foundry VTT compatibility language
- [ ] Confirm no unlicensed third-party art
- [ ] Confirm no unlicensed maps
- [ ] Confirm no unlicensed audio
- [ ] Add credits file
- [ ] Add changelog
- [ ] Add known issues file
- [ ] Add installation instructions
- [ ] Add release notes template

## 20. Release Checklist

- [ ] Bump version in `module.json`
- [ ] Create release branch
- [ ] Build release ZIP
- [ ] Test release ZIP install
- [ ] Create GitHub release
- [ ] Attach ZIP to GitHub release
- [ ] Add manifest URL
- [ ] Add download URL
- [ ] Tag release version
- [ ] Update README with install instructions
- [ ] Confirm public repo presentation

## 21. Post-Release Maintenance

- [ ] Track bug reports
- [ ] Track balance feedback
- [ ] Track broken links
- [ ] Track Foundry version changes
- [ ] Track D&D 5e system version changes
- [ ] Patch module manifest as needed
- [ ] Patch compendium data as needed
- [ ] Maintain changelog
- [ ] Plan next release milestone

## Current Priority Order

1. Complete Act I source files.
2. Build Act I actors, items, roll tables, and scenes.
3. Import Act I into Foundry as the first playable Adventure slice.
4. Test module activation and Act I Adventure import.
5. Convert Act II source.
6. Convert Acts III and IV.
7. Build complete Adventure document.
8. Complete full campaign QA and release package.
