//priority: 10000
events.listen('recipes', function (e) {

    //Cobalt Ore Chunk
    e.shapeless('kubejs:raw_cobalt', '4x kubejs:cobalt_piece_ore')
    //Tin Ore Chunk
    e.shapeless('kubejs:raw_tin', '4x kubejs:tin_piece_ore')
    //Osmium Ore Chunk
    e.shapeless('kubejs:raw_osmium', '4x kubejs:osmium_piece_ore')
    //Iron Ore Chunk
    e.shapeless('kubejs:raw_iron', '4x kubejs:iron_piece_ore')
    //Copper Ore Chunk
    e.shapeless('kubejs:raw_copper', '4x kubejs:copper_piece_ore')
    //Gold Ore Chunk
    e.shapeless('kubejs:raw_gold', '4x kubejs:gold_piece_ore')
    //Silver Ore Chunk
    e.shapeless('kubejs:raw_silver', '4x kubejs:silver_piece_ore')
    //Aluminum Ore Chunk
    e.shapeless('kubejs:raw_aluminum', '4x kubejs:aluminum_piece_ore')
    //Nickel Ore Chunk
    e.shapeless('kubejs:raw_nickel', '4x kubejs:nickel_piece_ore')
    //Zinc Ore Chunk
    e.shapeless('create:raw_zinc', '4x kubejs:zinc_piece_ore')
    //Lead Ore Chunk
    e.shapeless('kubejs:raw_lead', '4x kubejs:lead_piece_ore')
    //Uranium Ore Chunk
    e.shapeless('kubejs:raw_uranium', '4x kubejs:uranium_piece_ore')

    //Machinarium Ingot Block
    e.shapeless('kubejs:machinarium_block', '9x kubejs:machinarium_ingot')
    e.shapeless('9x kubejs:machinarium_ingot', 'kubejs:machinarium_block')

    //Compressed Sky Stone
    e.shapeless('kubejs:compressed_sky_stone', '9x appliedenergistics2:sky_stone_block')
    e.shapeless('9x appliedenergistics2:sky_stone_block', 'kubejs:compressed_sky_stone')

    //Compressed Crushed Sky Stone
    e.shapeless('kubejs:compressed_crushed_sky_stone', '9x kubejs:crushed_sky_stone')
    e.shapeless('9x kubejs:crushed_sky_stone', 'kubejs:compressed_crushed_sky_stone')

    //Compressed Blackstone
    e.shapeless('kubejs:compressed_blackstone', '9x minecraft:blackstone')
    e.shapeless('9x minecraft:blackstone', 'kubejs:compressed_blackstone')

    //Compressed Black Gravel
    e.shapeless('kubejs:compressed_black_gravel', '9x kubejs:black_gravel')
    e.shapeless('9x kubejs:black_gravel', 'kubejs:compressed_black_gravel')

    //Blank Slate Block
    e.shapeless('kubejs:slate_blank', '4x bloodmagic:blankslate')
    e.shapeless('4x bloodmagic:blankslate', 'kubejs:slate_blank')
    //Reinforced Slate Block
    e.shapeless('kubejs:slate_reinforced', '4x bloodmagic:reinforcedslate')
    e.shapeless('4x bloodmagic:reinforcedslate', 'kubejs:slate_reinforced')
    //Imbued Slate Block
    e.shapeless('kubejs:slate_imbued', '4x bloodmagic:infusedslate')
    e.shapeless('4x bloodmagic:infusedslate', 'kubejs:slate_imbued')
    //Demonic Slate Block
    e.shapeless('kubejs:slate_demonic', '4x bloodmagic:demonslate')
    e.shapeless('4x bloodmagic:demonslate', 'kubejs:slate_demonic')
    //Ethereal Slate Block
    e.shapeless('kubejs:slate_ethereal', '4x bloodmagic:etherealslate')
    e.shapeless('4x bloodmagic:etherealslate', 'kubejs:slate_ethereal')

    //Wither Skull
    e.shapeless('9x wstweaks:fragment', 'minecraft:wither_skeleton_skull')

    //Electrotine Alloy Ingot Block
    e.shapeless('kubejs:electrotine_alloy_ingot_block', '9x projectred-core:electrotine_ingot')
    e.shapeless('9x projectred-core:electrotine_ingot', 'kubejs:electrotine_alloy_ingot_block')

    //Red Alloy Ingot Block
    e.shapeless('kubejs:red_alloy_ingot_block', '9x projectred-core:red_ingot')
    e.shapeless('9x projectred-core:red_ingot', 'kubejs:red_alloy_ingot_block')

    //Polished Rose Quartz Block
    e.shapeless('kubejs:polished_rose_quartz_block', '9x create:polished_rose_quartz')
    e.shapeless('9x create:polished_rose_quartz', 'kubejs:polished_rose_quartz_block')

    //Shadow Steel Block
    e.shapeless('kubejs:shadow_steel_block', '9x create:shadow_steel')
    e.shapeless('9x create:shadow_steel', 'kubejs:shadow_steel_block')

    //Refined Radiant Block
    e.shapeless('kubejs:refined_radiant_block', '9x create:refined_radiance')
    e.shapeless('9x create:refined_radiance', 'kubejs:refined_radiant_block')

    //Pink Slime Ingot Block
    e.shapeless('kubejs:pink_slime_ingot_block', '9x industrialforegoing:pink_slime_ingot')
    e.shapeless('9x industrialforegoing:pink_slime_ingot', 'kubejs:pink_slime_ingot_block')

    //Dragon Scales Block
    e.shapeless('kubejs:dragonscales_block', '9x cagedmobs:dragon_scale')
    e.shapeless('9x cagedmobs:dragon_scale', 'kubejs:dragonscales_block')

    //Corundum color
    function corundrum(color) { e.shapeless('quark:' + color + '_crystal', '4x quark:' + color + '_crystal_cluster') }
    var crystalColor = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black"]
    crystalColor.forEach(C => { corundrum(C) })

})