module.exports = {
    token: "NzM5MTA5MjY1NjQ5Njk2ODQ5.GdfeBY.-HAL5UpbXQksKBxIwP8kSqf_dkm9aip9WdyjRs", // video tutorial: https://youtu.be/pqW553a3_Tc

    // Servers u want the bot to not catch anything in
    blacklistedServers: [
        "1265677665315192864",
    ],

    // Servers u want the bot to only catch there
    // This shit will be disabled if nothing in the list
    whitelistedServers: [
    "1097558308967166014",
    "1194249474705469451",
    "1168214136711282869",
    "1250847532372725960",
    "1262443480907645049",
    "714066486636838932",
    ],

    // the Server u want the bot to send a message every hour to
    // This shit will be disabled if nothing in the list
    farmServers: [
    "ServerNameOrID1"
    ],

    // this field is used to get a channel from the farm servers using name (it will use the first channel if not provided)
    farmChannelName: 'general',
    // this message would be sent in the set interval to all the farm servers
    farmMessage: 'spawn',
    // this cooldown is enforced after each message in guilds so the bot wouldn't get ratelimited (miliseconds)
    farmCooldown: [7000, 9000],
    // time to sleep after sending a message to all of the servers (miliseconds)
    farmSleepTime: [300000, 360000],

    // Extra wait time for clicking the button on ballsdex balls
    timeout: [500, 1000],

    // Dashboard: we have a website with a dashboard that u can create an account on and see all of the balls caught by u and autocatcher
    // the stored information is not available to public and wont be shared with anyone
    dashboardToken: '', // obtainable from autocatcher.xyz - leave empty if u dont need it
}
