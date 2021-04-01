

import * as ptBook from './languageBooks/message.pt.json'
import * as enBook from './languageBooks/message.en.json'
const bookDeliver = async (language) => {

    switch (language){
        case 'en':
            return Promise.resolve(enBook)
        case 'pt':
            return Promise.resolve(ptBook)

    }

}

export const languageDecider = async (language) => { 
    return Promise.resolve(await bookDeliver(language));

}