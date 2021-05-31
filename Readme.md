
# 🎵 Robo de Musica (Discord)

## 🔩 Instalação
```
npm isntall discord-music-system@latest
```

## 💻 Exemplo do código
```js
const Discord = require('discord.js'); // Requer discord.js
const client = new Discord.Client(); // Crie o cliente bot.
const MusicBot = require('discord-music-system'); // Requer o melhor pacote já criado no NPM (= require discord-music-system)

const bot = new MusicBot({
    botPrefix: 'algum prefix', // Exemplo: !
    ytApiKey: 'sua chave de Ytb API', // requer a Api do youtube 
    botClient: client // Seu cliente Discord. Aqui, estamos usando discord.js, então é o Discord.Client ()
});

client.on('message', message => { // Quando o bot recebe uma mensagem
    if(message.content.startsWith(bot.prefix)) { // Se a mensagem começar com o seu prefixo
        bot.onMessage(message); // O sistema de música deve ler a mensagem, para verificar se é um comando de música e executá-lo.
    };
});

client.login('some token'); // LFaça login com seu token de bot. Você pode encontrar o token em https://discord.com/developers/applications/
```

## 🚀 Linguagem
* Você pode personalizar o idioma do bot editando o `language.json` na pasta` language` (3 traduções incluídas).

## 🤖 Comandos
* **Jogar**
  * `play`, 
  * `add`, 
  * `join`
  * **+ `<search string | video URL | playlist URL>`**

* **Parar**
  * `stop`
  * `kill`
  * `destroy`
  * `leave`

* **Jogando agora**
  * `np`
  * `nowplaying`
  * `current`

* **Ignorar**
  * `skip`
  * `next`
  * `>>`

* **Lista**
  * `queue`
  * `list`
  * `show`

* **Volume**
  * `volume`
  * `setvolume`
  * **+ `<valid number beetween 0 and 100>`**

* **Pausar**
  * `pause`

* **Resumir**
  * `resume`

* **Remover**
  * `remove`
  * `delete`
  * **+ `<valid number of a song position in the queue>`**

* **Letras**
  * `lyrics`
  * **+ `<song title> || or no args if a song is playing`**


## 🚀 Outros
** Este pacote está sob licença do Apache License. **

* Nota: Este pacote não é afiliado ao Discord ou YouTube. *


## **feito por Biel**
 
 ```
 Depois de instalar o código no terminal digite npm i discord.js -S e npm i discord-music-system@latest Entre no site http://discord.com/developers/applications/ e crie uma Aplicação, clique em bot e adicionar bot pegue o token e crie um arquivo token.json.
 
 exemplo: {"token":"xxxxxxxx.xxxxxxXxxx"}
 ```
