events.listen('item.registry', function (e) {
    //Jelly Baby
    
	e.create('end_jelly_baby').displayName('End Jelly Baby').food(foodConsumer => {
        foodConsumer.hunger(2)
        .saturation(0.2)
        .alwaysEdible()
        .fastToEat(true)
        .eaten(eatenEvent => {
            eatenEvent.getEntity().getPotionEffects().add("minecraft:slow_falling",1200,0,false,false)
        });
      });
	e.create('overworld_jelly_baby').displayName('Overworld Jelly Baby').food(foodConsumer => {
        foodConsumer.hunger(2)
        .saturation(0.2)
        .alwaysEdible()
        .fastToEat(true)
        .eaten(eatenEvent => {
            eatenEvent.getEntity().getPotionEffects().add("minecraft:resistance",6000,1,false,false)
        });
      });
	e.create('nether_jelly_baby').displayName('Nether Jelly Baby').food(foodConsumer => {
        foodConsumer.hunger(2)
        .saturation(0.2)
        .alwaysEdible()
        .fastToEat(true)
        .eaten(eatenEvent => {
            eatenEvent.getEntity().getPotionEffects().add("minecraft:fire_resistance",6000,0,false,false)
        });
      });
	e.create('mining_jelly_baby').displayName('Mining Jelly Baby').food(foodConsumer => {
        foodConsumer.hunger(2)
        .saturation(0.2)
        .alwaysEdible()
        .fastToEat(true)
        .eaten(eatenEvent => {
            eatenEvent.getEntity().getPotionEffects().add("minecraft:haste",6000,1,false,false)
        });
      });
  })