events.listen('recipes', function (e) {

    //Build Structure
    e.custom({
        "type": "masterfulmachinery:machine_structure",
        "id": "barrel_structure",
        "controllerId": "barrel",
        "name": "Barrel",
        "layout": [
            [
                ")))",
                ")))",
                ")))"
            ],
            [
                "*+*",
                ", ;",
                "*C*"
            ],
            [
                ")))",
                ") )",
                ")))"
            ]
        ],
        "legend": {
            ")": {
                "block": "immersiveengineering:treated_wood_vertical"
            },
            "*": {
                "block": "immersiveengineering:wooden_barrel"
            },
            "+": {
                "block": "masterfulmachinery:barrel_fluid_port_fluids_input"
            },
            ",": {
                "block": "masterfulmachinery:barrel_items_port_items_input"
            },
            ";": {
                "block": "masterfulmachinery:barrel_items_port_items_output"
            }
        }
    })

    //Crafts

    function barrel(input, fluid, amount, output) {
        e.custom({ "type": "masterfulmachinery:machine_process", "structureId": "barrel_structure", "controllerId": "barrel", "ticks": 60, "inputs": [{ "type": "masterfulmachinery:items", "data": { "item": input, "count": 1 } }, { "type": "masterfulmachinery:fluids", "data": { "fluid": fluid, "amount": amount } }], "outputs": [{ "type": "masterfulmachinery:items", "data": { "item": output, "count": 1 } }] })
    }
    function barreltag(input, fluid, amount, output) {
        e.custom({ "type": "masterfulmachinery:machine_process", "structureId": "barrel_structure", "controllerId": "barrel", "ticks": 60, "inputs": [{ "type": "masterfulmachinery:items", "data": { "tag": input, "count": 1 } }, { "type": "masterfulmachinery:fluids", "data": { "fluid": fluid, "amount": amount } }], "outputs": [{ "type": "masterfulmachinery:items", "data": { "item": output, "count": 1 } }] })
    }

    barrel('mysticalagriculture:fertilized_essence', 'tconstruct:molten_lumium', 10, 'extendedcrafting:luminessence')
    barrel('architects_palette:sunstone', 'exnihilosequentia:witchwater', 10, 'architects_palette:moonstone')
    barrel('architects_palette:rotten_flesh_block', 'exnihilosequentia:witchwater', 10, 'architects_palette:entrails')
    barreltag('forge:stone', 'exnihilosequentia:witchwater', 10, 'architects_palette:warpstone')
    barreltag('forge:logs', 'exnihilosequentia:witchwater', 10, 'architects_palette:twisted_log')
    barreltag('minecraft:planks', 'exnihilosequentia:witchwater', 10, 'architects_palette:twisted_planks')
    barreltag('forge:sapling', 'exnihilosequentia:witchwater', 10, 'architects_palette:twisted_sapling')
    barreltag('forge:leaves', 'exnihilosequentia:witchwater', 10, 'architects_palette:twisted_leaves')

    //Blocks
    e.shaped('masterfulmachinery:barrel_controller', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'immersiveengineering:wooden_barrel',
        B: 'kubejs:integrated_circuit',
        C: '#exnihilosequentia:barrels'
    })
    e.shaped('masterfulmachinery:barrel_items_port_items_input', [
        'B',
        'A'
    ], {
        A: 'immersiveengineering:wooden_barrel',
        B: 'engineersdecor:factory_hopper'
    })
    e.shaped('masterfulmachinery:barrel_items_port_items_output', [
        'A',
        'B'
    ], {
        A: 'immersiveengineering:wooden_barrel',
        B: 'engineersdecor:factory_hopper'
    })
    e.shaped('masterfulmachinery:barrel_fluid_port_fluids_input', [
        'B',
        'A'
    ], {
        A: 'immersiveengineering:wooden_barrel',
        B: 'immersiveengineering:fluid_pipe'
    })
})