advancement revoke @s only bloodmagic:enter_new_dungeon

execute at @s if block ~ ~-1 ~ minecraft:barrier run setblock ~-1 ~-11 ~3 minecraft:structure_block[mode=load]{ mode: "LOAD", name: "bloodmagic:new_dungeon_nw", posX: -29, posY: 0, posZ: -29 }
execute at @s if block ~ ~-1 ~ minecraft:barrier run setblock ~ ~-11 ~3 minecraft:structure_block[mode=load]{ mode: "LOAD", name: "bloodmagic:new_dungeon_ne", posX: 0, posY: 0, posZ: -29 }
execute at @s if block ~ ~-1 ~ minecraft:barrier run setblock ~-1 ~-11 ~4 minecraft:structure_block[mode=load]{ mode: "LOAD", name: "bloodmagic:new_dungeon_sw", posX: -29, posY: 0, posZ: 0 }
execute at @s if block ~ ~-1 ~ minecraft:barrier run setblock ~ ~-11 ~4 minecraft:structure_block[mode=load]{ mode: "LOAD", name: "bloodmagic:new_dungeon_se", posX: 0, posY: 0, posZ: 0 }

execute at @s if block ~ ~-1 ~ minecraft:barrier run fill ~-1 ~-10 ~3 ~ ~-10 ~4 minecraft:redstone_block
