import { FAIL_PRODUCT, LOAD_PRODUCT, SUCCESS_PRODUCT } from "../ActionTypes/ActionTypes"


// initialState
const initialState = {
    listProducts : [],
    errors: null,
    load: false,
}

// pure function
const ProductReducer = (state= initialState, {type, payload}) => {
    switch (type) {
        case LOAD_PRODUCT:
            return {...state, load: true}
        
        case SUCCESS_PRODUCT:
            return {...state, load: false, listProducts: payload}

        case FAIL_PRODUCT:
            return {...state, load: false, errors: payload.errors}
            
        default:
            return state
    }
}

// export reducer
export default ProductReducer