const Discord = require('discord.js');
const token = require('./json/token.json')
const client = new Discord.Client();
const SondMix = require('./Music/src/SondMix.js');
const bot = new SondMix({
    botPrefix:"s.",
    ytApiKey:"AIzaSyAIBEppMcUFtTpXI8M9jWD0fK71Vr0pw5M",
    botClient: client
});
const prefix = "s."
client.on('message', message =>{
    if(message.content.startsWith(bot.prefix)){
        bot.onMessage(message)
    }
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;

        const cping = new Discord.MessageEmbed()
        .setTitle("Status de Conexão")
        .setDescription(`A latência é de ${timeTaken}ms.`)
        .setColor("GREEN")
        message.reply(cping);
    }
    if (command == "botinfo") {
        const timeTaken2 = Date.now() - message.createdTimestamp;
        const botinfo = new Discord.MessageEmbed()
            .setTitle("SondMix Info")
            .setColor("PURPLE")
            .setDescription(` Está em ${client.guilds.cache.size} Servidores.` )
            .addFields({
                name: 'Criado por @NULO#2872',
                value:`Criadores ${client.users.cache.size}` ,
            },
            {
                name:"Ping",
                value: `${timeTaken2}`
            },
            {
                name:"Prefix",
                value: `${prefix}`
            },
            {
                name: "versão",
                value:"2.4.1"
            },
            )
            .setFooter(client.user.username,client.user.displayAvatarURL())
            .setTimestamp();

        return message.channel.send(botinfo)
    }
});

client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm')
        return
    if (message.content == '<@789186131282493471>' || message.content == '<@!789186131282493471>') {
        const ms =new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Precisando de ajuda?")
        .setDescription("use s.help para ver os comandos")
        return message.channel.send(ms)
    }
 
});

client.on("message", async message =>{
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(fix.fix)) return;
    if (message.content.startsWith(`<@${client.user.id}>`)) return;
});

const status = require('./json/fix.json')
client.on("ready", () => {
    console.log(`Tocando em ${client.guilds.cache.size} Servidores, ${client.channels.cache.size} canais. Criadores ${client.users.cache.size} VERSAO 2.4.1`)
    let activities = [
        `Use ${status.fix}help para obter ajuda!`,
        `Tocando em ${client.guilds.cache.size} servidores.`,
        `${client.channels.cache.size} canais.`,
    ],
        i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ %
        activities.length]}`, {
        type: ""
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