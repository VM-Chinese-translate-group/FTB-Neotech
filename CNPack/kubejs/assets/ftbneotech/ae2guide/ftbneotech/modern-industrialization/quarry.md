---
navigation:
  parent: ftbneotech/multiblocks.md
  title: Steam / Electric Quarry
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

# The Quarry

The Steam Quarry is a Steam Multiblock Machine that consumes Bronze Drills, use them to (virtually) dig deeper than the bedrock and get some ores in return. (Check EMI for the drops).

The Quarry uses the the drills to generate Ores while having a chance to break those drills. 

Be sure to add 

- atleast 1 Item Input Hatch for the drills
- 1 Fluid Input Hatch for steam
- atleast 1 (preferably 2 or more) Item Output Hatches for the ores.
  
The Hatches can be placed on any of the 2 bottom layers and can be shown by holding them in your hand.

The Electric Quarry has access to alot more drills and also allows for overclocking when doing the same operation over a period of time


## Recipe

### Steam Quarry
<RecipeFor id="modern_industrialization:steam_quarry" />

### Bronze Drill
<RecipeFor id="modern_industrialization:bronze_drill" />

### Electric Quarry
<RecipeFor id="modern_industrialization:electric_quarry" />
