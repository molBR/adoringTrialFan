import {languageDecider} from '../../language/laguageDecider'
import {getConnection} from '../../database'
const supportedLanguages = ["pt", "en"]




export const languageChangeContextImpl = async (message, guildState, args) =>{
    const firstArg = args[0]
    if(!supportedLanguages.includes(firstArg)){
        const messageClient = (await languageDecider(guildState.language)).MESSAGE_LANGUAGE.MESSAGE_LANGUAGE_NOSUPPORT; 
        message.reply(JSON.parse(JSON.stringify(messageClient)))
        return
    }
    guildState.language = firstArg
    const conn = await getConnection()
    await conn.collection("GUILDS").updateOne({guildId: guildState.guildId}, {$set : guildState})
    const messageClient = (await languageDecider(guildState.language)).MESSAGE_LANGUAGE.MESSAGE_LANGUAGE_CHANGE
    message.reply(JSON.parse(JSON.stringify(messageClient)))
}