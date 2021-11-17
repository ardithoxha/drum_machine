import { playSound, soundArrayOne, soundArrayTwo } from "../soundcode";


const defaultState = {
    firstBank: true,
    isOn: true,
    id: "",
    volume: 100
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case "PADPRESS":
            
            if(state.isOn) {
                const arr = state.firstBank ? soundArrayOne : soundArrayTwo;
                const soundDetail = arr.find(s => s.letter == action.letter);

                playSound(soundDetail.url,state.volume);
            
                return {
                    firstBank: state.firstBank,
                    isOn: state.isOn, 
                    id: soundDetail.id,
                    volume: state.volume
                };
            } else {
                return {
                    firstBank: state.firstBank,
                    isOn: state.isOn, 
                    id: "Power is turned off",
                    volume: state.volume
                };
            }
        case "POWERSWITCH":
            
            return {
                firstBank: state.firstBank,
                isOn: !state.isOn, 
                id: (!state.isOn ? "Power is on": "Power is Off"),
                volume: state.volume
            };
        case "BANKSWITCH":
            
            return {
                firstBank: !state.firstBank,
                isOn: state.isOn, 
                id: "Switched Banks",
                volume: state.volume
            };
        case "VOLUME":
            return {
                volume: action.volume,
                firstBank: state.firstBank,
                isOn: state.isOn, 
                id: "Volume: " + action.volume
            }
        default:
            return state;
    }
}

export default reducer;