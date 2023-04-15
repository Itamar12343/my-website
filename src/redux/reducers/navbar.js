const initial = {
    home: false,
    about: false,
    contact: false,
    projects: false
}

const navbar = (state = initial, action) => {
    if (action.type === "about") {
        let newObject = {};
        for (let key in state) {
            newObject[key] = state[key];
        }
    }
    if (action.type === undefined) {
        return {
            state
        }
    }
}

export default navbar;