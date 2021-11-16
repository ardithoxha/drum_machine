import { playSound } from "../soundcode";

const defaultState = {
    firstBank: true,
    isOn: true
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case "PADPRESS":
            playSound(action.url)
            return state;
        case "SWITCHBANKS":
            return state;
        default:
            return state;
    }
}

export default reducer;