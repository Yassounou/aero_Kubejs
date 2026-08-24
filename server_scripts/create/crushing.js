ServerEvents.recipes(event => {
    
    // crushed raw iron

    event.recipes.create.crushing(
    Item.of('create:crushed_raw_iron',2), 'kubejs:iron_chunk')
    event.recipes.create.crushing(
    Item.of('create:crushed_raw_zinc',2), 'kubejs:zinc_chunk')
    event.recipes.create.crushing(
    Item.of('create:crushed_raw_gold',2), 'kubejs:gold_chunk')
    event.recipes.create.crushing(
    Item.of('create:crushed_raw_copper',2), 'kubejs:copper_chunk')

    })