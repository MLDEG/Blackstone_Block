//priority: 10000
events.listen('recipes', function (e) {  

    function stoneCutter(output, input) {
    e.custom({"type": "minecraft:stonecutting","ingredient": input,"result": output,"count": 1})
  }
//Copper
    stoneCutter('create:copper_block', [{"item": 'tconstruct:copper_block'}, {"item": 'thermal:copper_block'}, {"item": 'mekanism:block_copper'}, {"item": 'immersiveengineering:storage_copper'}])
    stoneCutter('tconstruct:copper_block', [{"item": 'create:copper_block'}, {"item": 'thermal:copper_block'}, {"item": 'mekanism:block_copper'}, {"item": 'immersiveengineering:storage_copper'}])
    stoneCutter('thermal:copper_block', [{"item": 'create:copper_block'}, {"item": 'tconstruct:copper_block'}, {"item": 'mekanism:block_copper'}, {"item": 'immersiveengineering:storage_copper'}])
    stoneCutter('mekanism:block_copper', [{"item": 'create:copper_block'}, {"item": 'tconstruct:copper_block'}, {"item": 'thermal:copper_block'}, {"item": 'immersiveengineering:storage_copper'}])
    stoneCutter('immersiveengineering:storage_copper', [{"item": 'create:copper_block'}, {"item": 'tconstruct:copper_block'}, {"item": 'thermal:copper_block'}, {"item": 'mekanism:block_copper'}])
//Nickel
    stoneCutter('immersiveengineering:storage_nickel', [{"item": 'thermal:nickel_block'}])
    stoneCutter('thermal:nickel_block', [{"item": 'immersiveengineering:storage_nickel'}])
//Uranium
    stoneCutter('immersiveengineering:storage_uranium', [{"item": 'mekanism:block_uranium'}])
    stoneCutter('mekanism:block_uranium', [{"item": 'immersiveengineering:storage_uranium'}])
//Tin
    stoneCutter('mekanism:block_tin', [{"item": 'thermal:tin_block'}])
    stoneCutter('thermal:tin_block', [{"item": 'mekanism:block_tin'}])
//Constantan
    stoneCutter('thermal:constantan_block', [{"item": 'immersiveengineering:storage_constantan'}])
    stoneCutter('immersiveengineering:storage_constantan', [{"item": 'thermal:constantan_block'}])
//Electrum
    stoneCutter('thermal:electrum_block', [{"item": 'immersiveengineering:storage_electrum'}])
    stoneCutter('immersiveengineering:storage_electrum', [{"item": 'thermal:electrum_block'}])
//Steel
    stoneCutter('immersiveengineering:storage_steel', [{"item": 'mekanism:block_steel'}])
    stoneCutter('mekanism:block_steel', [{"item": 'immersiveengineering:storage_steel'}])
//Bronze
    stoneCutter('mekanism:block_bronze', [{"item": 'thermal:bronze_block'}])
    stoneCutter('thermal:bronze_block', [{"item": 'mekanism:block_bronze'}])
//Silver
    stoneCutter('immersiveengineering:storage_silver', [{"item": 'thermal:silver_block'}])
    stoneCutter('thermal:silver_block', [{"item": 'immersiveengineering:storage_silver'}])
//Lead
    stoneCutter('mekanism:block_lead', [{"item": 'immersiveengineering:storage_lead'}, {"item": 'thermal:lead_block'}])
    stoneCutter('immersiveengineering:storage_lead', [{"item": 'thermal:lead_block'}, {"item": 'mekanism:block_lead'}])
    stoneCutter('thermal:lead_block', [{"item": 'immersiveengineering:storage_lead'}, {"item": 'mekanism:block_lead'}])
//Charcoal
    stoneCutter('thermal:charcoal_block', [{"item": 'quark:charcoal_block'}, {"item": 'mekanism:block_charcoal'}])
    stoneCutter('quark:charcoal_block', [{"item": 'mekanism:block_charcoal'}, {"item": 'thermal:charcoal_block'}])
    stoneCutter('mekanism:block_charcoal', [{"item": 'quark:charcoal_block'}, {"item": 'thermal:charcoal_block'}])
//Potato
    stoneCutter('quark:potato_crate', [{"item": 'thermal:potato_block'}])
    stoneCutter('thermal:potato_block', [{"item": 'quark:potato_crate'}])
//Carrot
    stoneCutter('quark:carrot_crate', [{"item": 'thermal:carrot_block'}])
    stoneCutter('thermal:carrot_block', [{"item": 'quark:carrot_crate'}])
//Apple
    stoneCutter('quark:apple_crate', [{"item": 'thermal:apple_block'}])
    stoneCutter('thermal:apple_block', [{"item": 'quark:apple_crate'}])
//Bamboo
    stoneCutter('quark:bamboo_block', [{"item": 'thermal:bamboo_block'}])
    stoneCutter('thermal:bamboo_block', [{"item": 'quark:bamboo_block'}])
//Sugar Cane
    stoneCutter('quark:sugar_cane_block', [{"item": 'thermal:sugar_cane_block'}])
    stoneCutter('thermal:sugar_cane_block', [{"item": 'quark:sugar_cane_block'}])
//Beetroot
    stoneCutter('quark:beetroot_crate', [{"item": 'thermal:beetroot_block'}])
    stoneCutter('thermal:beetroot_block', [{"item": 'quark:beetroot_crate'}])
//Flint
    stoneCutter('excompressum:compressed_flint', [{"item": 'supplementaries:flint_block'}])
    stoneCutter('supplementaries:flint_block', [{"item": 'excompressum:compressed_flint'}])
//Coal Coke
    stoneCutter('thermal:coal_coke_block', [{"item": 'immersiveengineering:coke'}])
    stoneCutter('immersiveengineering:coke', [{"item": 'thermal:coal_coke_block'}])
//Basalt Chisel
    stoneCutter('minecraft:basalt', [{"item": 'chisel:basalt/raw'}])
    stoneCutter('chisel:basalt/raw', [{"item": 'minecraft:basalt'}])
//Limestone Chisel
    stoneCutter('quark:limestone', [{"item": 'chisel:limestone/raw'}])
    stoneCutter('chisel:limestone/raw', [{"item": 'quark:limestone'}])
//Marble Chisel
    stoneCutter('quark:marble', [{"item": 'chisel:marble/raw'}])
    stoneCutter('chisel:marble/raw', [{"item": 'quark:marble'}])
  
})