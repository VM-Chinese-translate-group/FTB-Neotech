---
navigation:
  parent: ftbneotech/multiblocks.md
  
  title: 钢储罐
  icon: modern_industrialization:steel_tank
  position: 211
categories:
- modern-industrialization
item_ids:
- 'modern_industrialization:large_tank'
- 'modern_industrialization:large_tank_hatch'
---
# 结构

<GameScene zoom="4" background="transparent" interactive={true}>
  <ImportStructure src="assets/multiblocks/steel_tank.snbt" />

  <IsometricCamera yaw="45" pitch="30" />
</GameScene>

# 大型储罐

大型储罐是一个多方块结构，允许你存储大量的流体，例如蒸汽。每个结构方块（包括侧面）可存储 64 桶流体。

大型储罐有多种尺寸，具体取决于你需要存储的容量。你可以通过点击控制器上的按钮来打开尺寸配置面板。  
只有管道可以访问储罐，无论是通过控制器还是通过大型储罐仓。

请注意，不要破坏控制器，否则你将失去所有储存的流体！

## 配方
<RecipeFor id="modern_industrialization:large_tank" />



# 大型储罐仓

大型储罐仓作为大型储罐方块的扩展。你可以右键点击它打开储罐菜单，连接到它的管道可以直接获取到大型储罐里的储存物。

## 配方
<RecipeFor id="modern_industrialization:large_tank_hatch" />
