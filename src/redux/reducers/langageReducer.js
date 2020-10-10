const initialState = {
    current_langage: 'EN'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "FR":
            return {
                current_langage: "FR"
            };
        case "EN":
            return {
                current_langage: "EN"
            };
        default:
            return state;
    }
}