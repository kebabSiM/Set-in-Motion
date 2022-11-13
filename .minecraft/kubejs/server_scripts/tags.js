onEvent('tags.items', event => {
// Use Tinker's Construct Daggers for Farmer's Delight Knives.
  event.add('farmersdelight:tools/knives', 'tconstruct:dagger'),
  event.add('forge:tools/knives', 'tconstruct:dagger'),

// Upright Bottles for Glass Bottles.
  event.add('create:upright_on_belt', 'thermal:syrup_bottle')

// Removing Mekanism ingot tags, so the default ingot is Thermal.
    event.removeAllTagsFrom('mekanism:ingot_bronze'),
    event.removeAllTagsFrom('mekanism:ingot_steel'),
    event.removeAllTagsFrom('mekanism:ingot_tin'),
    event.removeAllTagsFrom('mekanism:ingot_lead'),
    event.removeAllTagsFrom('mekanism:ingot_uranium')

// Add endRem eyes to tags
event.add('endrem:end_eyes', 'endrem:black_eye'),
event.add('endrem:end_eyes', 'endrem:cold_eye'),
event.add('endrem:end_eyes', 'endrem:corrupted_eye'),
event.add('endrem:end_eyes', 'endrem:lost_eye'),
event.add('endrem:end_eyes', 'endrem:nether_eye'),
event.add('endrem:end_eyes', 'endrem:old_eye'),
event.add('endrem:end_eyes', 'endrem:rogue_eye'),
event.add('endrem:end_eyes', 'endrem:cursed_eye'),
event.add('endrem:end_eyes', 'endrem:evil_eye'),
event.add('endrem:end_eyes', 'endrem:guardian_eye'),
event.add('endrem:end_eyes', 'endrem:magical_eye'),
event.add('endrem:end_eyes', 'endrem:wither_eye'),
event.add('endrem:end_eyes', 'endrem:witch_eye'),
event.add('endrem:end_eyes', 'endrem:undead_eye'),
event.add('endrem:end_eyes', 'endrem:exotic_eye')})
