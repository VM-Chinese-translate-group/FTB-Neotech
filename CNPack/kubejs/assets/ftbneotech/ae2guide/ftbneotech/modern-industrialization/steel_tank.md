---
navigation:
  parent: ftbneotech/multiblocks.md
  
  title: Steel Tank
  icon: modern_industrialization:steel_tank
  position: 211
categories:
- modern-industrialization
item_ids:
- 'modern_industrialization:large_tank'
- 'modern_industrialization:large_tank_hatch'
---
# Structure

<GameScene zoom="4" background="transparent" interactive={true}>
  <ImportStructure src="assets/multiblocks/steel_tank.snbt" />

  <IsometricCamera yaw="45" pitch="30" />
</GameScene>

# A Large Tank

The Large Tank is a multiblock that allows you to store large amounts of some fluid, for example steam. It can store 64 buckets worth of fluid for every block in the structure (including sides).

The Large Tank has many possible sizes depending on how much storage you need. You can open the size configuration panel by clicking on a button in the controller.
Only pipes may access the tank, either through the controller or through a Large Tank Hatch.

Don't break the controller or you will lose all of the stored fluid!

## Recipe
<RecipeFor id="modern_industrialization:large_tank" />



# Large Tank Hatch

The Large Tank Hatch acts as an extension of the Large Tank block. You can right-click it to open the Large Tank's menu, and pipes connected to it will directly access the Large Tank's storage.

## Recipe
<RecipeFor id="modern_industrialization:large_tank_hatch" />
