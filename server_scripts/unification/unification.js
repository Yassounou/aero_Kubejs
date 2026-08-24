ServerEvents.recipes(event => {
    
    // Définissez ici le lingot d'acier que vous AVEZ CHOISI de garder (Exemple avec Modern Industrialization)
    const steelIngot = 'tfmg:steel_ingot'

    // Force toutes les recettes du jeu qui demandent un lingot d'acier (via le tag) à utiliser votre lingot choisi
    event.replaceInput(
        { input: '#c:ingots/steel' }, // Cible l'ancien ingrédient ou le tag global
        '#c:ingots/steel',            // Ce que l'on cherche à remplacer
        steelIngot               // Le seul et unique lingot qui sera accepté
    )

})
