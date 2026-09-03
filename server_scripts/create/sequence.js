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





    

