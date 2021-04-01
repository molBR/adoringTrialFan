
import {noContextImpl} from "./impl/noContext.impl"
import {helpContextImpl} from "./impl/helpContext.impl"
import {languageChangeContextImpl} from "./impl/languageChangeContext.impl"
import {createVotationtImpl} from './impl/createVotation.impl'
import { changeNameContextImpl } from "./impl/changeNickName.impl"
const contextIntp = () => {
    
    return {
        "none": noContextImpl,
        "help": helpContextImpl,
        "language": languageChangeContextImpl,
        "createVotation" : createVotationtImpl,
        "changeName" : changeNameContextImpl
    }


}


export const contextRunner = async (message, guildState, command, args) => {

    const contextInstance = contextIntp();
    if(contextInstance[command] == null) command = "none"
    await contextInstance[command](message,guildState, args)
}

