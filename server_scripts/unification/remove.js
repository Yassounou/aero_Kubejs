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
    event.remove({ type: 'create:splashing', output: 'minecraft:zinc_nugget' })
    event.remove({ type: 'create:splashing', output: 'minecraft:copper_nugget' })
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



})
