StartupEvents.registry("item", event => {
    event.create("empty_disk")
        .displayName("Empty Disk")
        .maxStackSize(64)
        .texture("kubejs:item/empty_disk");
});