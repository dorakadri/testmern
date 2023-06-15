import axios from 'axios'
import { FAIL_PRODUCT, LOAD_PRODUCT, SUCCESS_PRODUCT } from '../ActionTypes/ActionTypes'

// get all products
export const getProducts = () => async (dispatch) =>  {
    dispatch({type: LOAD_PRODUCT})
    try {
        let products = await axios.get('/api/products/get_products')
        dispatch({type: SUCCESS_PRODUCT, payload: products.data})
    } catch (error) {
        dispatch({type: FAIL_PRODUCT, payload: error.response})
    }
}

// add new product
export const addProduct = (newProduct) => async (dispatch) => {
try {
    await axios.post('/api/products/add_product', newProduct)
    dispatch(getProducts())
} catch (error) {
    dispatch({type: FAIL_PRODUCT, payload: error.response})
}
}

// delete product
export const deleteProduct = (id) => async (dispatch) => {
try {
    await axios.delete(`/api/products/delete_product/${id}`)
    dispatch(getProducts())
} catch (error) {
    dispatch({type: FAIL_PRODUCT, payload: error.response})
}
}

// edit product
export const editProduct = (id, newProduct) => async (dispatch) => {
try {
    await axios.put(`/api/products/edit_product/${id}`, newProduct)
    dispatch(getProducts())
} catch (error) {
    dispatch({type: FAIL_PRODUCT, payload: error.response})
}
}

// get one product by 
export const getOne = (id) => async (dispatch) =>  {
    dispatch({type: LOAD_PRODUCT})
    try {
        let product = await axios.get(`/api/products/get_one/${id}`)
        dispatch({type: SUCCESS_PRODUCT, payload: product.data})
    } catch (error) {
        dispatch({type: FAIL_PRODUCT, payload: error.response})
    }
}