ServerEvents.recipes(event => {

    // Liste complète de toutes les variantes de bois et leurs rails
    // Format : [ ID de la dalle, ID du rail de Steam 'n' Rails ]
    const trackVariations = [
        ['minecraft:acacia_slab', 'railways:track_acacia'],
        ['minecraft:jungle_slab', 'railways:track_jungle'],
        ['minecraft:birch_slab', 'railways:track_birch'],
        ['minecraft:spruce_slab', 'railways:track_spruce'],
        ['minecraft:dark_oak_slab', 'railways:track_dark_oak'],
        ['minecraft:cherry_slab', 'railways:track_cherry'],
        ['minecraft:mangrove_slab', 'railways:track_mangrove'],
        ['minecraft:bamboo_slab', 'railways:track_bamboo'],
        ['minecraft:bamboo_slab', 'railways:track_stripped_bamboo'] // Utilise la même dalle ou celle de votre choix
    ];

    trackVariations.forEach(([slabId, trackId]) => {
        event.recipes.create.deploying(
            trackId, // Résultat de la transformation
            [
                'create:track', // Cible au sol (Rail de base)
                slabId          // Objet tenu par le déployeur
            ]
        );
    });

});
