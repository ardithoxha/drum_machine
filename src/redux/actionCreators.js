import { soundArrayOne, soundArrayTwo } from "../soundcode";

const BANKSWITCH = "BANKSWITCH";
const POWERSWITCH = "POWERSWITCH";
const PADPRESS = "PADPRESS";
const VOLUME = "VOLUME";

export const switchBanks = () => {
    return {
        type: BANKSWITCH,
    }
}

export const switchPower = (isOn) => {
    return {
        type: POWERSWITCH,
        isOn: !isOn
    }
}

export const pressPad = (letter) => {
    return {
        type: PADPRESS,
        letter: letter
    }
}

export const changeVolume = (volume) => {
    return {
        type: VOLUME,
        volume: volume
    }
}