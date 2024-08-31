---
navigation:
  parent: ftbneotech/multiblocks.md
  title: Coke Oven
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

# The Coke Oven

Once you have had enough of the bronze machines, you can start working toward making steel. The ultimate goal is to be able to build the quarry, a multiblock that will dig ores for you!

The first step is to make coke, by heating coal without oxygen. For that, you will need to build a Coke Oven multiblock.


For this first multiblock, you will need the Coke Oven itself of course, 21 Bricks and 3 Hatches: an item input, an item output and a fluid input.

Optionally add a fluid output hatch to collect creosote too.

The Coke Oven block here has the role of a Controller. Every multiblock is managed by a controller, but you usually cannot interact with the controller directly: all input and output goes through hatches. We need a fluid input because the coke oven is powered by steam, we need an item input for the coal and an output for the coke.

We can optionally add a fluid output hatch for the creosote. It is a chanced output and will therefore be voided if there is no room for it.

If we forget one of the hatches, the coke oven will not be able to start!Hold a Wrench to see the missing blocks and the errors! You can also hold a Hatch to know where it can go.

We need 21 Bricks for this multiblock! Check REI, it says 24 total, but we have 3 hatches so we only need bricks for the 21 remaining blocks!

Once the Coke Oven says Shape Valid, fill the fluid input hatch with steam, put coal in the item input hatch and you're good to go!

Coke will be very useful for steel, but it is also a powerful fuel. It lasts 4 times as long as coal!


## Recipe

<RecipeFor id="modern_industrialization:coke_oven" />
