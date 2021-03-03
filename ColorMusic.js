const Discord = require('discord.js');
const token = require('./token.json'); 
const client = new Discord.Client();
const ColorMusic = require('./Music/src/ColorMusic.js');
const bot = new ColorMusic({
    botPrefix:"c!",
    ytApiKey:"AIzaSyAIBEppMcUFtTpXI8M9jWD0fK71Vr0pw5M",
    botClient: client
})
client.on('message', message =>{
    if(message.content.startsWith(bot.prefix)){
        bot.onMessage(message)
    }
});

client.on('ready', () => {
    console.log(`Logado em ${client.guilds.cache.size} servidores!`)
});
client.login(token.token)