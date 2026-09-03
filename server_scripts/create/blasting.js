ServerEvents.recipes(event => {
    
    // 1. Vanilla Blast Furnace (Strictly 1-to-1 output)
    event.blasting(
        'minecraft:iron_ingot', 
        'createmetallurgy:iron_dust'
    ).xp(0.7).cookingTime(100)

    // 2. Vanilla Standard Furnace (Strictly 1-to-1 output)
    event.smelting(
        'minecraft:iron_ingot', 
        'createmetallurgy:iron_dust'
    ).xp(0.7).cookingTime(200)


    // 1. Vanilla Blast Furnace (Strictly 1-to-1 output)
    event.blasting(
        'minecraft:gold_ingot', 
        'createmetallurgy:gold_dust'
    ).xp(0.7).cookingTime(100)

    // 2. Vanilla Standard Furnace (Strictly 1-to-1 output)
    event.smelting(
        'minecraft:gold_ingot', 
        'createmetallurgy:gold_dust'
    ).xp(0.7).cookingTime(200)

    // 1. Vanilla Blast Furnace (Strictly 1-to-1 output)
    event.blasting(
        'create:zinc_ingot', 
        'createmetallurgy:zinc_dust'
    ).xp(0.7).cookingTime(100)

    // 2. Vanilla Standard Furnace (Strictly 1-to-1 output)
    event.smelting(
        'create:zinc_ingot', 
        'createmetallurgy:zinc_dust'
    ).xp(0.7).cookingTime(200)

    // 1. Vanilla Blast Furnace (Strictly 1-to-1 output)
    event.blasting(
        'minecraft:copper_ingot', 
        'createmetallurgy:copper_dust'
    ).xp(0.7).cookingTime(100)

    // 2. Vanilla Standard Furnace (Strictly 1-to-1 output)
    event.smelting(
        'minecraft:copper_ingot', 
        'createmetallurgy:copper_dust'
    ).xp(0.7).cookingTime(200)
    

})