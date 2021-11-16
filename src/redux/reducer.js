import { playSound } from "../soundcode";

const defaultState = {
    firstBank: true,
    isOn: true,
    id: "Display"
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case "PADPRESS":
            playSound(action.url);
            return {id: action.id};
        case "SWITCHBANKS":
            return state;
        default:
            return state;
    }
}

export default reducer;