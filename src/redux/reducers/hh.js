const tray2 = (state = 0, action) => {
    switch (action.type) {
        case "min":
            return state - 1;
        default:
            return state;
    }
}
export default tray2;