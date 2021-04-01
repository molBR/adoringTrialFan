import {languageDecider} from '../../language/laguageDecider'

export const noContextImpl = async (message, guildState) =>{

    let messageClient = await (await languageDecider(guildState.language)).MESSAGE_ONLY_PREFIX
    message.reply(JSON.parse(JSON.stringify(messageClient)))
}