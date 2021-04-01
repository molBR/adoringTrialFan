const Discord = require("discord.js");
const config = require("./config.json");
import {getConnection} from './database'
import {contextRunner} from './context/context.config'


const client = new Discord.Client();
client.login(config.BOT_TOKEN);
const prefix="!atfeso"
console.log("CHATBOT IS ON")

let dbConnection = null

client.on("ready", async () => {
    client.user.setActivity("🤩 TRIALS 🤩", { type: "WATCHING"})
    dbConnection = await getConnection()
})

client.on("guildCreate", async guild => {
    console.log("Joined a new guild: " + guild.name);
    const temp = {
        guildName: guild.name,
        guildId: guild.id,
        language: "en",
        state: "neverTalked",
        contxt: "none",
        esoGuild: "neverCreated"
    }
    await dbConnection.collection("GUILDS").insert(temp)
    return
})


client.on("guildDelete", async guild => {
    console.log("Left a guild: " + guild.name);
    const query = { guildId: guild.id}
    await dbConnection.collection("GUILDS").deleteOne(query)
})
client.on("message", async message => {
    if (message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const commandBody = message.content.slice(prefix.length)
    let args = commandBody.split(' ');
    const singleCommand = args[1]
    args = args.slice(2,args.length)
    const guildId = message.channel.guild.id
    const guildState = await dbConnection.collection("GUILDS").findOne({guildId: guildId})
    await contextRunner(message, guildState, singleCommand, args)
    message.delete()

    return
})