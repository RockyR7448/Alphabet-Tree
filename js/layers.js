addLayer("a", {
    name: "A", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "A points", // Name of prestige currency
    baseResource: "bytes", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}, 
    upgrades: {
      11: {
        title: "Initiate!",
        description: "Officially start the game. Have fun! (You start gaining a byte per second.)",
        cost: new Decimal(1)
      },
      12: {
        title: "Better CPU",
        description: "Your byte gain is boosted.",
        unlocked() {
          return hasUpgrade(this.layer, 11);
        },
        effect() {
          let eff = new Decimal(2);
          
          return eff;
        },
        effectDisplay() {
          return format(this.effect) + "x";
        }
      }
    }
})
