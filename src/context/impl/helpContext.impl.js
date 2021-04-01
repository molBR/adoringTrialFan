import {languageDecider} from '../../language/laguageDecider'

export const helpContextImpl = async (message, guildState) =>{

    let messageClient = await (await languageDecider(guildState.language)).MESSAGE_HELP
    message.reply(JSON.parse(JSON.stringify(messageClient)))
}