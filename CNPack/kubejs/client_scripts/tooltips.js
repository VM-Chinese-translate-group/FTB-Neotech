const toolTips = [
  ["forcecraft:force_shears", "能够剪多数动物的毛！"],
  // 禁用沉浸工程多方块结构
  ["immersiveengineering:lightning_rod", "在本整合包禁用，不会形成"],
  
  // 护符
  ["copper_amulets:iron_amulet","佩戴时提供抗性提升 I"],
  ["copper_amulets:gold_amulet","佩戴时提供急迫 II，同时猪灵不会主动攻击你"],
  ["copper_amulets:lapis_amulet","佩戴时提供海豚的恩惠 II"],
  ["copper_amulets:redstone_amulet", "佩戴时提供夜视"],
  ["copper_amulets:quartz_amulet", "佩戴时提供再生"],
  ["copper_amulets:diamond_amulet", "佩戴时提供力量 I，抗性提升 II"],
  ["copper_amulets:emerald_amulet", "佩戴时提供村庄英雄"],
  ["copper_amulets:netherite_amulety","力量 III，抗性提升 III，火焰抗性 I"],
  ["copper_amulets:end_amulet", "佩戴时提供再生 II，跳跃提升 III，缓降 I，使末影人变得中立"],
  ["copper_amulets:amethyst_amulet", "佩戴时提供速度 II"],
  ["copper_amulets:echo_amulet", "佩戴时蹲下可提供速度 IV"],
  ["copper_amulets:ocean_amulet", "佩戴时提供水下呼吸"],
  ["copper_amulets:lucky_amulet", "佩戴时提供幸运 I"],
  ["copper_amulets:obsidian_amulet", "佩戴时提供抗性提升 III，缓慢 I"],
  ["copper_amulets:slime_amulet", "佩戴时提供跳跃提升 II"],
  ["copper_amulets:amulet_of_amulets", "佩戴时提供抗性提升 IV，再生 II，急迫 III，力量 V，幸运 III，速度 II，跳跃提升 III，缓降 II，水下呼吸 I，夜视 I，村庄英雄 III，火焰抗性 I"],
  ["mekanism:basic_smelting_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:basic_enriching_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:basic_crushing_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:basic_compressing_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:basic_combining_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:basic_purifying_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:basic_injecting_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:basic_infusing_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:basic_sawing_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:advanced_smelting_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:advanced_enriching_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:advanced_crushing_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:elite_purifying_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:elite_combining_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:elite_compressing_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:elite_crushing_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:elite_enriching_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:elite_smelting_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:advanced_sawing_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:advanced_infusing_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:advanced_injecting_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:advanced_purifying_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:advanced_combining_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:advanced_compressing_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:elite_injecting_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:elite_infusing_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:elite_sawing_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:ultimate_smelting_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:ultimate_enriching_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:ultimate_crushing_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:ultimate_compressing_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:ultimate_combining_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:ultimate_purifying_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:ultimate_injecting_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:ultimate_infusing_factory","使用工厂安装器获得工厂版本"],
  ["mekanism:ultimate_sawing_factory","使用工厂安装器获得工厂版本"],
  ["actuallyadditions:black_quartz", "可以从猪灵处交易获得"],
  ["modern_industrialization:bronze_nugget", "可以从猪灵处交易获得"],
  ["minecraft:ender_pearl", "可以从猪灵处交易获得"],
  ["immersiveengineering:ersatz_leather", "可以从猪灵处交易获得"],
  ["minecraft:quartz", "可以从猪灵处交易获得"],
  ["minecraft:obsidian", "可以从猪灵处交易获得"],
  ["minecraft:crying_obsidian", "可以从猪灵处交易获得"],
  ["minecraft:nether_brick", "可以从猪灵处交易获得"],
  ["minecraft:spectral_arrow", "可以从猪灵处交易获得"],
  ["minecraft:blackstone", "可以从猪灵处交易获得"],
  ["justdirethings:coal_t1", "可以从猪灵处交易获得"],
  ["minecraft:nether_wart", "可以从猪灵处交易获得"],
  ["minecraft:shulker_shell", "可以从猪灵处交易获得"],
  ["modern_industrialization:coke", "可以从猪灵处交易获得"],
  ["minecraft:redstone", "可以从猪灵处交易获得"],
  ["minecraft:wither_rose", "可以从猪灵处交易获得"],
  ["javd:portal_block", "敌对生物：不生成"],
  ["javd:portal_block", "被动生物：不生成"],
  ["javd:portal_block", "天气效果：无"],
  ["javd:portal_block", "昼夜循环：永日"],
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

  toolTips.forEach((tip) => e.add(tip[0], Text.gold(tip[1])));
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
        Text.of("至").darkGray(),
        Text.of(coords[1].toFixed(0)).gold(),

      ],
      coords[2]
      ? [
          Text.of("最高密度位于").darkGray(),
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
          Text.of("[Shift]").gray(),
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
