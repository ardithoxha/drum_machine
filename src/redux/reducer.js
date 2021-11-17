import { playSound, soundArrayOne, soundArrayTwo } from "../soundcode";


const defaultState = {
    firstBank: true,
    isOn: true,
    id: ""
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case "PADPRESS":
            
            if(state.isOn) {
                const arr = state.firstBank ? soundArrayOne : soundArrayTwo;
                const soundDetail = arr.find(s => s.letter == action.letter);
                playSound(soundDetail.url);
            
                return {
                    firstBank: state.firstBank,
                    isOn: state.isOn, 
                    id: soundDetail.id
                };
            } else {
                return {
                    firstBank: state.firstBank,
                    isOn: state.isOn, 
                    id: "Power is turned off"
                };
            }
        case "POWERSWITCH":
            
            return {
                firstBank: state.firstBank,
                isOn: !state.isOn, 
                id: (!state.isOn ? "Power is on": "Power is Off")
            };
        case "BANKSWITCH":
            
            return {
                firstBank: !state.firstBank,
                isOn: state.isOn, 
                id: "Switched Banks"
            };
        default:
            return state;
    }
}

export default reducer;