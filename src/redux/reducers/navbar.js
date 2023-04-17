const initial = {
    home: false,
    about: false,
    contact: false,
    projects: false
}

const navbar = (state = initial, action) => {
    switch (action.type) {
        case "about":
            let newObject = state;
            newObject.about = action.text;
            return newObject;
        default:
            return state;
    }
}

export default navbar;