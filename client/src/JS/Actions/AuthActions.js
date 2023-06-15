import axios from "axios"
import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../ActionTypes/ActionTypes"


// register user
export const register = (newUser) => async (dispatch) => {
    dispatch({type: LOAD_USER})
    console.log(newUser)
    try {
       let result = await axios.post('/api/user/register',newUser)
        console.log(result)
        dispatch({type: REGISTER_USER, payload: result.data})
    } catch (error) {
      console.log( error.response)
       dispatch({type: FAIL_USER, payload: error.response})
    }
}

// login user
export const login = (user) => async (dispatch) => {
    dispatch({type: LOAD_USER})
    try {
        let result = await axios.post('/api/user/login', user);
        dispatch({type: LOGIN_USER, payload: result.data});
    } catch (error) {
        dispatch({type: FAIL_USER, payload: error.response})
        
    }
}

// current user
export const current = () => async (dispatch) => {
    dispatch({type: LOAD_USER})
    try {
        const config = {
            headers: {authorization: localStorage.getItem('token')}
        }
        let result = await axios.get('/api/user/current', config)
        dispatch({type: CURRENT_USER, payload: result.data})
    } catch (error) {
        dispatch({type: FAIL_USER, payload: error.response})
    }
}

// logout user
export const logout = () => async (dispatch) => {
    dispatch({type: LOGOUT_USER})
}