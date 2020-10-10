import FR from './langage/fr.json';
import EN from './langage/en.json';

export const showContentByCountry = (language, key) => {
    switch (language) {
        case 'FR':
            return FR[key]
        case 'EN':
            return EN[key]
        default:
            return 'error'
    }
}
