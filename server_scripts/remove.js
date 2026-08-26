//OUTPUTS

ServerEvents.recipes(event => {
    // Forcefully remove ANY crushing recipe resulting in these items
    event.remove({ type: 'create:crushing', output: 'create:crushed_raw_iron' })
    event.remove({ type: 'create:crushing', output: 'create:crushed_raw_gold' })
    event.remove({ type: 'create:crushing', output: 'create:crushed_raw_zinc' })
    event.remove({ type: 'create:crushing', output: 'create:crushed_raw_copper' })
})

ServerEvents.recipes(event => {
    // Forcefully remove ANY crushing recipe resulting in these items
    event.remove({ type: 'create:splashing', output: 'minecraft:iron_nugget' })
    event.remove({ type: 'create:splashing', output: 'minecraft:gold_nugget' })
    event.remove({ type: 'create:splashing', output: 'create:zinc_nugget' })
    event.remove({ type: 'create:splashing', output: 'create:copper_nugget' })
})


// Supprimer une recette spécifique par son ID
ServerEvents.recipes(event => {
    // mettalurgy smelter
    // iron
    event.remove({ id: 'createmetallurgy:melting/iron/ingot' })
    event.remove({ id: 'createmetallurgy:melting/iron/raw_material' })
    event.remove({ id: 'createmetallurgy:melting/iron/raw_crushed' })
    event.remove({ id: 'createmetallurgy:melting/iron/dirty_dust' })
    event.remove({ id: 'createmetallurgy:melting/iron/nugget' })
    event.remove({ id: 'createmetallurgy:melting/iron/rod' })
    event.remove({ id: 'createmetallurgy:melting/iron/dust' })   
    event.remove({ id: 'createmetallurgy:melting/iron/wire' })
    event.remove({ id: 'createmetallurgy:melting/iron/plate' })

    //copper
    event.remove({ id: 'createmetallurgy:melting/copper/ingot' })
    event.remove({ id: 'createmetallurgy:melting/copper/raw_material' })
    event.remove({ id: 'createmetallurgy:melting/copper/raw_crushed' })
    event.remove({ id: 'createmetallurgy:melting/copper/dirty_dust' })
    event.remove({ id: 'createmetallurgy:melting/copper/nugget' })
    event.remove({ id: 'createmetallurgy:melting/copper/rod' })
    event.remove({ id: 'createmetallurgy:melting/copper/dust' })   
    event.remove({ id: 'createmetallurgy:melting/copper/wire' })
    event.remove({ id: 'createmetallurgy:melting/copper/plate' })

    //brass 
    event.remove({ id: 'createmetallurgy:melting/brass/ingot' })
    event.remove({ id: 'createmetallurgy:melting/brass/nugget' })
    event.remove({ id: 'createmetallurgy:melting/brass/rod' })
    event.remove({ id: 'createmetallurgy:melting/brass/plate' })

    //zinc
    event.remove({ id: 'createmetallurgy:melting/zinc/ingot' })
    event.remove({ id: 'createmetallurgy:melting/zinc/raw_material' })
    event.remove({ id: 'createmetallurgy:melting/zinc/raw_crushed' })
    event.remove({ id: 'createmetallurgy:melting/zinc/dirty_dust' })
    event.remove({ id: 'createmetallurgy:melting/zinc/nugget' })
    event.remove({ id: 'createmetallurgy:melting/zinc/rod' })
    event.remove({ id: 'createmetallurgy:melting/zinc/dust' })   
    event.remove({ id: 'createmetallurgy:melting/zinc/wire' })
    event.remove({ id: 'createmetallurgy:melting/zinc/plate' })


    //Gold
    event.remove({ id: 'createmetallurgy:melting/gold/ingot' })
    event.remove({ id: 'createmetallurgy:melting/gold/raw_material' })
    event.remove({ id: 'createmetallurgy:melting/gold/raw_crushed' })
    event.remove({ id: 'createmetallurgy:melting/gold/dirty_dust' })
    event.remove({ id: 'createmetallurgy:melting/gold/nugget' })
    event.remove({ id: 'createmetallurgy:melting/gold/rod' })
    event.remove({ id: 'createmetallurgy:melting/gold/dust' })   
    event.remove({ id: 'createmetallurgy:melting/gold/wire' })
    event.remove({ id: 'createmetallurgy:melting/gold/plate' })


    // casting in table 

    event.remove({ id: 'createmetallurgy:casting_in_table/iron/plate' })
    event.remove({ id: 'createmetallurgy:casting_in_table/iron/nugget' })
    event.remove({ id: 'createmetallurgy:casting_in_table/iron/rod' })
    event.remove({ id: 'createmetallurgy:casting_in_table/gold/plate' })
    event.remove({ id: 'createmetallurgy:casting_in_table/gold/nugget' })
    event.remove({ id: 'createmetallurgy:casting_in_table/gold/rod' })
    event.remove({ id: 'createmetallurgy:casting_in_table/zinc/plate' })
    event.remove({ id: 'createmetallurgy:casting_in_table/zinc/nugget' })
    event.remove({ id: 'createmetallurgy:casting_in_table/zinc/rod' })
    event.remove({ id: 'createmetallurgy:casting_in_table/copper/plate' })
    event.remove({ id: 'createmetallurgy:casting_in_table/copper/nugget' })
    event.remove({ id: 'createmetallurgy:casting_in_table/copper/rod' })
    event.remove({ id: 'createmetallurgy:casting_in_table/brass/plate' })
    event.remove({ id: 'createmetallurgy:casting_in_table/brass/nugget' })
    event.remove({ id: 'createmetallurgy:casting_in_table/brass/rod' })
    event.remove({ id: 'createmetallurgy:casting_in_table/steel/plate' })





    // alloyin

    event.remove({ id: 'createmetallurgy:alloying/steel' })
     event.forEachRecipe(
        { input: 'createmetallurgy:molten_steel' }, 
        recipe => {
            recipe.replaceInput('createmetallurgy:molten_steel', 'tfmg:molten_steel')
        }
    )

    event.forEachRecipe(
        { output: 'createmetallurgy:molten_steel' }, 
        recipe => {
            recipe.replaceOutput('createmetallurgy:molten_steel', 'tfmg:molten_steel')
        }
    )

    // items op

    event.remove({ id: 'createdeliveryrequired:market' })
    event.remove({ id: 'createthrusters:physics_staff' })
    event.remove({ id: 'dndesires:seething/diamond_shard_from_deepslate_coal_ore' })
    event.remove({ id: 'dndesires:seething/diamond_shard_from_coal_block' })

    // ice cream

    event.remove({ id: 'ratatouille_fried_delights:mixing/ice_cream_base' })
    event.remove({ id: 'createfood:create/mixing/milkshake_from_mixing_ice_cream_milk' })
    event.remove({ id: 'createfood:minecraft/crafting/milkshake_bucket_from_crafting_alt' })
    event.remove({ output: 'createfood:condensed_milk_bucket' })
    event.remove({ id: 'createfood:create/mixing/heavy_cream_from_mixing_heated_milk' })
    event.remove({ id: 'createfood:create/mixing/heavy_cream_from_mixing_heated_milk_alt' })
    event.remove({ output: 'createfood:heavy_cream_bucket' })
    event.remove({ id: 'createfood:create/mixing/condensed_milk_from_mixing_heated_milk_alt' })
    event.remove({ id: 'createfood:create/mixing/condensed_milk_from_mixing_heated_milk' })
    event.remove({ id: 'createfood:farmersdelight/cooking/bar_of_chocolate_from_cooking' })
    event.remove({ id: 'create:compacting/chocolate' })
    event.remove({ id: 'createdieselgenerators:casting/chocolate_bar' })
    event.remove({ id: 'sliceanddice:cooking/createfood/farmersdelight/bar_of_chocolate_from_cooking_1' })
    event.remove({ id: 'sliceanddice:cooking/createfood/farmersdelight/bar_of_chocolate_from_cooking_0' })
    event.remove({ id: 'create:mixing/chocolate_melting' })
    event.remove({ id: 'create:mixing/chocolate_fluid_from_mixing_melting' })
    event.remove({ id: 'createfood:create/mixing/chocolate_fluid_from_mixing' })
    event.remove({ id: 'createfood:create/mixing/chocolate_fluid_from_mixing_melting' })
    event.remove({ id: 'createfood:create/mixing/chocolate_fluid_from_mixing_melting_alt' })
    event.remove({ id: 'createfood:create/emptying/chocolate_fluid_from_emptying_bottle' })
    event.remove({ id: 'create:mixing/chocolate' })
    event.remove({ id: 'createfood:create/mixing/chocolate_fluid_from_mixing_alt' })

// milk powder

    event.remove({ output: 'createfood:milk_powder' })

    // 2. Ajoute la recette personnalisée de la centrifugeuse TFMG
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 1000,
                "fluid": "minecraft:milk"
            }
        ],
        "machines": [
            "tfmg:centrifuge"
        ],
        "min_size": 1,
        "processing_time": 10,
        "results": [
            {
                "amount": 5,
                "id": "createfood:milk_powder"
            }
        ]
    })



    // 1. Supprime toutes les recettes d'origine donnant le fluide de lait condensé
    event.remove({ output: 'createfood:condensed_milk' })

    // 2. Ajoute la recette de mixage en cuve TFMG (Vat)
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowed_vat_types": [
            "tfmg:steel_vat",
            "tfmg:firebrick_lined_vat"
        ],
        "heat_requirement": "heated",
        "ingredients": [
            {
                "item": "createfood:milk_powder"
            },
            {
                "type": "neoforge:single",
                "amount": 250,
                "fluid": "minecraft:milk"
            }
        ],
        "machines": [
            "tfmg:electrode",
            "tfmg:electrode"
        ],
        "min_size": 1,
        "processing_time": 100,
        "results": [
            {
                
                "amount": 250,
                "id": "createfood:condensed_milk"
            },
            {
                "chance": 0.25,
                "count": 1,
                "id": "createfood:milk_powder"
            }
        ]
    })
})




 

    

    

