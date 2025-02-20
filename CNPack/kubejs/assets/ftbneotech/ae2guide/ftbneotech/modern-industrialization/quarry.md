---
navigation:
  parent: ftbneotech/multiblocks.md
  title: 蒸汽/电力采石场
  icon: modern_industrialization:steam_quarry
  position: 211
categories:
- modern-industrialization
item_ids:
- 'modern_industrialization:steam_quarry'
- 'modern_industrialization:electric_quarry'
---

<GameScene zoom="4" background="transparent" interactive={true}>
  <ImportStructure src="assets/multiblocks/quarry.snbt" />

  <IsometricCamera yaw="45" pitch="30" />
</GameScene>

# 采石场

蒸汽采石场是一个蒸汽多方块机器，它消耗青铜钻，通过这些钻头（虚拟地）开采比基岩更深的地方并获得矿石。（请在 EMI 中查看掉落物）。

采石场利用钻头生成矿石，但也有一定几率损坏这些钻头。

确保添加：

- 至少 1 个物品输入仓，用于放入钻头  
- 1 个流体输入仓，用于提供蒸汽  
- 至少 1 个（最好是 2 个或更多）物品输出仓，用于输出矿石  

仓口可以放置在底部的任意两层，通过手持仓口可以查看它们的位置。

电力采石场可以使用更多的钻头，并且在长时间的操作中支持超频。


## 配方

### 蒸汽采石场
<RecipeFor id="modern_industrialization:steam_quarry" />

### 青铜钻
<RecipeFor id="modern_industrialization:bronze_drill" />

### 电力采石场
<RecipeFor id="modern_industrialization:electric_quarry" />
