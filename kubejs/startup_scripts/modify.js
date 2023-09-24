onEvent('block.modification', e => {
    e.modify('craftingstation:crafting_station', block => {
      block.material = "STONE"
    })
    e.modify('craftingstation:crafting_station_slab', slab => {
      slab.material = "STONE"
    })
  })