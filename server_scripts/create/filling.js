ServerEvents.recipes(event => {
    // Recette du Spout (Remplissage) de Create
    event.recipes.create.filling('tfmg:lignite', [
        'minecraft:tuff',
        Fluid.of('tfmg:creosote', 100)
    ])


    event.recipes.create.filling('minecraft:tuff', [
        'minecraft:cobblestone',
        Fluid.of('tfmg:molten_slag', 100)
    ])
})


