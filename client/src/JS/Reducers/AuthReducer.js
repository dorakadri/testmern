import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../ActionTypes/ActionTypes"


// initialState
const initialState = {
    user: null,
    loadUser: false,
    errors: null,
    isAuth: false
}

// pure function
const AuthReducer = (state= initialState, {type, payload}) => {
    switch (type) {
        case LOAD_USER:
            return{...state, loadUser: true}
        
        case REGISTER_USER:
            localStorage.setItem('token', payload.token)
            return{...state, loadUser: false, user: payload.newUser, isAuth: true}
    
        case LOGIN_USER:
            localStorage.setItem('token', payload.token)
            return{...state, loadUser: false, user: payload.foundUser, isAuth: true}

        case CURRENT_USER:
            return{...state, user: payload, loadUser: false, isAuth: true}

        case LOGOUT_USER:
            localStorage.removeItem('token')
            return{...state, loadUser: false, isAuth: false, user: null, errors: []}

        case FAIL_USER:
            return{...state, errors: payload.msg}

        default:
            return state
    }
}

export default AuthReducer