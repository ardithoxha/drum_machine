const BANKSWITCH = "BANKSWITCH";
const POWERSWITCH = "POWERSWITCH";

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