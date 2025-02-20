---
navigation:
  parent: ftbneotech/multiblocks.md
  
  title: 大型蒸汽锅炉
  icon: modern_industrialization:large_steam_boiler
  position: 212
categories:
- modern-industrialization
item_ids:
- 'modern_industrialization:large_steam_boiler'
---

# 多方块结构
<GameScene zoom="4" background="transparent" interactive={true}>
  <ImportStructure src="assets/multiblocks/large_steam_boiler.snbt" />

  <IsometricCamera yaw="45" pitch="30" />
</GameScene>
仓口必须放置在底层。


# 大型蒸汽锅炉

大型蒸汽锅炉是小型青铜锅炉和钢锅炉的升级版本。它的燃料消耗速度是熔炉的 8 倍，但在完全加热后，可生成 256 mb/t 的蒸汽。  

与单方块版本不同，大型蒸汽锅炉会损失 80% 的未消耗热量。这意味着当锅炉的输出低于最大值时，燃料的能量转化效率将大幅降低。因此，如果锅炉未能持续满负荷运行，其燃料利用率将受到影响。  

你主要需要的方块是镀铜砖块，此外还需要青铜管道机械外壳和耐热机械外壳。  

大型蒸汽锅炉的结构由一层耐热机械外壳和三层镀铜砖块组成。$(br2)控制器应放置在第二层（即第一层镀铜砖块）。

## 青铜管道机械外壳
中间的两个方块需要使用青铜管道机械外壳。

<RecipeFor id="modern_industrialization:bronze_machine_casing_pipe" />



## 配方
<RecipeFor id="modern_industrialization:large_steam_boiler" />
