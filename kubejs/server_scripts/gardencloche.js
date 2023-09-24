events.listen('recipes', function (e) {

    /*********************************** VANILLA ***********************************/
    e.remove({ id: 'immersiveengineering:cloche/wheat' })
    gardenvanilla('minecraft:wheat', 1, 'minecraft:wheat_seeds', 'minecraft:dirt', 'crop', 'minecraft:wheat')
    
    e.remove({ id: 'immersiveengineering:cloche/sweet_berries' })
    gardenvanilla('minecraft:sweet_berries', 1, 'minecraft:sweet_berries', 'minecraft:dirt', 'crop', 'minecraft:sweet_berry_bush')
    
    e.remove({ id: 'immersiveengineering:cloche/sugar_cane' })
    gardenvanilla('minecraft:sugar_cane', 1, 'minecraft:sugar_cane', 'minecraft:sand', 'stacking', 'minecraft:sugar_cane')
    
    e.remove({ id: 'immersiveengineering:cloche/cactus' })
    gardenvanilla('minecraft:cactus', 1, 'minecraft:cactus', 'minecraft:sand', 'stacking', 'minecraft:cactus')
    
    e.remove({ id: 'immersiveengineering:cloche/bamboo' })
    gardenvanilla('minecraft:bamboo', 1, 'minecraft:bamboo', 'minecraft:dirt', 'stacking', 'minecraft:bamboo')
    
    e.remove({ id: 'immersiveengineering:cloche/beetroot' })
    gardenvanilla('minecraft:beetroot', 1, 'minecraft:beetroot_seeds', 'minecraft:dirt', 'crop', 'minecraft:beetroots')
    
    e.remove({ id: 'immersiveengineering:cloche/brown_mushroom' })
    gardenvanilla('minecraft:brown_mushroom', 1, 'minecraft:brown_mushroom', 'minecraft:dirt', 'generic', 'minecraft:brown_mushroom')
    
    e.remove({ id: 'immersiveengineering:cloche/red_mushroom' })
    gardenvanilla('minecraft:red_mushroom', 1, 'minecraft:red_mushroom', 'minecraft:dirt', 'generic', 'minecraft:red_mushroom')
    
    e.remove({ id: 'immersiveengineering:cloche/carrot' })
    gardenvanilla('minecraft:carrot', 1, 'minecraft:carrot', 'minecraft:dirt', 'crop', 'minecraft:carrots')
    
    e.remove({ id: 'immersiveengineering:cloche/potato' })
    gardenvanilla('minecraft:potato', 1, 'minecraft:potato', 'minecraft:dirt', 'crop', 'minecraft:potatoes')
    
    e.remove({ id: 'immersiveengineering:cloche/pumpkin' })
    gardenvanilla('minecraft:pumpkin', 1, 'minecraft:pumpkin_seeds', 'minecraft:dirt', 'stem', 'minecraft:pumpkin')
    
    e.remove({ id: 'immersiveengineering:cloche/melon' })
    gardenvanilla('minecraft:melon', 1, 'minecraft:melon_seeds', 'minecraft:dirt', 'stem', 'minecraft:melon')
    
    e.remove({ id: 'immersiveengineering:cloche/chorus_fruit' })
    gardenvanilla('minecraft:chorus_fruit', 1, 'minecraft:chorus_flower', 'minecraft:end_stone', 'chorus', 'minecraft:chorus_flower')
    
    e.remove({ id: 'immersiveengineering:cloche/nether_warp' })
    gardenvanilla('minecraft:nether_wart', 1, 'minecraft:nether_wart', 'minecraft:soul_sand', 'crop', 'minecraft:nether_wart')

    function gardenvanilla(result, qte, input, soil, type, block){e.custom({"type":"immersiveengineering:cloche","results":[{"item":result,"count":qte}],"input":{"item":input},"soil":{"item" : soil},"time":50,"render":{"type":type,"block": block}})}

    //Quark Crystals
    gardenvanilla('quark:red_crystal_cluster', 1, 'quark:red_crystal_cluster', 'quark:red_crystal', 'stacking', 'quark:red_crystal')
    gardenvanilla('quark:orange_crystal_cluster', 1, 'quark:orange_crystal_cluster', 'quark:orange_crystal', 'stacking', 'quark:orange_crystal')
    gardenvanilla('quark:yellow_crystal_cluster', 1, 'quark:yellow_crystal_cluster', 'quark:yellow_crystal', 'stacking', 'quark:yellow_crystal')
    gardenvanilla('quark:green_crystal_cluster', 1, 'quark:green_crystal_cluster', 'quark:green_crystal', 'stacking', 'quark:green_crystal')
    gardenvanilla('quark:blue_crystal_cluster', 1, 'quark:blue_crystal_cluster', 'quark:blue_crystal', 'stacking', 'quark:blue_crystal')
    gardenvanilla('quark:indigo_crystal_cluster', 1, 'quark:indigo_crystal_cluster', 'quark:indigo_crystal', 'stacking', 'quark:indigo_crystal')
    gardenvanilla('quark:violet_crystal_cluster', 1, 'quark:violet_crystal_cluster', 'quark:violet_crystal', 'stacking', 'quark:violet_crystal')
    gardenvanilla('quark:white_crystal_cluster', 1, 'quark:white_crystal_cluster', 'quark:white_crystal', 'stacking', 'quark:white_crystal')
    gardenvanilla('quark:black_crystal_cluster', 1, 'quark:black_crystal_cluster', 'quark:black_crystal', 'stacking', 'quark:black_crystal')

    /*********************************** MYSTICAL AGRICULTURE ***********************************/
    function gardenma(crop, soil, qte){e.custom({"type": "immersiveengineering:cloche", "input": { "item": "mysticalagriculture:"+crop+"_seeds" }, "soil": { "item": soil }, "time": 50, "render": { "type": "crop", "block": "mysticalagriculture:"+crop+"_crop" }, "results": [{ "item": "mysticalagriculture:"+crop+"_essence", "count": qte }]})}
    var crop = ["air", "earth", "water", "fire", "inferium", "stone", "dirt", "wood", "ice","nature", "dye", "nether", "coal", "coral", "honey", "pig", "chicken", "cow", "sheep", "squid", "fish", "slime", "turtle", "silicon", "sulfur", "aluminum", "copper", "saltpeter", "mystical_flower", "apatite", "marble", "limestone", "basalt","iron", "nether_quartz", "glowstone", "redstone", "obsidian", "prismarine", "zombie", "skeleton", "creeper", "spider", "rabbit", "tin", "bronze", "zinc", "brass", "silver", "lead", "blizz", "blitz", "basalz", "manasteel", "ender_biotite", "rose_gold", "slimesteel", "pig_iron", "tinkers_bronze", "gold", "lapis_lazuli", "end", "experience", "blaze", "ghast", "enderman", "steel", "nickel", "constantan", "electrum", "invar", "uranium", "signalum", "lumium", "hop_graphite", "elementium", "osmium", "refined_glowstone", "refined_obsidian", "energized_steel", "blazing_crystal", "fluorite", "cobalt", "hepatizon", "sapphire", "ruby","diamond", "emerald", "netherite", "wither_skeleton", "enderium", "terrasteel", "yellorium", "cyanite", "niotic_crystal", "uraninite", "manyullyn", "queens_slime", "draconium", "fluix", "certus_quartz", "spirited_crystal", "cinnabar", "pendorite", "rosenquartz", "hamletite", "pinkslime", "fairy", "gildedfern", "sky_stone", "cobalt_tantalum", "niillite"]
    crop.forEach(C => { gardenma(C, "minecraft:dirt", 1) })


    //Nether Star
    e.custom({
        "type": "immersiveengineering:cloche", "input": { "item": "mysticalagriculture:nether_star_seeds" }, "soil": { "item": "mysticalagradditions:nether_star_crux" }, "time": 50, "render": { "type": "crop", "block": "mysticalagriculture:nether_star_crop" }, "results": [{ "item": "mysticalagriculture:nether_star_essence", "count": 1 }]
    })
    //Dragon Egg
    e.custom({
        "type": "immersiveengineering:cloche", "input": { "item": "mysticalagriculture:dragon_egg_seeds" }, "soil": { "item": "mysticalagradditions:dragon_egg_crux" }, "time": 50, "render": { "type": "crop", "block": "mysticalagriculture:dragon_egg_crop" }, "results": [{ "item": "mysticalagriculture:dragon_egg_essence", "count": 1 }]
    })
    //Nitro Crystal
    e.custom({
        "type": "immersiveengineering:cloche", "input": { "item": "mysticalagriculture:nitro_crystal_seeds" }, "soil": { "item": "mysticalagradditions:nitro_crystal_crux" }, "time": 50, "render": { "type": "crop", "block": "mysticalagriculture:nitro_crystal_crop" }, "results": [{ "item": "mysticalagriculture:nitro_crystal_essence", "count": 1 }]
    })

    //Awakened Draconium
    e.custom({
      "type": "immersiveengineering:cloche", "input": { "item": "mysticalagriculture:awakened_draconium_seeds" }, "soil": { "item": "mysticalagradditions:awakened_draconium_crux" }, "time": 50, "render": { "type": "crop", "block": "mysticalagriculture:awakened_draconium_crop" }, "results": [{ "item": "mysticalagriculture:awakened_draconium_essence", "count": 1 }]
    })    
    
    //Chaotic Shard
    e.custom({
        "type": "immersiveengineering:cloche", "input": { "item": "mysticalagriculture:chaotic_seeds" }, "soil": { "item": "kubejs:chaotic_crux" }, "time": 50, "render": { "type": "crop", "block": "mysticalagriculture:chaotic_crop" }, "results": [{ "item": "mysticalagriculture:chaotic_essence", "count": 1 }]
    })
    
    //Alfsteel
    e.custom({
        "type": "immersiveengineering:cloche", "input": { "item": "mysticalagriculture:alfsteel_seeds" }, "soil": { "item": "kubejs:alfsteel_crux" }, "time": 50, "render": { "type": "crop", "block": "mysticalagriculture:alfsteel_crop" }, "results": [{ "item": "mysticalagriculture:alfsteel_essence", "count": 1 }]
    })

    /*********************************** THERMAL ***********************************/
    function gardenthermal(crop, render, soil, qte){e.custom({"type": "immersiveengineering:cloche", "input": { "item": "thermal:"+crop+"_seeds" }, "soil": { "item": soil }, "time": 50, "render": { "type": render, "block": "thermal:"+crop+"" }, "results": [{ "item": "thermal:"+crop+"", "count": qte }]})}
    var crop = ["radish", "onion", "corn", "tomato", "strawberry", "barley", "green_bean", "eggplant", "peanut", "bell_pepper", "spinach", "sadiroot", "rice", "tea", "coffee"]
    crop.forEach(C => { gardenthermal(C, "crop", "minecraft:dirt", 1) })
    var stem = ["frost_melon"]
    stem.forEach(C => { gardenthermal(C, "stem", "minecraft:dirt", 1) })

    /*********************************** PAMS ***********************************/
    function gardenpam(crop, soil, qte){e.custom({"type": "immersiveengineering:cloche", "input": { "item": "pamhc2crops:"+crop+"seeditem" }, "soil": { "item": soil }, "time": 50, "render": { "type": "crop","block": "pamhc2crops:pam"+crop+"crop" }, "results": [{ "item": "pamhc2crops:"+crop+"item", "count": qte }]})}
    var crop = ["agave", "amaranth", "arrowroot", "artichoke", "asparagus", "barley", "bean", "bellpepper", "blackberry", "blueberry", "broccoli", "brusselsprout", "cabbage", "cactusfruit", "candleberry", "cantaloupe", "cassava", "cauliflower", "celery", "chickpea", "chilipepper", "coffeebean", "corn", "cotton", "cranberry", "cucumber", "eggplant", "elderberry", "flax", "garlic", "ginger", "grape", "greengrape", "huckleberry", "jicama", "juniperberry", "jute", "kale", "kenaf", "kiwi", "kohlrabi", "leek", "lentil", "lettuce", "millet", "mulberry", "mustardseeds", "oats", "okra", "onion", "parsnip", "peanut", "peas", "pineapple", "quinoa", "radish", "raspberry", "rhubarb", "rice", "rutabaga", "rye", "scallion", "sesameseeds", "sisal", "soybean", "spiceleaf", "spinach", "strawberry", "sweetpotato", "taro", "tealeaf", "tomatillo", "tomato", "turnip", "waterchestnut", "whitemushroom", "wintersquash", "zucchini"]
    crop.forEach(C => { gardenpam(C, "minecraft:dirt", 1) })

})