import AuthReducer from "./AuthReducer"
import ProductReducer from "./ProductReducer"
import {combineReducers} from 'redux'


const rootReducer = combineReducers({AuthReducer, ProductReducer})

export default rootReducer