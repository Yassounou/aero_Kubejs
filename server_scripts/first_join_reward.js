PlayerEvents.loggedIn(event => {
    const player = event.player
    const data = player.persistentData
    const rewardKey = 'smp_first_join_reward_v1'

    if (data.getBoolean(rewardKey)) return

    player.give(Item.of('numismatics:sprocket', 10))
    player.tell('Bienvenue ! Tu reçois 10 Sprockets.')

    data.putBoolean(rewardKey, true)
})