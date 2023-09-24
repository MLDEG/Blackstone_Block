//priority: 10000
onEvent('recipes', function (e) {
/**********************FUNCTION***********************/
    function replaceIO(input, output){
        e.replaceInput({}, input, output)
        e.replaceOutput({}, input, output)
    }
/**********************Ingots*************************/
var copperIngot = ['#forge:ingots/copper', 'create:copper_ingot', 'immersiveengineering:ingot_copper', 'mekanism:ingot_copper', 'tconstruct:copper_ingot', 'exnihilosequentia:ingot_copper']
copperIngot.forEach(I =>{replaceIO(I,'thermal:copper_ingot')})
var aluminiumIngot = ['#forge:ingots/aluminum', 'exnihilosequentia:ingot_aluminum']
aluminiumIngot.forEach(I =>{replaceIO(I,'immersiveengineering:ingot_aluminum')})
var nickelIngot = ['#forge:ingots/nickel', 'exnihilosequentia:ingot_nickel', 'immersiveengineering:ingot_nickel']
nickelIngot.forEach(I =>{replaceIO(I,'thermal:nickel_ingot')})
var uraniumIngot = ['#forge:ingots/uranium', 'exnihilosequentia:ingot_uranium', 'immersiveengineering:ingot_uranium']
uraniumIngot.forEach(I =>{replaceIO(I,'mekanism:ingot_uranium')})
var tinIngot = ['#forge:ingots/tin', 'mekanism:ingot_tin']
tinIngot.forEach(I =>{replaceIO(I,'thermal:tin_ingot')})
var silverIngot = ['#forge:ingots/silver', 'immersiveengineering:ingot_silver', 'exnihilosequentia:ingot_silver']
silverIngot.forEach(I =>{replaceIO(I,'thermal:silver_ingot')})
var leadIngot = ['#forge:ingots/lead', 'exnihilosequentia:ingot_lead', 'immersiveengineering:ingot_lead', 'mekanism:ingot_lead']
leadIngot.forEach(I =>{replaceIO(I,'thermal:lead_ingot')})
var steelIngot = ['#forge:ingots/steel', 'immersiveengineering:ingot_steel']
steelIngot.forEach(I =>{replaceIO(I,'mekanism:ingot_steel')})
var bronzeIngot = ['#forge:ingots/bronze', 'mekanism:ingot_bronze']
bronzeIngot.forEach(I =>{replaceIO(I,'thermal:bronze_ingot')})
var constantanIngot = ['#forge:ingots/constantan', 'immersiveengineering:ingot_constantan']
constantanIngot.forEach(I =>{replaceIO(I,'thermal:constantan_ingot')})
var electrumIngot = ['#forge:ingots/electrum', 'immersiveengineering:ingot_electrum']
electrumIngot.forEach(I =>{replaceIO(I,'thermal:electrum_ingot')})
var tinIngot = ['#forge:ingots/tin', 'exnihilosequentia:ingot_tin']
tinIngot.forEach(I =>{replaceIO(I,'thermal:tin_ingot')})
/**********************Nuggets*************************/
var copperNugget = ['#forge:nuggets/copper', 'create:copper_nugget', 'immersiveengineering:nugget_copper', 'mekanism:nugget_copper', 'tconstruct:copper_nugget']
copperNugget.forEach(I =>{replaceIO(I,'thermal:copper_nugget')})
var nickelNugget = ['#forge:nuggets/nickel', 'immersiveengineering:nugget_nickel']
nickelNugget.forEach(I =>{replaceIO(I,'thermal:nickel_nugget')})
var uraniumNugget = ['#forge:nuggets/uranium', 'immersiveengineering:nugget_uranium']
uraniumNugget.forEach(I =>{replaceIO(I,'mekanism:nugget_uranium')})
var tinNugget = ['#forge:nuggets/tin', 'mekanism:nugget_tin']
tinNugget.forEach(I =>{replaceIO(I,'thermal:tin_nugget')})
var silverNugget = ['#forge:nuggets/silver', 'immersiveengineering:nugget_silver']
silverNugget.forEach(I =>{replaceIO(I,'thermal:silver_nugget')})
var leadNugget = ['#forge:nuggets/lead', 'mekanism:nugget_lead', 'immersiveengineering:nugget_lead']
leadNugget.forEach(I =>{replaceIO(I,'thermal:lead_nugget')})
var steelNugget = ['#forge:nuggets/steel', 'immersiveengineering:nugget_steel']
steelNugget.forEach(I =>{replaceIO(I,'mekanism:nugget_steel')})
var bronzeNugget = ['#forge:nuggets/bronze', 'mekanism:nugget_bronze']
bronzeNugget.forEach(I =>{replaceIO(I,'thermal:bronze_nugget')})
var constantanNugget = ['#forge:nuggets/constantan', 'immersiveengineering:nugget_constantan']
constantanNugget.forEach(I =>{replaceIO(I,'thermal:constantan_nugget')})
var electrumNugget = ['#forge:nuggets/electrum', 'immersiveengineering:nugget_electrum']
electrumNugget.forEach(I =>{replaceIO(I,'thermal:electrum_nugget')})
/**********************Blocks*************************/
var copperBlock = ['#forge:storage_blocks/copper', 'create:copper_block', 'immersiveengineering:storage_copper', 'mekanism:block_copper', 'tconstruct:copper_block']
copperBlock.forEach(I =>{replaceIO(I,'thermal:copper_block')})
var nickelBlock = ['#forge:storage_blocks/nickel', 'immersiveengineering:storage_nickel']
nickelBlock.forEach(I =>{replaceIO(I,'thermal:nickel_block')})
var uraniumBlock = ['#forge:storage_blocks/uranium', 'immersiveengineering:storage_uranium']
uraniumBlock.forEach(I =>{replaceIO(I,'mekanism:block_uranium')})
var tinBlock = ['#forge:storage_blocks/tin', 'mekanism:block_tin']
tinBlock.forEach(I =>{replaceIO(I,'thermal:tin_block')})
var silverBlock = ['#forge:storage_blocks/silver', 'immersiveengineering:storage_silver']
silverBlock.forEach(I =>{replaceIO(I,'thermal:silver_block')})
var steelBlock = ['#forge:storage_blocks/steel', 'immersiveengineering:storage_steel']
steelBlock.forEach(I =>{replaceIO(I,'mekanism:block_steel')})
var bronzeBlock = ['#forge:storage_blocks/bronze', 'mekanism:block_bronze']
bronzeBlock.forEach(I =>{replaceIO(I,'thermal:bronze_block')})
var constantanBlock = ['#forge:storage_blocks/constantan', 'immersiveengineering:storage_constantan']
constantanBlock.forEach(I =>{replaceIO(I,'thermal:constantan_block')})
var electrumBlock = ['#forge:storage_blocks/electrum', 'immersiveengineering:storage_electrum']
electrumBlock.forEach(I =>{replaceIO(I,'thermal:electrum_block')})
var charcoalBlock = ['#forge:storage_blocks/charcoal', 'quark:charcoal_block', 'mekanism:block_charcoal']
charcoalBlock.forEach(I =>{replaceIO(I,'thermal:charcoal_block')})
var coalcokeBlock = ['#forge:storage_blocks/coal_coke', 'immersiveengineering:coke']
coalcokeBlock.forEach(I =>{replaceIO(I,'thermal:coal_coke_block')})
/**********************Dusts*************************/
var copperDust = ['#forge:dusts/copper', 'immersiveengineering:dust_copper', 'mekanism:dust_copper']
copperDust.forEach(I =>{replaceIO(I,'thermal:copper_dust')})
var quartzDust = ['#forge:dusts/quartz', 'appliedenergistics2:nether_quartz_dust']
quartzDust.forEach(I =>{replaceIO(I,'thermal:quartz_dust')})
var enderpearlDust = ['#forge:dusts/ender_pearl', 'thermal:ender_pearl_dust', 'betterendforge:ender_dust', 'miniutilities:ender_dust']
enderpearlDust.forEach(I =>{replaceIO(I,'appliedenergistics2:ender_dust')})
var goldDust = ['#forge:dusts/gold', 'appliedenergistics2:gold_dust', 'mekanism:dust_gold', 'immersiveengineering:dust_gold']
goldDust.forEach(I =>{replaceIO(I,'thermal:gold_dust')})
var ironDust = ['#forge:dusts/iron', 'appliedenergistics2:iron_dust', 'mekanism:dust_iron', 'immersiveengineering:dust_iron']
ironDust.forEach(I =>{replaceIO(I,'thermal:iron_dust')})
var diamondDust = ['#forge:dusts/diamond', 'createaddition:diamond_grit', 'mekanism:dust_diamond']
diamondDust.forEach(I =>{replaceIO(I,'thermal:diamond_dust')})
var lapisDust = ['#forge:dusts/lapis', 'mekanism:dust_lapis_lazuli']
lapisDust.forEach(I =>{replaceIO(I,'thermal:lapis_dust')})
var nickelDust = ['#forge:dusts/nickel', 'immersiveengineering:dust_nickel']
nickelDust.forEach(I =>{replaceIO(I,'thermal:nickel_dust')})
var uraniumDust = ['#forge:dusts/uranium', 'immersiveengineering:dust_uranium']
uraniumDust.forEach(I =>{replaceIO(I,'mekanism:dust_uranium')})
var tinDust = ['#forge:dusts/tin', 'mekanism:dust_tin']
tinDust.forEach(I =>{replaceIO(I,'thermal:tin_dust')})
var silverDust = ['#forge:dusts/silver', 'immersiveengineering:dust_silver']
silverDust.forEach(I =>{replaceIO(I,'thermal:silver_dust')})
var leadDust = ['#forge:dusts/lead', 'immersiveengineering:dust_lead', 'mekanism:dust_lead']
leadDust.forEach(I =>{replaceIO(I,'thermal:lead_dust')})
var obsidianDust = ['#forge:dusts/obsidian', 'mekanism:dust_obsidian']
obsidianDust.forEach(I =>{replaceIO(I,'create:powdered_obsidian')})
var emeraldDust = ['#forge:dusts/emerald', 'mekanism:dust_emerald']
emeraldDust.forEach(I =>{replaceIO(I,'thermal:emerald_dust')})
var steelDust = ['#forge:dusts/steel', 'immersiveengineering:dust_steel']
steelDust.forEach(I =>{replaceIO(I,'mekanism:dust_steel')})
var bronzeDust = ['#forge:dusts/bronze', 'mekanism:dust_bronze']
bronzeDust.forEach(I =>{replaceIO(I,'thermal:bronze_dust')})
var constantanDust = ['#forge:dusts/constantan', 'immersiveengineering:dust_constantan']
constantanDust.forEach(I =>{replaceIO(I,'thermal:constantan_dust')})
var electrumDust = ['#forge:dusts/electrum', 'immersiveengineering:dust_electrum']
electrumDust.forEach(I =>{replaceIO(I,'thermal:electrum_dust')})
var netheriteDust = ['#forge:dusts/netherite', 'mekanism:dust_netherite']
netheriteDust.forEach(I =>{replaceIO(I,'thermal:netherite_dust')})
/**********************Plates*************************/
var copperPlate = ['#forge:plates/copper', 'create:copper_sheet', 'immersiveengineering:plate_copper']
copperPlate.forEach(I =>{replaceIO(I,'thermal:copper_plate')})
var ironPlate = ['#forge:plates/iron', 'immersiveengineering:plate_iron', 'create:iron_sheet']
ironPlate.forEach(I =>{replaceIO(I,'thermal:iron_plate')})
var goldPlate = ['#forge:plates/gold', 'immersiveengineering:plate_gold', 'create:golden_sheet']
goldPlate.forEach(I =>{replaceIO(I,'thermal:gold_plate')})
var nickelPlate = ['#forge:plates/nickel', 'immersiveengineering:plate_nickel']
nickelPlate.forEach(I =>{replaceIO(I,'thermal:nickel_plate')})
var silverPlate = ['#forge:plates/silver', 'immersiveengineering:plate_silver']
silverPlate.forEach(I =>{replaceIO(I,'thermal:silver_plate')})
var leadPlate = ['#forge:plates/lead', 'immersiveengineering:plate_lead']
leadPlate.forEach(I =>{replaceIO(I,'thermal:lead_plate')})
var constantanPlate = ['#forge:plates/constantan', 'immersiveengineering:plate_constantan']
constantanPlate.forEach(I =>{replaceIO(I,'thermal:constantan_plate')})
var electrumPlate = ['#forge:plates/electrum', 'immersiveengineering:plate_electrum']
electrumPlate.forEach(I =>{replaceIO(I,'thermal:electrum_plate')})
var netheritePlate = ['#forge:plates/netherite', 'thermal:netherite_plate']
netheritePlate.forEach(I =>{replaceIO(I,'createdeco:netherite_sheet')})
/**********************Wires*************************/
var copperWire = ['#forge:wires/copper', 'immersiveengineering:wire_copper']
copperWire.forEach(I =>{replaceIO(I,'createaddition:copper_wire')})
/**********************Rodes*************************/
var ironRodes = ['immersiveengineering:stick_iron']
ironRodes.forEach(I =>{replaceIO(I,'createaddition:iron_rod')})
/**********************Other*************************/
var slag = ['#forge:slag', 'immersiveengineering:slag']
slag.forEach(I =>{replaceIO(I,'thermal:slag')})
var dough = ['#forge:dough', 'pamhc2foodcore:doughitem']
dough.forEach(I =>{replaceIO(I,'create:dough')})
var bitumen = ['#forge:bitumen', 'immersivepetroleum:bitumen']
bitumen.forEach(I =>{replaceIO(I,'thermal:bitumen')})
var sulfur = ['#forge:dusts/sulfur', 'mekanism:dust_sulfur', 'immersiveengineering:dust_sulfur']
sulfur.forEach(I =>{replaceIO(I,'thermal:sulfur_dust')})
var sawdust = ['#forge:dusts/wood', '#forge:sawdust', 'immersiveengineering:dust_wood', 'mekanism:sawdust', 'excompressum:wood_chippings']
sawdust.forEach(I =>{replaceIO(I,'thermal:sawdust')})
var coalCoke = ['#forge:coal_coke', 'immersiveengineering:coal_coke']
coalCoke.forEach(I =>{replaceIO(I,'thermal:coal_coke')})
var witherBone = ['#forge:wither_bones', 'bhc:wither_bone']
witherBone.forEach(I =>{replaceIO(I,'tconstruct:necrotic_bone')})

})