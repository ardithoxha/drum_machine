import { soundArrayOne, soundArrayTwo } from "../soundcode";

const BANKSWITCH = "BANKSWITCH";
const POWERSWITCH = "POWERSWITCH";
const PADPRESS = "PADPRESS";

export const switchBanks = (firstBank) => {
    return {
        type: BANKSWITCH,
        firstBank: firstBank
    }
}

export const switchPower = (isOn) => {
    return {
        type: POWERSWITCH,
        isOn: isOn
    }
}

export const pressPad = (i) => {
    return {
        type: PADPRESS,
        url: soundArrayOne[i].url
    }
}