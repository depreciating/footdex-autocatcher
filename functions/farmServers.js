const { Client } = require('discord.js-selfbot-v13')

/**
 * @param {Client} client 
 */
module.exports = async (client) => {
    client.user.setStatus('invisible');
    for (const server of client.config.farmServers) {
        const guilds = [...client.guilds.cache.values()].filter(sv => sv.name === server || sv.id === server)
        for (const guild of guilds) {
            const channel = guild.channels.cache.find(channel => 
                channel.type === 'GUILD_TEXT' && 
                channel.permissionsFor(guild.members.me).has('SEND_MESSAGES') &&
                channel.name === client.config.farmChannelName
            ) || guild.channels.cache.find(channel => 
                channel.type === 'GUILD_TEXT' && 
                channel.permissionsFor(guild.members.me).has('SEND_MESSAGES')
            );
            const msgs = new Array(Math.floor(Math.random() * (3 - 2 + 1)) + 2).fill('randomness huh?')
            for (const item in msgs) {
                await channel.send(makeid());
                await wait(500)    
            }
            await wait((Math.floor(Math.random() * (client.config.farmCooldown[1] - client.config.farmCooldown[0] + 1)) + client.config.farmCooldown[0]) || 30000)
        }
    }
}


function makeid() {
    const length = Math.floor(Math.random() * 11) + 10;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

/**
 * 
 * @param {Number} millisec 
 * @returns Nothing but wait
 */
function wait(millisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, millisec);
    })
}
