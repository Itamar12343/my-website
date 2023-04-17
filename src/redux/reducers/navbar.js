const initial = {
    home: false,
    about: false,
    contact: false,
    projects: false
}

const navbar = (state = initial, action) => {
    if (action.type === "home") {
        let newObject = state;
        newObject.home = action.text;
        return newObject;
    }
    if (action.type === "about") {
        let newObject = state;
        newObject.about = action.text;
        return newObject;
    }
    if (action.type === "contact") {
        let newObject = state;
        newObject.contact = action.text;
        return newObject;
    }
    if (action.type === "projects") {
        let newObject = state;
        newObject.projects = action.text;
        return newObject;
    }

    return state;
}

export default navbar;