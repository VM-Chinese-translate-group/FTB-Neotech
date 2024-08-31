---
navigation:
  parent: ftbneotech/multiblocks.md
  
  title: Steam Blast Furnace
  icon: modern_industrialization:steam_blast_furnace
  position: 211
categories:
- modern-industrialization
item_ids:
- 'modern_industrialization:steam_blast_furnace'
---
# Structure

The Blast Furnace's structure is the same as the Coke Oven's, with Bricks replaced by Fire Clay Bricks and one extra hollow layer on top.

<GameScene zoom="4" background="transparent" interactive={true}>
  <ImportStructure src="assets/multiblocks/steam_blast_furnace.snbt" />

  <IsometricCamera yaw="45" pitch="30" />
</GameScene>

# Your first Steel

You can macerate coke to obtain Coke Dust, which you can combine with iron to get Uncooked Steel Dust. 
<RecipeFor id="modern_industrialization:uncooked_steel_dust" />

Using the mixer will give you a better ratio, of course. Now, you will need a Steam Blast Furnace to turn that into steel.


Craft the controller, 29 Fire Clay Bricks and the same three hatches as the Coke Oven.


## Recipe
<RecipeFor id="modern_industrialization:coke_oven" />
