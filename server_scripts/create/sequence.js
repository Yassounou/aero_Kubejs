ServerEvents.recipes(event => {
    const baseItem = 'create:cardboard'
    const baseItem2 = 'create:powdered_obsidian'
    const outputItem = 'aeronuts_cards:iron_booster'
    const outputItem2 = 'aeronuts_cards:gold_booster'
    const outputItem3 = 'aeronuts_cards:diamond_booster'
    const outputItem4 = 'aeronuts_cards:netherite_booster'
    const outputItem5 = 'create:sturdy_sheet'

    event.recipes.createSequencedAssembly([
        // 
        { id: outputItem, chance: 0.9 },
        { id: 'create:cardboard', chance: 0.1 }
    ], baseItem, [
        // Étape 1 : Spout 100mb de plastique fondu
        event.recipes.createFilling(baseItem, [baseItem, Fluid.of('tfmg:molten_plastic', 100)]),
        
        // Étape 2 : Spout 100mb de teinture noire
        event.recipes.createFilling(baseItem, [baseItem, Fluid.of('create_dragons_plus:black_dye', 100)]),
        
        // Étape 3 : Presser avec la presse mécanique
        event.recipes.createPressing(baseItem, baseItem),
        
        // Étape 4 : Déployer 'createdeco:iron_coinstack'
        event.recipes.createDeploying(baseItem, [baseItem, 'createdeco:iron_coinstack']),
        
        // Étape 5 : Déployer 'numismatics:bevel'
        event.recipes.createDeploying(baseItem, [baseItem, 'numismatics:bevel'])
    ])
    .transitionalItem(baseItem) 
    .loops(3) // Répète la séquence complète 3 fois


     
     

event.recipes.createSequencedAssembly([
      
   


        { id: outputItem2, chance: 0.9 },
        { id: 'aeronuts_cards:iron_booster', chance: 0.1 }
    ], baseItem, [
        // Étape 1 : Spout 100mb de plastique fondu
        event.recipes.createFilling(baseItem, [baseItem, Fluid.of('tfmg:molten_plastic', 100)]),
        
        // Étape 2 : Spout 100mb de teinture noire
        event.recipes.createFilling(baseItem, [baseItem, Fluid.of('create_dragons_plus:black_dye', 100)]),
        
        // Étape 3 : Presser avec la presse mécanique
        event.recipes.createPressing(baseItem, baseItem),
        
        // Étape 4 : Déployer 'createdeco:gold_coinstack'
        event.recipes.createDeploying(baseItem, [baseItem, 'createdeco:brass_coinstack']),
        
        // Étape 5 : Déployer 'numismatics'
        event.recipes.createDeploying(baseItem, [baseItem, 'numismatics:cog'])
    ])
    .transitionalItem(baseItem) 
    .loops(3) // Répète la séquence complète 3 fois



    event.recipes.createSequencedAssembly([
      
   


        { id: outputItem3, chance: 0.9 },
        { id: 'aeronuts_cards:gold_booster', chance: 0.1 }
    ], baseItem, [
        // Étape 1 : Spout 100mb de plastique fondu
        event.recipes.createFilling(baseItem, [baseItem, Fluid.of('tfmg:molten_plastic', 100)]),
        
        // Étape 2 : Spout 100mb de teinture noire
        event.recipes.createFilling(baseItem, [baseItem, Fluid.of('create_dragons_plus:black_dye', 100)]),
        
        // Étape 3 : Presser avec la presse mécanique
        event.recipes.createPressing(baseItem, baseItem),
        
        // Étape 4 : Déployer 'createdeco:gold_coinstack'
        event.recipes.createDeploying(baseItem, [baseItem, 'createdeco:gold_coinstack']),
        
        // Étape 5 : Déployer 'numismatics'
        event.recipes.createDeploying(baseItem, [baseItem, 'numismatics:crown'])
    ])
    .transitionalItem(baseItem) 
    .loops(3) // Répète la séquence complète 3 fois


    event.recipes.createSequencedAssembly([
      
   


        { id: outputItem4, chance: 0.9 },
        { id: 'aeronuts_cards:diamond_booster', chance: 0.1 }
    ], baseItem, [
        // Étape 1 : Spout 100mb de plastique fondu
        event.recipes.createFilling(baseItem, [baseItem, Fluid.of('tfmg:molten_plastic', 100)]),
        
        // Étape 2 : Spout 100mb de teinture noire
        event.recipes.createFilling(baseItem, [baseItem, Fluid.of('create_dragons_plus:black_dye', 100)]),
        
        // Étape 3 : Presser avec la presse mécanique
        event.recipes.createPressing(baseItem, baseItem),
        
        // Étape 4 : Déployer 'createdeco:gold_coinstack'
        event.recipes.createDeploying(baseItem, [baseItem, 'createdeco:netherite_coinstack']),
        
        // Étape 5 : Déployer 'numismatics'
        event.recipes.createDeploying(baseItem, [baseItem, 'numismatics:sun'])
    ])
    .transitionalItem(baseItem) 
    .loops(3) // Répète la séquence complète 3 fois

 
    //STURDY SHEET

   
   event.recipes.createSequencedAssembly([
      
   


        { id: outputItem5, chance: 0.9 },
        { id: 'minecraft:obsidian', chance: 0.1 }
    ], baseItem2, [
        
        
        // Presser avec la presse mécanique
        event.recipes.createPressing(baseItem, baseItem),
        event.recipes.createPressing(baseItem, baseItem),
        event.recipes.createPressing(baseItem, baseItem)
        
    ])
    .transitionalItem(baseItem) 
    .loops(3) // Répète la séquence complète 3 fois





    
})

