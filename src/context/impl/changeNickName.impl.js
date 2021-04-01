import {languageDecider} from '../../language/laguageDecider'

export const changeNameContextImpl = async (message, guildState, args) =>{
    const name = args.join(" ");
    let messageClient = await (await languageDecider(guildState.language)).MESSAGE_CHANGE_NAME
    message.reply(JSON.parse(JSON.stringify(messageClient + name)))
    await message.member.setNickname(name)
}