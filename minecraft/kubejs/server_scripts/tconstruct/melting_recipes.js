onEvent('recipes', event => {
//Add Create crushed ore to Tinker's Construct
event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "create:crushed_iron_ore"
  },
  "result": {
    "fluid": "tconstruct:molten_iron",
    "amount": 90
  },
  "temperature": 800,
  "time": 50
}),
event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "create:crushed_gold_ore"
  },
  "result": {
    "fluid": "tconstruct:molten_gold",
    "amount": 90
  },
  "temperature": 700,
  "time": 50
}),
event.custom({
      "type": "tconstruct:melting",
      "ingredient": {
        "item": "create:crushed_copper_ore"
      },
      "result": {
        "fluid": "tconstruct:molten_copper",
        "amount": 90
      },
      "temperature": 500,
      "time": 50
  }),
event.custom({
      "type": "tconstruct:melting",
      "ingredient": {
        "item": "create:crushed_zinc_ore"
      },
      "result": {
        "fluid": "tconstruct:molten_zinc",
        "amount": 90
      },
      "temperature": 420,
      "time": 50
  }),
event.custom({
      "type": "tconstruct:melting",
      "ingredient": {
        "item": "create:crushed_osmium_ore"
      },
      "result": {
        "fluid": "tconstruct:molten_osmium",
        "amount": 90
      },
      "temperature": 975,
      "time": 50
  }),
event.custom({
      "type": "tconstruct:melting",
      "ingredient": {
        "item": "create:crushed_silver_ore"
      },
      "result": {
        "fluid": "tconstruct:molten_silver",
        "amount": 90
      },
      "temperature": 790,
      "time": 50
  }),
event.custom({
      "type": "tconstruct:melting",
      "ingredient": {
        "item": "create:crushed_tin_ore"
      },
      "result": {
        "fluid": "tconstruct:molten_tin",
        "amount": 90
      },
      "temperature": 225,
      "time": 50
  }),
event.custom({
      "type": "tconstruct:melting",
      "ingredient": {
        "item": "create:crushed_lead_ore"
      },
      "result": {
        "fluid": "tconstruct:molten_lead",
        "amount": 90
      },
      "temperature": 330,
      "time": 50
  }),
event.custom({
      "type": "tconstruct:melting",
      "ingredient": {
        "item": "create:crushed_aluminum_ore"
      },
      "result": {
        "fluid": "tconstruct:molten_aluminum",
        "amount": 90
      },
      "temperature": 425,
      "time": 50
  }),
event.custom({
      "type": "tconstruct:melting",
      "ingredient": {
        "item": "create:crushed_uranium_ore"
      },
      "result": {
        "fluid": "tconstruct:molten_uranium",
        "amount": 90
      },
      "temperature": 830,
      "time": 50
  }),
event.custom({
      "type": "tconstruct:melting",
      "ingredient": {
        "item": "create:crushed_nickel_ore"
      },
      "result": {
        "fluid": "tconstruct:molten_nickel",
        "amount": 90
      },
      "temperature": 950,
      "time": 50
  }),
//Add Alex's Mobs insect items to Tinker's, cuz the flies fly into your foundry all too often.
event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
          "tag": "alexsmobs:insect_items"
        },
        "result": {
          "fluid": "tconstruct:blood",
          "amount": 50
        },
        "temperature": 36,
        "time": 50
    })
})
