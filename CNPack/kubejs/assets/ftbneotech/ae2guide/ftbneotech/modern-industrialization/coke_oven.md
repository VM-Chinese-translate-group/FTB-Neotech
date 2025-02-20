---
navigation:
  parent: ftbneotech/multiblocks.md
  title: 焦炉
  icon: modern_industrialization:coke_oven
  position: 210
categories:
- modern-industrialization
item_ids:
- 'modern_industrialization:coke_oven'
---

<GameScene zoom="4" background="transparent" interactive={true}>
  <ImportStructure src="assets/multiblocks/coke_oven.snbt" />

  <IsometricCamera yaw="45" pitch="30" />
</GameScene>

# 焦炉

当你对青铜机械感到厌倦时，就可以开始着手炼钢了。最终目标是建造采石场，这是一个多方块结构，能够自动为你开采矿石！  

第一步是制作焦炭，通过在无氧环境下加热煤炭来实现。为此，你需要建造一个焦炉多方块结构。  

对于第一个多方块结构，你需要焦炉本体，21 块砖和 3 个仓口：物品输入、物品输出和流体输入。  

可选地，你还可以添加一个流体输出仓，以收集杂酚油。  

这里的焦炉方块充当控制器的角色。每个多方块都会有一个控制器，但通常你无法直接与控制器交互：所有的输入和输出都通过仓口完成。我们需要一个流体输入仓，因为焦炉由蒸汽驱动，需要一个物品输入仓来放入煤炭，以及一个物品输出仓来取出焦炭。  

我们还可以选择添加一个流体输出仓来收集杂酚油。它是一个概率性产物，如果没有空间存放，将会被丢弃。  

如果缺少任何一个仓口，焦炉将无法启动！手持扳手可以查看缺失的方块和错误！你还可以手持舱口方块来查看它可以放置的位置。  

这个多方块结构需要 21 块砖！REI 可能会显示总共需要 24 块，但由于我们有 3 个仓口，因此只需要 21 块砖来填补剩余的方块。  

当焦炉显示“多方块结构正确”后，填充流体输入仓的蒸汽，将煤炭放入物品输入舱口，你就可以开始使用了！  

焦炭对于炼钢非常有用，同时它也是一种高效燃料，燃烧时间是煤炭的 4 倍！


## 配方

<RecipeFor id="modern_industrialization:coke_oven" />
