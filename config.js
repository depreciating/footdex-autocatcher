module.exports = {
    token: "NzM5MTA5MjY1NjQ5Njk2ODQ5.GdfeBY.-HAL5UpbXQksKBxIwP8kSqf_dkm9aip9WdyjRs", // video tutorial: https://youtu.be/RlQTHTncw2Y

    // Servers u want the bot to not catch anything in
    blacklistedServers: [
        "1265677665315192864",
    ],

    // Servers u want the bot to only catch there
    // This shit will be disabled if nothing is in the list
    whitelistedServers: [
    "1097558308967166014",
    "1194249474705469451",
    "1168214136711282869",
    "1250847532372725960",
    "1262443480907645049",
    "714066486636838932",
    ],

    // The server u want the bot to send a message every hour to
    // This shit will be disabled if nothing is in the list
    farmServers: [
        "ServerNameOrID1",
        "ServerNameOrID2",
        "ServerNameOrID3"
    ],


    // This field is used to get a channel from the farm servers using their name (It will use the first channel if not provided)
    farmChannelName: 'general',
    // This cooldown is enforced after each message in guilds so the bot doesn't get ratelimited (miliseconds)
    farmCooldown: [9000, 11000],
    // Time to sleep after sending a message to all of the servers (miliseconds)
    farmSleepTime: 920000,

    // Extra wait time for clicking the button on Ballsdex balls
    timeout: [500, 1000],

    // Cooldown for sending a message after a catch. (Leave this false if you dont want to send anything). Note that this won't send a message in farm servers
    messageCooldown: [1000, 3000],

    // Table of messages to send after a catch
    messages: [
        "GG",
        "lmao",
        "nice",
        "omg",
        "ez",
        "haha",
        "real",
        "too easy",
        "baller",
        "AYY",
        "what",
        "Yaya",
        "LMAO",
        "ok",
        "snipe",
        "mobile ez",
        "Yay",
        "nahhh",
        "xd",
        "ez shi",
        "man what is this bullshi",
        "ez ball",
        "mobile btw",
        "poop",
        "ezzz",
        "cracked af",
        "lol",
        "noob",
        "W",
        ":skull:",
        ":yawning_face:",
        "no way:skull:"
    ],

    // Balls you don't want to catch
    // This shit will be disabled if nothing is in the list
    blacklistedBalls: [
    ],

    // Balls you only want to catch
    // This shit will be disabled if nothing is in the list
    whitelistedBalls: [
    ],

    // Dashboard: We have a website with a dashboard that u can create an account on and see all of the balls caught by your autocatcher
    // The stored information is not available to the public and won't be shared with anyone
    dashboardToken: '', // Obtainable from autocatcher.xyz - leave empty if u don't need it

    forceReturnBestMatch: false, // dont change this unless u know what u r doing
}
