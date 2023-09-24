events.listen('recipes', function (e) {

    //Build Structure
    e.custom({
        "type": "masterfulmachinery:machine_structure",
        "id": "explosivo_structure",
        "controllerId": "explosivo",
        "name": "Explosivo",
        "layout": [
            [
                "      )*)      ",
                "    ))***))    ",
                "   ))))*))))   ",
                "  )))))))))))  ",
                " ))))))))))))) ",
                " )))))***))))) ",
                ")*)))**)**)))*)",
                "***))*)))*))***",
                ")*)))**)**)))*)",
                " )))))***))))) ",
                " ))))))))))))) ",
                "  )))))))))))  ",
                "   ))))*))))   ",
                "    ))***))    ",
                "      )*)      "
            ],
            [
                "      +,+      ",
                "      -*-      ",
                "      +-+      ",
                "               ",
                "               ",
                "     +-.-+     ",
                "+-+  -*/*-  +-+",
                "0*-  ./)/.  -*1",
                "+-+  -*/*-  +-+",
                "     +-2-+     ",
                "               ",
                "               ",
                "      +-+      ",
                "      -*-      ",
                "      +3+      "
            ],
            [
                "      +-+      ",
                "      -*-      ",
                "      +-+      ",
                "               ",
                "               ",
                "     +-4-+     ",
                "+-+  -*/*-  +-+",
                "-*-  4/)/4  -*-",
                "+-+  -*/*-  +-+",
                "     +-C-+     ",
                "               ",
                "               ",
                "      +-+      ",
                "      -*-      ",
                "      +-+      "
            ],
            [
                "      +-+      ",
                "      -*-      ",
                "      +-+      ",
                "       5       ",
                "       5       ",
                "     +-6-+     ",
                "+-+  -*/*-  +-+",
                "-*-556/)/655-*-",
                "+-+  -*/*-  +-+",
                "     +-6-+     ",
                "       5       ",
                "       5       ",
                "      +-+      ",
                "      -*-      ",
                "      +-+      "
            ],
            [
                "      +-+      ",
                "      6*6      ",
                "      -*-      ",
                "      -*-      ",
                "      -*-      ",
                "     +6*6+     ",
                "+6---6***6---6+",
                "-******)******-",
                "+6---6***6---6+",
                "     +6*6+     ",
                "      -*-      ",
                "      -*-      ",
                "      -*-      ",
                "      6*6      ",
                "      +-+      "
            ],
            [
                "      +6+      ",
                "      +*+      ",
                "       5       ",
                "       5       ",
                "       5       ",
                "      -6-      ",
                "++   -***-   ++",
                "6*5556***6555*6",
                "++   -***-   ++",
                "      -6-      ",
                "       5       ",
                "       5       ",
                "       5       ",
                "      +*+      ",
                "      +6+      "
            ],
            [
                "               ",
                "               ",
                "               ",
                "               ",
                "               ",
                "      - -      ",
                "     -***-     ",
                "      * *    * ",
                "     - **-     ",
                "        -      ",
                "               ",
                "               ",
                "               ",
                "               ",
                "               "
            ],
            [
                "               ",
                "               ",
                "               ",
                "               ",
                "               ",
                "      -        ",
                "      * *-     ",
                " *      *      ",
                "      **       ",
                "        -      ",
                "               ",
                "               ",
                "               ",
                "       *       ",
                "               "
            ],
            [
                "               ",
                "               ",
                "               ",
                "               ",
                "               ",
                "               ",
                "      **       ",
                "        *      ",
                "       **      ",
                "               ",
                "               ",
                "               ",
                "               ",
                "       *       ",
                "               "
            ],
            [
                "               ",
                "               ",
                "               ",
                "               ",
                "               ",
                "               ",
                "       *       ",
                "               ",
                "      * *      ",
                "               ",
                "               ",
                "               ",
                "               ",
                "               ",
                "               "
            ],
            [
                "               ",
                "               ",
                "               ",
                "               ",
                "               ",
                "               ",
                "               ",
                "      *        ",
                "               ",
                "               ",
                "               ",
                "               ",
                "               ",
                "               ",
                "               "
            ],
            [
                "               ",
                "               ",
                "               ",
                "               ",
                "               ",
                "               ",
                "      *        ",
                "        *      ",
                "       *       ",
                "               ",
                "               ",
                "               ",
                "               ",
                "               ",
                "               "
            ],
            [
                "               ",
                "               ",
                "               ",
                "               ",
                "               ",
                "               ",
                "               ",
                "        *      ",
                "      *        ",
                "               ",
                "               ",
                "               ",
                "               ",
                "               ",
                "               "
            ]
        ],
        "legend": {
            ")": {
                "block": "draconicevolution:infused_obsidian"
            },
            "*": {
                "block": "projectred-illumination:orange_inverted_illumar_lamp"
            },
            "+": {
                "block": "architects_palette:sunmetal_bars"
            },
            ",": {
                "block": "masterfulmachinery:explosivo_kinetic_port_create_rotation_input"
            },
            "-": {
                "block": "architects_palette:sunmetal_pillar"
            },
            ".": {
                "block": "masterfulmachinery:explosivo_items_port_items_input"
            },
            "/": {
                "block": "architects_palette:sunmetal_block"
            },
            "0": {
                "block": "masterfulmachinery:explosivo_gas_port_mekanism_gas_input"
            },
            "1": {
                "block": "masterfulmachinery:explosivo_fluid_port_fluids_input"
            },
            "2": {
                "block": "masterfulmachinery:explosivo_items_port_items_output"
            },
            "3": {
                "block": "masterfulmachinery:explosivo_energy_port_energy_input"
            },
            "4": {
                "block": "kubejs:machinarium_block"
            },
            "5": {
                "block": "architects_palette:sunmetal_slab"
            },
            "6": {
                "block": "architects_palette:chiseled_sunmetal_block"
            }
        }
    })

    //Draconium Block
    e.custom(
        {
            "type": "masterfulmachinery:machine_process",
            "structureId": "explosivo_structure",
            "controllerId": "explosivo",
            "ticks": 100,
            "inputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data": {
                        "item": "draconicevolution:dragon_heart",
                        "count": 1
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":
                    {
                        "item": "draconicevolution:draconium_block",
                        "count": 4
                    }
                },
                {
                    "type": "masterfulmachinery:items",
                    "data":
                    {
                        "item": "draconicevolution:draconium_core",
                        "count": 16
                    }
                },
                {
                    "type": "masterfulmachinery:energy",
                    "data": {
                        "amount": 10000000
                    }
                },
                {
                    "type": "masterfulmachinery:fluids",
                    "data":
                    {
                        "fluid": "immersiveengineering:ethanol",
                        "amount": 1000
                    }
                },
                {
                    "type": "masterfulmachinery:mekanism_gas",
                    "data":
                    {
                        "gas": "mekanism:oxygen",
                        "amount": 1000
                    }
                },
                {
                    "type": "masterfulmachinery:create_rotation",
                    "data": {
                        "speed": 256
                    }
                }
            ],
            "outputs": [
                {
                    "type": "masterfulmachinery:items",
                    "data": {
                        "item": "draconicevolution:awakened_draconium_block",
                        "count": 4
                    }
                }
            ]
        }
    )

    //Blocks
    e.shaped('masterfulmachinery:explosivo_controller', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'kubejs:machinarium_block',
        B: 'kubejs:integrated_circuit',
        C: 'xnet:controller'
    })
    e.shaped('masterfulmachinery:explosivo_items_port_items_input', [
        'B',
        'A'
    ], {
        A: 'kubejs:machinarium_block',
        B: 'engineersdecor:factory_hopper'
    })
    e.shaped('masterfulmachinery:explosivo_items_port_items_output', [
        'A',
        'B'
    ], {
        A: 'kubejs:machinarium_block',
        B: 'engineersdecor:factory_hopper'
    })
    e.shaped('masterfulmachinery:explosivo_fluid_port_fluids_input', [
        'B',
        'A'
    ], {
        A: 'kubejs:machinarium_block',
        B: 'immersiveengineering:fluid_pipe'
    })
    e.shaped('masterfulmachinery:explosivo_energy_port_energy_input', [
        'B',
        'A'
    ], {
        A: 'kubejs:machinarium_block',
        B: 'draconicevolution:wyvern_capacitor'
    })
    e.shaped('masterfulmachinery:explosivo_gas_port_mekanism_gas_input', [
        'B',
        'A'
    ], {
        A: 'kubejs:machinarium_block',
        B: 'mekanism:ultimate_pressurized_tube'
    })
    e.shaped('masterfulmachinery:explosivo_kinetic_port_create_rotation_input', [
        'B',
        'A'
    ], {
        A: 'kubejs:machinarium_block',
        B: 'create:clutch'
    })
})
