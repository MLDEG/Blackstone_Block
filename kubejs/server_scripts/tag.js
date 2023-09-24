//priority: 10000
events.listen('item.tags', function (e) {
    e.get('forge:dusts/copper').remove(['immersiveengineering:dust_copper', 'mekanism:dust_copper'])
    e.get('forge:dusts/gold').remove(['appliedenergistics2:gold_dust', 'mekanism:dust_gold', 'immersiveengineering:dust_gold'])
    e.get('forge:dusts/iron').remove(['appliedenergistics2:iron_dust', 'mekanism:dust_iron', 'immersiveengineering:dust_iron'])
    e.get('forge:dusts/diamond').remove(['createaddition:diamond_grit', 'mekanism:dust_diamond'])
    e.get('forge:dusts/lapis').remove('mekanism:dust_lapis_lazuli')
    e.get('forge:dusts/nickel').remove('immersiveengineering:dust_nickel')
    e.get('forge:dusts/uranium').remove('immersiveengineering:dust_uranium')
    e.get('forge:dusts/tin').remove('mekanism:dust_tin')
    e.get('forge:dusts/silver').remove('immersiveengineering:dust_silver')
    e.get('forge:dusts/lead').remove(['immersiveengineering:dust_lead', 'mekanism:dust_lead'])
    e.get('forge:dusts/obsidian').remove('mekanism:dust_obsidian')
    e.get('forge:dusts/emerald').remove('mekanism:dust_emerald')
    e.get('forge:dusts/steel').remove('immersiveengineering:dust_steel')
    e.get('forge:dusts/bronze').remove('mekanism:dust_bronze')
    e.get('forge:dusts/constantan').remove('immersiveengineering:dust_constantan')
    e.get('forge:dusts/electrum').remove('immersiveengineering:dust_electrum')
    e.get('forge:dusts/netherite').remove('mekanism:dust_netherite')
    e.get('forge:dusts/ender').remove('miniutilities:ender_dust')
    e.get('forge:dusts/quartz').remove('mekanism:dust_quartz')

    e.get('forge:ingots/copper').remove(['projectred-core:copper_ingot', 'create:copper_ingot', 'exnihilosequentia:ingot_copper', 'immersiveengineering:ingot_copper', 'mekanism:ingot_copper', 'tconstruct:copper_ingot'])
    e.get('forge:ingots/zinc').remove(['exnihilosequentia:ingot_zinc'])
    e.get('forge:ingots/platinum').remove('exnihilosequentia:ingot_platinum')
    e.get('forge:ingots/nickel').remove(['immersiveengineering:ingot_nickel', 'exnihilosequentia:ingot_nickel'])
    e.get('forge:ingots/uranium').remove(['exnihilosequentia:ingot_uranium', 'immersiveengineering:ingot_uranium'])
    e.get('forge:ingots/tin').remove(['projectred-core:tin_ingot', 'mekanism:ingot_tin'])
    e.get('forge:ingots/silver').remove(['projectred-core:silver_ingot', 'immersiveengineering:ingot_silver', 'exnihilosequentia:ingot_silver'])
    e.get('forge:ingots/lead').remove(['exnihilosequentia:ingot_lead', 'immersiveengineering:ingot_lead', 'mekanism:ingot_lead'])
    e.get('forge:ingots/steel').remove('immersiveengineering:ingot_steel')
    e.get('forge:ingots/bronze').remove('mekanism:ingot_bronze')
    e.get('forge:ingots/constantan').remove('immersiveengineering:ingot_constantan')
    e.get('forge:ingots/electrum').remove('immersiveengineering:ingot_electrum')
    e.get('forge:ingots/tin').remove('exnihilosequentia:ingot_tin')
    e.get('forge:ingots/aluminum').remove('exnihilosequentia:ingot_aluminum')

    e.get('forge:nuggets/copper').remove(['create:copper_nugget', 'immersiveengineering:nugget_copper', 'mekanism:nugget_copper', 'tconstruct:copper_nugget'])
    e.get('forge:nuggets/nickel').remove('immersiveengineering:nugget_nickel')
    e.get('forge:nuggets/uranium').remove('immersiveengineering:nugget_uranium')
    e.get('forge:nuggets/tin').remove('mekanism:nugget_tin')
    e.get('forge:nuggets/silver').remove('immersiveengineering:nugget_silver')
    e.get('forge:nuggets/lead').remove(['mekanism:nugget_lead', 'immersiveengineering:nugget_lead'])
    e.get('forge:nuggets/steel').remove('immersiveengineering:nugget_steel')
    e.get('forge:nuggets/bronze').remove('mekanism:nugget_bronze')
    e.get('forge:nuggets/constantan').remove('immersiveengineering:nugget_constantan')
    e.get('forge:nuggets/electrum').remove('immersiveengineering:nugget_electrum')
    e.get('forge:nuggets/netherite').remove('createdeco:netherite_nugget')

    e.get('forge:plates/copper').remove(['immersiveengineering:plate_copper', 'create:copper_sheet'])
    e.get('forge:plates/nickel').remove('immersiveengineering:plate_nickel')
    e.get('forge:plates/silver').remove('immersiveengineering:plate_silver')
    e.get('forge:plates/lead').remove('immersiveengineering:plate_lead')
    e.get('forge:plates/constantan').remove('immersiveengineering:plate_constantan')
    e.get('forge:plates/electrum').remove('immersiveengineering:plate_electrum')
    e.get('forge:plates/netherite').remove('thermal:netherite_plate')

    e.get('forge:wires/copper').remove('immersiveengineering:wire_copper')

    e.get('forge:gears/gold').remove('titanium:gold_gear')
    e.get('forge:gears/iron').remove('titanium:iron_gear')
    e.get('forge:gears/diamond').remove('titanium:diamond_gear')

    e.add('forge:ores/cobalt', 'kubejs:raw_cobalt')
    e.add('forge:ores/tin', 'kubejs:raw_tin')
    e.add('forge:ores/osmium', 'kubejs:raw_osmium')

    e.add('forge:gears/steel', 'kubejs:steel_gear')

    e.add('forge:storage_blocks/pink_slime', 'kubejs:pink_slime_ingot_block')
    e.add('forge:storage_blocks/shadow_steel', 'kubejs:shadow_steel_block')
    e.add('forge:storage_blocks/refined_radiance', 'kubejs:refined_radiant_block')

    e.add('chisel:metals/aluminum', 'immersiveengineering:storage_aluminum')

    e.add('forge:dough', 'create:dough')

    e.add('forge:plates', ['kubejs:cobalt_plate', 'kubejs:shadow_steel_plate', 'kubejs:refined_radiance_plate'])

    e.add('forge:ores/elementium', ['mythicbotany:elementium_ore', 'mythicbotany:raw_elementium'])
    e.add('forge:ores/tantalum', 'tinkersarchery:raw_tantalum')
    e.add('forge:ores/iron', 'kubejs:raw_iron')
    e.add('forge:ores/silver', 'kubejs:raw_silver')
    e.add('forge:ores/aluminum', 'kubejs:raw_aluminum')
    e.add('forge:ores/nickel', 'kubejs:raw_nickel')
    e.add('forge:ores/zinc', 'create:raw_zinc')
    e.add('forge:ores/lead', 'kubejs:raw_lead')
    e.add('forge:ores/uranium', 'kubejs:raw_uranium')
    e.add('forge:ores/copper', 'kubejs:raw_copper')
    e.add('forge:ores/gold', 'kubejs:raw_gold')
    e.add('forge:ores/quartz', ['byg:brimstone_nether_quartz_ore', 'byg:blue_nether_quartz_ore'])


    e.get('forge:ores/iron').remove('exnihilosequentia:chunk_iron')
    e.get('forge:ores/silver').remove('exnihilosequentia:chunk_silver')
    e.get('forge:ores/aluminum').remove('exnihilosequentia:chunk_aluminum')
    e.get('forge:ores/nickel').remove('exnihilosequentia:chunk_nickel')
    e.get('forge:ores/zinc').remove('exnihilosequentia:chunk_zinc')
    e.get('forge:ores/lead').remove('exnihilosequentia:chunk_lead')
    e.get('forge:ores/uranium').remove('exnihilosequentia:chunk_uranium')
    e.get('forge:ores/copper').remove('exnihilosequentia:chunk_copper')
    e.get('forge:ores/gold').remove('exnihilosequentia:chunk_gold')
    e.get('forge:ores/platinum').remove('exnihilosequentia:chunk_platinum')

    e.get('forge:ores/copper').remove(['create:copper_ore', 'immersiveengineering:ore_copper', 'mekanism:copper_ore', 'tconstruct:copper_ore'])
    e.get('forge:ores/nickel').remove('immersiveengineering:ore_nickel')
    e.get('forge:ores/uranium').remove('immersiveengineering:ore_uranium')
    e.get('forge:ores/tin').remove(['mekanism:tin_ore', 'exnihilosequentia:chunk_tin'])
    e.get('forge:ores/silver').remove('immersiveengineering:ore_silver')
    e.get('forge:ores/lead').remove(['immersiveengineering:ore_lead', 'mekanism:lead_ore'])
    e.get('forge:ores/prosperity').remove('mysticalagriculture:prosperity_ore')

    e.get('forge:slag').remove('immersiveengineering:slag')
    e.get('forge:bitumen').remove('immersivepetroleum:bitumen')
    e.get('forge:dusts/sulfur').remove(['mekanism:dust_sulfur', 'immersiveengineering:dust_sulfur'])
    e.get('forge:dyes/yellow').remove('mekanism:dust_sulfur')
    e.get('forge:dusts/wood').remove(['immersiveengineering:dust_wood', 'mekanism:sawdust', 'excompressum:wood_chippings'])

    e.get('forge:gems/ruby').remove('projectred-core:ruby')
    e.get('forge:gems/sapphire').remove('projectred-core:sapphire')

    e.get('forge:storage_blocks/coal_coke').remove('immersiveengineering:coke')
    e.get('forge:coal_coke').remove('immersiveengineering:coal_coke')

    e.get('forge:furnaces/copper').remove('ironfurnaces:copper_furnace')
    e.get('forge:furnaces/iron').remove('ironfurnaces:iron_furnace')
    e.get('forge:furnaces/silver').remove('ironfurnaces:silver_furnace')
    e.get('forge:furnaces/gold').remove('ironfurnaces:gold_furnace')
    e.get('forge:furnaces/diamond').remove('ironfurnaces:diamond_furnace')
    e.get('forge:furnaces/emerald').remove('ironfurnaces:emerald_furnace')

    e.get('forge:clay').remove('minecraft:clay')

    e.get('forge:rods/wooden').remove('immersiveengineering:stick_treated')

    e.get('forge:bones/wither').remove('architects_palette:withered_bone')

    e.get('minecraft:planks').remove('architects_palette:twisted_planks')

    e.add('create:upright_on_belt', ['tiab:timeinabottle', 'kubejs:baked_soulsand_cake', 'kubejs:baked_obsidian_cake', 'kubejs:baked_dirt_cake', 'kubejs:baked_cobble_cake', 'telepastries:overworld_cake', 'telepastries:nether_cake', 'telepastries:end_cake', 'telepastries:custom_cake', 'tconstruct:sky_cake', 'tconstruct:earth_cake', 'tconstruct:magma_cake', 'tconstruct:blood_cake', 'tconstruct:ender_cake', 'thermal:chocolate_cake', 'thermal:spice_cake', 'kubejs:baked_chocolat_cake', 'botania:mana_bottle', 'kubejs:empty_infusion_crystal', 'matc:inferium_crystal', 'matc:prudentium_crystal', 'matc:tertium_crystal', 'matc:imperium_crystal', 'matc:supremium_crystal', 'createaddition:capacitor', 'create:electron_tube'])

    e.add('bsb:crea', ['draconicevolution:creative_capacitor', 'immersiveengineering:capacitor_creative', 'powah:energy_cell_creative', 'appliedenergistics2:creative_energy_cell'])

    e.add('forge:workbench', ['minecraft:crafting_table'])

    e.add('forge:rods', ['kubejs:blackstone_stick'])

    e.add('forge:ores', ['mythicbotany:raw_elementium', 'tinkersarchery:tantalum_ore', 'tinkersarchery:raw_tantalum'])

    e.add('forge:ore_pieces', ['kubejs:cobalt_piece_ore', 'kubejs:tin_piece_ore', 'kubejs:osmium_piece_ore', 'kubejs:iron_piece_ore', 'kubejs:gold_piece_ore', 'kubejs:copper_piece_ore', 'kubejs:silver_piece_ore', 'kubejs:aluminum_piece_ore', 'kubejs:nickel_piece_ore', 'kubejs:zinc_piece_ore', 'kubejs:lead_piece_ore', 'kubejs:uranium_piece_ore'])

    e.add('forge:cogwheel', ['create:cogwheel', 'creategearaddon:oak_cogwheel', 'creategearaddon:birch_cogwheel', 'creategearaddon:jungle_cogwheel', 'creategearaddon:acacia_cogwheel', 'creategearaddon:dark_oak_cogwheel', 'creategearaddon:crimson_cogwheel', 'creategearaddon:warped_cogwheel'])

    e.add('forge:cogwheel/large', ['create:large_cogwheel', 'creategearaddon:large_oak_cogwheel', 'creategearaddon:large_birch_cogwheel', 'creategearaddon:large_jungle_cogwheel', 'creategearaddon:large_acacia_cogwheel', 'creategearaddon:large_dark_oak_cogwheel', 'creategearaddon:large_crimson_cogwheel', 'creategearaddon:large_warped_cogwheel'])

    e.add('quark:leaf_carpet', ['quark:blue_blossom_leaf_carpet', 'quark:orange_blossom_leaf_carpet', 'quark:pink_blossom_leaf_carpet', 'quark:dark_oak_leaf_carpet', 'quark:acacia_leaf_carpet', 'quark:jungle_leaf_carpet', 'quark:birch_leaf_carpet', 'quark:spruce_leaf_carpet', 'quark:oak_leaf_carpet', 'quark:lavender_blossom_leaf_carpet', 'quark:red_blossom_leaf_carpet', 'quark:yellow_blossom_leaf_carpet'])

    e.add('framedcompactingdrawers:darwers', ['framedcompactdrawers:framed_full_one', 'framedcompactdrawers:framed_full_two', 'framedcompactdrawers:framed_full_four', 'framedcompactdrawers:framed_half_one', 'framedcompactdrawers:framed_half_two', 'framedcompactdrawers:framed_half_four'])

    e.add('create:crushed_ores', ['kubejs:crushed_electrum', 'kubejs:crushed_constantan', 'kubejs:crushed_bronze', 'kubejs:crushed_invar', 'mythicbotany:crushed_elementium'])

    e.add('forge:leaves', ['minecraft:oak_leaves', 'minecraft:spruce_leaves', 'minecraft:birch_leaves', 'minecraft:jungle_leaves', 'minecraft:acacia_leaves', 'minecraft:dark_oak_leaves'])

    e.add('forge:logs', ['minecraft:oak_log', 'minecraft:spruce_log', 'minecraft:birch_log', 'minecraft:jungle_log', 'minecraft:acacia_log', 'minecraft:dark_oak_log'])

    e.add('forge:planks', ['byg:ebony_planks', 'byg:cypress_planks', 'byg:cika_planks', 'byg:cherry_planks', 'byg:bulbis_planks', 'byg:blue_enchanted_planks', 'byg:baobab_planks', 'byg:aspen_planks', 'byg:mangrove_planks', 'quark:lime_stained_planks', 'quark:yellow_stained_planks', 'quark:light_blue_stained_planks', 'quark:magenta_stained_planks', 'quark:orange_stained_planks', 'quark:white_stained_planks', 'byg:embur_planks', 'byg:sythian_planks', 'byg:zelkova_planks', 'byg:witch_hazel_planks', 'byg:willow_planks', 'byg:skyris_planks', 'byg:redwood_planks', 'byg:rainbow_eucalyptus_planks', 'byg:pine_planks', 'byg:palm_planks', 'byg:nightshade_planks', 'byg:maple_planks', 'byg:mahogany_planks', 'byg:lament_planks', 'byg:jacaranda_planks', 'byg:imparius_planks', 'byg:holly_planks', 'byg:green_enchanted_planks', 'byg:fir_planks', 'byg:ether_planks', 'quark:red_stained_planks', 'quark:green_stained_planks', 'quark:brown_stained_planks', 'quark:blue_stained_planks', 'quark:purple_stained_planks', 'quark:cyan_stained_planks', 'quark:light_gray_stained_planks', 'quark:gray_stained_planks', 'quark:pink_stained_planks', 'quark:black_stained_planks', 'tconstruct:nahuatl', 'tconstruct:bloodshroom_planks', 'tconstruct:skyroot_planks', 'tconstruct:greenheart_planks', 'architects_palette:twisted_planks'])

    e.add('quark:revertable_chests', ['endergetic:poise_chest', 'betterendforge:helix_tree_chest', 'betterendforge:tenanea_chest', 'betterendforge:dragon_tree_chest', 'betterendforge:pythadendron_chest', 'betterendforge:end_lotus_chest', 'betterendforge:mossy_glowshroom_chest', 'betterendforge:lacugrove_chest', 'betterendforge:lucernia_chest', 'betterendforge:jellyshroom_chest', 'betterendforge:umbrella_tree_chest'])

})

events.listen('block.tags', function (e) {
    e.get('forge:ores/copper').remove(['create:copper_ore', 'immersiveengineering:ore_copper', 'mekanism:copper_ore', 'tconstruct:copper_ore'])
    e.get('forge:ores/nickel').remove('immersiveengineering:ore_nickel')
    e.get('forge:ores/uranium').remove('immersiveengineering:ore_uranium')
    e.get('forge:ores/tin').remove('mekanism:tin_ore')
    e.get('forge:ores/silver').remove('immersiveengineering:ore_silver')
    e.get('forge:ores/lead').remove(['immersiveengineering:ore_lead', 'mekanism:lead_ore'])
    e.get('forge:ores/prosperity').remove('mysticalagriculture:prosperity_ore')
})