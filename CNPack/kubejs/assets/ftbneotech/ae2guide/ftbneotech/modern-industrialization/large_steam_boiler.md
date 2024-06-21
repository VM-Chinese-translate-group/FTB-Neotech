---
navigation:
  parent: ftbneotech/multiblocks.md
  
  title: Large Steam Boiler
  icon: modern_industrialization:large_steam_boiler
  position: 212
categories:
- modern-industrialization
item_ids:
- 'modern_industrialization:large_steam_boiler'
---

# Multiblock Structure
<GameScene zoom="4" background="transparent" interactive={true}>
  <ImportStructure src="assets/multiblocks/large_steam_boiler.snbt" />

  <IsometricCamera yaw="45" pitch="30" />
</GameScene>
Hatches must be placed on the bottom layer.


# The Large Steam Boiler

The Large Steam Boiler is an upgraded version of the smaller Bronze and Steel Boilers. It uses fuels 8 times faster than the Furnace, but it produces 256 mb/t of Steam when fully heated

Unlike its single block counterpart, in the Large Steam Boiler, 80% of any unconsumed heat will be lost. This means the ratio of energy produced by fuel consumed will drastically decrease when the output decreases below maximum. This will happen when the Boiler is not used continuously at maximum output.

The main block you'll need is the Bronze Plated Bricks, but you'll also need Bronze Pipe Machine Casings and Heatproof Machine Casings.

The Large Steam Boiler is comprised of one layer of Heatproof Machine Casings and three layers of Bronze Plated Bricks.$(br2)The controller goes on the second layer (i.e. the first layer of Bronze Plated Bricks).

## Bronze Pipe Machine Casings
The two middle blocks are Bronze Pipe Machine Casings.
<RecipeFor id="modern_industrialization:bronze_machine_casing_pipe" />



## Recipe
<RecipeFor id="modern_industrialization:large_steam_boiler" />
