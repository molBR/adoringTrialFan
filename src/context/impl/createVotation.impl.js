import {languageDecider} from '../../language/laguageDecider'
import {Discord} from "discord.js"
export const createVotationtImpl = async (message, guildState, args) =>{

    if(args.length != 2) message.channel.send((await languageDecider(guildState.language)).CREATE_VOTATION.VOTATION_ERROR)

    const getAll = (await languageDecider(guildState.language)).CREATE_VOTATION

    const getMessages = getAll.VOTATION_DAY_HOUR
    const getPlaces = getAll.TRIAL_PLACES
    const messageClient = (`${getMessages.PREFIX} ${args[0]} ${getMessages.MIDDLE} ${args[1]} ${getMessages.SUFIX}
    ${getPlaces.CRAGLORN} 
    ${getPlaces.MAW_OF_LORKAJ}
    ${getPlaces.HALLS_OF_FABRICATION}
    ${getPlaces.ASYLUM_SANCTORIUM}
    ${getPlaces.CLOUDREST}
    ${getPlaces.SUNSPIRE}
    ${getPlaces.KYNES_AEGIS}
    `)
    const messageSent = await message.channel
        .send(JSON.parse(JSON.stringify(messageClient)))
    messageSent
    .react("⚽");
    messageSent
    .react("🏀")
    messageSent
    .react("🏈")
    messageSent
    .react("⚾")
    messageSent
    .react("🥎")
    messageSent
    .react("🎾")
    messageSent
    .react("🏐")
}