events.listen('recipes', function (e) {

    //Build Structure
    e.custom({
        "type": "masterfulmachinery:machine_structure",
        "id": "bloodbath_structure",
        "controllerId": "bloodbath",
        "name": "Blood Bath",
        "layout": [
            [
                "  )))  ",
                " *+++* ",
                ")++,++)",
                ")+,-,+)",
                ")++,++)",
                " *+++* ",
                "  )))  "
            ],
            [
                "  +++  ",
                " .///. ",
                "+/////+",
                "+/////+",
                "+/////+",
                " .///. ",
                "  +++  "
            ],
            [
                "  +0+  ",
                " .///. ",
                "+/////+",
                "1/////2",
                "+/////+",
                " .///. ",
                "  +C+  "
            ],
            [
                "  +++  ",
                " *   * ",
                "+     +",
                "+     +",
                "+     +",
                " *   * ",
                "  +++  "
            ]
        ],
        "legend": {
            "0": {
                "block": "masterfulmachinery:bloodbath_fluid_port_fluids_input"
            },
            "1": {
                "block": "masterfulmachinery:bloodbath_items_port_items_output"
            },
            "2": {
                "block": "masterfulmachinery:bloodbath_items_port_items_input"
            },
            ")": {
                "block": "bloodmagic:dungeon_brick_assorted"
            },
            "*": {
                "block": "bloodmagic:dungeon_pillar_cap"
            },
            "+": {
                "block": "bloodmagic:dungeon_polished"
            },
            ",": {
                "block": "bloodmagic:dungeon_emitter"
            },
            "-": {
                "block": "bloodmagic:dungeon_alternator"
            },
            ".": {
                "block": "bloodmagic:dungeon_pillar_special"
            },
            "/": {
                "block": "tconstruct:blood_congealed_slime"
            }
        }
    })

    //Large Bloodstone Brick
    e.custom(
        {
            "type": "masterfulmachinery:machine_process",
            "structureId": "bloodbath_structure",
            "controllerId": "bloodbath",
            "ticks": 200,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data": {
                        "item": "bloodmagic:weakbloodshard",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":
                    {
                        "item": "bloodmagic:defaultcrystal",
                        "count": 4
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":
                    {
                        "item": "bloodmagic:sacrificerune",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":
                    {
                        "fluid": "bloodmagic:life_essence_fluid",
                        "amount": 1000
                    }
                }
            ],
            "outputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data": {
                        "item": "bloodmagic:largebloodstonebrick",
                        "count": 1
                    }
                }
            ]
        }
    )

    //Blocks
    e.shaped('masterfulmachinery:bloodbath_controller', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'bloodmagic:dungeon_polished',
        B: 'kubejs:integrated_circuit',
        C: 'xnet:controller'
    })
    e.shaped('masterfulmachinery:bloodbath_items_port_items_input', [
        'B',
        'A'
    ], {
        A: 'bloodmagic:dungeon_polished',
        B: 'engineersdecor:factory_hopper'
    })
    e.shaped('masterfulmachinery:bloodbath_items_port_items_output', [
        'A',
        'B'
    ], {
        A: 'bloodmagic:dungeon_polished',
        B: 'engineersdecor:factory_hopper'
    })
    e.shaped('masterfulmachinery:bloodbath_fluid_port_fluids_input', [
        'B',
        'A'
    ], {
        A: 'bloodmagic:dungeon_polished',
        B: 'immersiveengineering:fluid_pipe'
    })
})
