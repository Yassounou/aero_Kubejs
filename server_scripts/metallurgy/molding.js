ServerEvents.recipes(event => {

    // iron
event.recipes.createmetallurgy
    .casting_in_table("kubejs:iron_chunk", [
        Fluid.of("createmetallurgy:molten_iron", 70),
        "kubejs:graphite_chunk_mold",
    ])
    .processingTime(100);


   // GOLD
event.recipes.createmetallurgy
    .casting_in_table("kubejs:gold_chunk", [
        Fluid.of("createmetallurgy:molten_gold", 70),
        "kubejs:graphite_chunk_mold",
    ])
    .processingTime(100);


// ZINC
event.recipes.createmetallurgy
    .casting_in_table("kubejs:zinc_chunk", [
        Fluid.of("createmetallurgy:molten_zinc", 70),
        "kubejs:graphite_chunk_mold",
    ])
    .processingTime(100);


    // COPPER
event.recipes.createmetallurgy
    .casting_in_table("kubejs:copper_chunk", [
        Fluid.of("createmetallurgy:molten_copper", 70),
        "kubejs:graphite_chunk_mold",
    ])
    .processingTime(100);

})