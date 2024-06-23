const toolTips = [
  ["forcecraft:force_shears", "tooltip.forcecraft.force_shears"],
  //Immersive Multiblocks disabled
  ["immersiveengineering:lightning_rod", "tooltip.disabled_multiblock"],
  
  //amulets
  ["copper_amulets:iron_amulet","tooltip.copper_amulets.iron_amulet"],
  ["copper_amulets:gold_amulet","tooltip.copper_amulets.gold_amulet"],
  ["copper_amulets:lapis_amulet","tooltip.copper_amulets.lapis_amulet"],
  ["copper_amulets:redstone_amulet", "tooltip.copper_amulets.redstone_amulet"],
  ["copper_amulets:quartz_amulet", "tooltip.copper_amulets.quartz_amulet"],
  ["copper_amulets:diamond_amulet", "tooltip.copper_amulets.diamond_amulet"],
  ["copper_amulets:emerald_amulet", "tooltip.copper_amulets.emerald_amulet"],
  ["copper_amulets:netherite_amulet", "tooltip.copper_amulets.netherite_amulet"],
  ["copper_amulets:end_amulet", "tooltip.copper_amulets.end_amulet"],
  ["copper_amulets:amethyst_amulet", "tooltip.copper_amulets.amethyst_amulet"],
  ["copper_amulets:echo_amulet", "tooltip.copper_amulets.echo_amulet"],
  ["copper_amulets:ocean_amulet", "tooltip.copper_amulets.ocean_amulet"],
  ["copper_amulets:lucky_amulet", "tooltip.copper_amulets.lucky_amulet"],
  ["copper_amulets:obsidian_amulet", "tooltip.copper_amulets.obsidian_amulet"],
  ["copper_amulets:slime_amulet", "tooltip.copper_amulets.slime_amulet"],
  ["copper_amulets:amulet_of_amulets", "tooltip.copper_amulets.amulet_of_amulets"],
  [/mekanism:(.*)_factory/, "tooltip.mekanism.factory_upgrade"],
  ["actuallyadditions:black_quartz", "tooltip.piglin_bartering"],
  ["modern_industrialization:bronze_nugget", "tooltip.piglin_bartering"],
  ["minecraft:ender_pearl", "tooltip.piglin_bartering"],
  ["immersiveengineering:ersatz_leather", "tooltip.piglin_bartering"],
  ["minecraft:quartz", "tooltip.piglin_bartering"],
  ["minecraft:obsidian", "tooltip.piglin_bartering"],
  ["minecraft:crying_obsidian", "tooltip.piglin_bartering"],
  ["minecraft:nether_brick", "tooltip.piglin_bartering"],
  ["minecraft:spectral_arrow", "tooltip.piglin_bartering"],
  ["minecraft:blackstone", "tooltip.piglin_bartering"],
  ["justdirethings:coal_t1", "tooltip.piglin_bartering"],
  ["minecraft:nether_wart", "tooltip.piglin_bartering"],
  ["minecraft:shulker_shell", "tooltip.piglin_bartering"],
  ["modern_industrialization:coke", "tooltip.piglin_bartering"],
  ["minecraft:redstone", "tooltip.piglin_bartering"],
  ["minecraft:wither_rose", "tooltip.piglin_bartering"],
  ["javd:portal_block", "tooltip.no_hostile_spawn"],
  ["javd:portal_block", "tooltip.no_passive_spawn"],
  ["javd:portal_block", "tooltip.no_weather"],
  ["javd:portal_block", "tooltip.always_day"],
  
];

ItemEvents.tooltip((e) => {
  let tooltipNBT = (itemNoNBT, itemWithNBT, theText) => {
    e.addAdvanced(itemNoNBT, (item, advanced, text) => {
      if (item.test(itemWithNBT)) {
        if (Array.isArray(theText)) {
          theText.forEach(function (line, index) {
            text.add(index + 1, line);
          });
        } else {
          text.add(1, theText);
        }
      }
    });
  };

  toolTips.forEach((tip) => e.add(tip[0], Text.gold(Component.translate(tip[1]))));
});




const oreMap = {
  "minecraft:coal_ore": [0, 128, 95],
  "minecraft:iron_ore": [-32, 56, 16],
  "minecraft:copper_ore": [-16, 112, 48],
  "minecraft:gold_ore": [-64, 32, -16],
  "minecraft:gold_ore_badlands": [32, 256],
  "minecraft:redstone_ore": [-64, 16, -59],
  "minecraft:lapis_ore": [-64, 64, -1],
  "minecraft:diamond_ore": [-64, 16, -59],
  "minecraft:emerald_ore": [-16, 320, 236],
  "minecraft:deepslate_iron_ore": [0, -64, -16],
  "minecraft:deepslate_copper_ore": [0, -16, -1],
  "minecraft:deepslate_gold_ore": [-64, 32, -16],
  "minecraft:deepslate_redstone_ore": [-32, -64, -64],
  "minecraft:deepslate_lapis_ore": [-64, 0, -1],
  "minecraft:deepslate_diamond_ore": [-16, -64, -59],
  "minecraft:deepslate_emerald_ore": [-16, -64, -16],
  "minecraft:deepslate_coal_ore": [0, -64, null],
  "minecraft:nether_quartz_ore": [10, 117, 80],
  "minecraft:nether_gold_ore": [10, 117, 15],
  "minecraft:ancient_debris": [8, 119, 15]
};



const itemsToTooltip = [];
Object.entries(oreMap).forEach(([ore, coords]) => {
  itemsToTooltip.push({
    item: ore,
    summary: [
      [
        Text.of("Y层").darkGray(),
        Text.of(coords[0].toFixed(0)).gold(),
        Text.of(" - ").darkGray(),
        Text.of(coords[1].toFixed(0)).gold(),

      ],
      coords[2]
      ? [
          Text.of(Component.translate("tooltip.ore.highest_concentration")).darkGray(),
          Text.of(coords[2].toFixed(0)).gold(),
        ]
      : null,
      
    ],
  });
});

ItemEvents.tooltip((tooltip) => {
  itemsToTooltip.forEach((tooltipItem) => {
    tooltip.addAdvanced(tooltipItem.item, (item, advanced, text) => {
      let name = text.get(0);
      text.removeIf((e) => e != name);

      if (!tooltip.shift) {
        text.add(1, [
          Text.of("按住").darkGray(),
          Text.of("[").gray(), Text.of(Component.keybind("key.sneak")).gray(), Text.of("]").gray(),
          Text.of("查看摘要").darkGray(),
        ]);
        // When Holding Shift
      } else {
        
        // define line number
        let lineNumber = 1;
        tooltipItem.summary.forEach((line) => {
          text.add(lineNumber, createFormattedTextObjectArray(line));
          lineNumber++;
        });
      }
    });
  });
});

function createFormattedTextObjectArray(line) {
  let formattedTextObjectArray = [];
  line.forEach((part) => {
    if (typeof part === "string") {
      formattedTextObjectArray.push(Text.of(part));
    } else {
      formattedTextObjectArray.push(part);
    }
  });
  return formattedTextObjectArray;
}
