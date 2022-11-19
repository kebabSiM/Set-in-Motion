onEvent('recipes', event => {
event.recipes.createFilling('minecraft:golden_apple', [
  'minecraft:apple',
  Fluid.of('tconstruct:molten_gold', 720)]),
event.recipes.createFilling('thermal:syrup_bottle', [
  'minecraft:glass_bottle',
  Fluid.of('thermal:syrup', 250)]),
event.recipes.createFilling('minecraft:golden_carrot', [
  'minecraft:carrot',
  Fluid.of('tconstruct:molten_gold', 80)])
})
