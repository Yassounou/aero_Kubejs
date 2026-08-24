ServerEvents.recipes(event => {
    
    // milkshake

    event.recipes.create.mixing(
        [Fluid.of('createfood:milkshake', 500)],               // Sortie(s)
        [Fluid.of('ratatouille_fried_delights:ice_cream_base', 250), Fluid.of('minecraft:milk', 250),Item.of('ratatouille_fried_delights:ice_cubes', 1)] // Entrée(s)
    )

   

    })


   