onEvent('recipes', event => {
  event.smelting('thermal:tin_ingot', '#forge:raw_materials/tin'),
  event.smelting('thermal:bronze_ingot', '#forge:dusts/bronze'),
  event.smelting('immersiveengineering:ingot_uranium', '#forge:raw_materials/uranium'),
  event.smelting('thermal:steel_ingot', '#forge:dusts/steel'),
  event.smelting('thermal:lead_ingot', '#forge:raw_materials/lead'),
  event.shapeless('3x minecraft:paper', ['3x #immersive_weathering:bark'])
  event.blasting('thermal:tin_ingot', '#forge:raw_materials/tin'),
  event.blasting('thermal:bronze_ingot', '#forge:dusts/bronze'),
  event.blasting('immersiveengineering:ingot_uranium', '#forge:raw_materials/uranium'),
  event.blasting('thermal:steel_ingot', '#forge:dusts/steel'),
  event.blasting('thermal:lead_ingot', '#forge:raw_materials/lead'),
  event.shapeless('botania:manaweave_cloth', ['2x botania:mana_string']),
  event.shapeless('etched:boombox', ['sophisticatedbackpacks:jukebox_upgrade', 'minecraft:iron_ingot']),
  event.shapeless('minecraft:slime_ball', ['farmersdelight:wheat_dough', 'minecraft:lime_dye'])
})
