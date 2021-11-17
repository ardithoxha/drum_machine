import { createStore } from "redux";
import reducer from './reducer';
import { switchBanks, switchPower,pressPad, changeVolume } from "./actionCreators";

export const store = createStore(reducer);

export const mapStateToProps = (state) => {
    return state;
}

export const mapDispatchToProps = (dispatch) => {
    return {
        switchBanks: (firstBank) => {dispatch(switchBanks(firstBank))},
        switchPower: (isOn) => {dispatch(switchPower(isOn))},
        pressPad: (i) => {dispatch(pressPad(i))},
        changeVolume: (volume) => {dispatch(changeVolume(volume))}
        }
            
}
