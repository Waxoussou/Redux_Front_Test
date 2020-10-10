
// import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    langage: 'FRENCH'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "TOGGLE_LANGAGE":
            return {
                ...state,
                langage: action.payload
            };
        default:
            return state;
    }
}