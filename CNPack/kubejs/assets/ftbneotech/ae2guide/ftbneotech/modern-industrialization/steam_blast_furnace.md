---
navigation:
  parent: ftbneotech/multiblocks.md
  
  title: 蒸汽高炉
  icon: modern_industrialization:steam_blast_furnace
  position: 211
categories:
- modern-industrialization
item_ids:
- 'modern_industrialization:steam_blast_furnace'
---
# 结构

高炉的结构与焦炉相同，唯一的不同是将砖块换成了耐火黏土砖，并在顶部增加了一层空心结构。

<GameScene zoom="4" background="transparent" interactive={true}>
  <ImportStructure src="assets/multiblocks/steam_blast_furnace.snbt" />

  <IsometricCamera yaw="45" pitch="30" />
</GameScene>

# 你的第一块钢

你可以将焦炭研磨成焦炭粉，然后与铁矿石混合得到未加工钢粉。  
<RecipeFor id="modern_industrialization:uncooked_steel_dust" />

当然，使用搅拌机会得到更好的配比。现在，你需要一座蒸汽高炉将其转化为钢。

制作控制器、29 块耐火黏土砖，并与焦炉相同的三个仓口。


## 配方
<RecipeFor id="modern_industrialization:coke_oven" />
