const defaultState = {
    firstBank: true,
    isOn: true
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case "SWITCHBANKS":
            return state;
        default:
            return state;
    }
}

export default reducer;