//PIGLIN HEAD

ServerEvents.recipes(event => {
    // 1. Déclaration des constantes pour éviter les répétitions
    const skullItem = 'minecraft:skeleton_skull'

    // 2. Syntaxe chaînée officielle de KubeJS Create pour la 1.21.1
    event.recipes.create.sequenced_assembly([
        // Résultat principal (95% de chance)
        CreateItem.of('minecraft:piglin_head', 0.95),
        // Résultat d'échec : retourne l'item d'origine (5% de chance)
        CreateItem.of(skullItem, 0.05)
    ], skullItem, [ // L'item de départ est le crâne de squelette
        
        // Étape 1 : Déployer un 'createnetherindustry:fools_gold'
        event.recipes.create.deploying(skullItem, [skullItem, 'createnetherindustry:fools_gold']),
        
        // Étape 2 : Presser (Mechanical Press)
        event.recipes.create.pressing(skullItem, skullItem),
        
        // Étape 3 : Remplir avec 100mb de lave (Spout / Remplisseur)
        event.recipes.create.filling(skullItem, [skullItem, Fluid.of('minecraft:lava', 100)])
        
    ]).transitionalItem(skullItem).loops(1) // Fait l'étape une seule fois par crâne
})

// PLAYER SKULL

ServerEvents.recipes(event => {
    // 1. Déclaration de l'item de base et de transition
    const skullItem = 'minecraft:skeleton_skull'

    // 2. Recette d'assemblage séquencé
    event.recipes.create.sequenced_assembly([
        // Résultat principal : Tête de joueur (95% de chance)
        CreateItem.of('minecraft:player_head', 0.95),
        // Résultat d'échec : Crâne de squelette d'origine (5% de chance)
        CreateItem.of(skullItem, 0.05)
    ], skullItem, [
        
        // Étape 1 : Déployer un bloc de béton marron (Brown Concrete)
        event.recipes.create.deploying(skullItem, [skullItem, 'minecraft:brown_concrete']),
        
        // Étape 2 : Presser avec la presse mécanique
        event.recipes.create.pressing(skullItem, skullItem),
        
        // Étape 3 : Remplir avec 10mb de Thick Soul Syrup (Spout)
        event.recipes.create.filling(skullItem, [skullItem, Fluid.of('createnetherindustry:thick_soul_syrup', 10)])
        
    ]).transitionalItem(skullItem).loops(1)
})

// ZOMBIE HEAD

ServerEvents.recipes(event => {
    // 1. Déclaration du crâne de base servant aussi d'élément transitoire
    const skullItem = 'minecraft:skeleton_skull'

    // 2. Assemblage séquencé officiel KubeJS Create (1.21.1)
    event.recipes.create.sequenced_assembly([
        // Résultat principal : Tête de Zombie (95% de chance)
        CreateItem.of('minecraft:zombie_head', 0.95),
        // Résultat d'échec : Restitue le crâne d'origine (5% de chance)
        CreateItem.of(skullItem, 0.05)
    ], skullItem, [
        
        // Étape 1 : Déployer de la chair putréfiée (Rotten Flesh)
        event.recipes.create.deploying(skullItem, [skullItem, 'minecraft:rotten_flesh']),
        
        // Étape 2 : Remplir avec 10mb d'Uranium liquide de Create Nuclear
        event.recipes.create.filling(skullItem, [skullItem, Fluid.of('createnuclear:uranium', 10)])
        
    ]).transitionalItem(skullItem).loops(1)
})

// DRAGON BREATH

ServerEvents.recipes(event => {
    // 1. Déclaration de l'item de base servant aussi d'élément transitoire
    const skullItem = 'minecraft:skeleton_skull'

    // 2. Assemblage séquencé officiel KubeJS Create (1.21.1)
    event.recipes.create.sequenced_assembly([
        // Résultat principal : Tête de Dragon (95% de chance)
        CreateItem.of('minecraft:dragon_head', 0.95),
        // Résultat d'échec : Restitue le crâne d'origine (5% de chance)
        CreateItem.of(skullItem, 0.05)
    ], skullItem, [
        
        // Étape 1 : Déployer un fruit du chorus (Chorus Fruit)
        event.recipes.create.deploying(skullItem, [skullItem, 'minecraft:chorus_fruit']),
        
        // Étape 2 : Presser avec la presse mécanique
        event.recipes.create.pressing(skullItem, skullItem),
        
        // Étape 3 : Remplir avec 100mb de Dragon's Breath du mod Dragons Plus
        event.recipes.create.filling(skullItem, [skullItem, Fluid.of('create_dragons_plus:dragon_breath', 100)])
        
    ]).transitionalItem(skullItem).loops(1)
})

    

