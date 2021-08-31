const isLogged = (state = false, action) => {
    switch (action.type) {
        case 'LOGIN':
            return true;
        case 'LOGOUT':
            return false;
        default:
            return state;
    }
}
//returns state based on the passed action type

export default isLogged;