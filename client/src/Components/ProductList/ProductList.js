import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../../JS/Actions/ProductActions'
import ProductCard from '../ProductCard/ProductCard'

const ProductList = () => {
  const listProducts = useSelector((state) => state.ProductReducer.listProducts)
  const load = useSelector((state) => state.ProductReducer.load)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  
  return (
    <div>
{
  load? (<h2>Loading...</h2>)
  : listProducts? listProducts.map((el) => (

    <ProductCard product={el} key={el._id} />
    
  )) 
  : <h3>No products to display...</h3>
}
    </div>
  )
}

export default ProductList