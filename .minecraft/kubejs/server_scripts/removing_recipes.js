onEvent('recipes', event => {

//Remove Tool's Complement Knives, they were kinda unneccesary.
  event.remove({output: 'tools_complement:copper_knife'}),
  event.remove({output: 'tools_complement:gold_knife'}),
  event.remove({output: 'tools_complement:iron_knife'}),
  event.remove({output: 'tools_complement:diamond_knife'}),
  event.remove({output: 'tools_complement:netherite_knife'}),
  event.remove({output: 'tools_complement:tin_knife'}),
  event.remove({output: 'tools_complement:lead_knife'}),
  event.remove({output: 'tools_complement:silver_knife'}),
  event.remove({output: 'tools_complement:nickel_knife'}),
  event.remove({output: 'tools_complement:bronze_knife'}),
  event.remove({output: 'tools_complement:electrum_knife'}),
  event.remove({output: 'tools_complement:invar_knife'}),
  event.remove({output: 'tools_complement:constantan_knife'}),

//Remove Thermal's Rubber recipe
  event.remove({output: 'thermal:rubber'}),

//Remove other Mekanism's ingots.
  event.remove({output: 'mekanism:ingot_bronze'}),
  event.remove({output: 'mekanism:ingot_steel'}),
  event.remove({output: 'mekanism:ingot_tin'}),
  event.remove({output: 'mekanism:ingot_lead'}),
  event.remove({output: 'mekanism:ingot_uranium'}),
//Remove recipe for the Structure Compass, as it can locate the Stronghold with no Ender Eyes.
  event.remove({output: 'structurecompass:structurecompass'})})
