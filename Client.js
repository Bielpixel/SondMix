const Discord = require('discord.js');
const token = require('./json/token.json')
const client = new Discord.Client();
const SondMix = require('./Music/src/SondMix.js');
const bot = new SondMix({
    botPrefix:"s.",
    ytApiKey:"AIzaSyAIBEppMcUFtTpXI8M9jWD0fK71Vr0pw5M",
    botClient: client
})
client.on('message', message =>{
    if(message.content.startsWith(bot.prefix)){
        bot.onMessage(message)
    }
});

client.on("ready", () => {
    console.log(`Tocando em ${client.guilds.cache.size} Servidores, ${client.channels.cache.size} canais.`)
    let activities = [
        `Use s.`,
        `Tocando em ${client.guilds.cache.size} servidores.`,
        `${client.channels.cache.size} canais.`,
    ],
        i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ %
        activities.length]}`, {
        type: "PLAYING"
    }), 5000);//WATCHING, LISTENING, PLAYING, STREAMING
    client.user.setStatus("idle")
});
client.on("guildCreate", guild => {
    console.log(`O bot entro nos servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} menbros`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});
client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});
client.login(token.token)