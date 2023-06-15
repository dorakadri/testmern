import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { editProduct, getProducts } from '../../JS/Actions/ProductActions'

const EditProduct = () => {
  const dispatch = useDispatch()
  const [newProduct, setNewProduct] = useState({name: "", description: "", price: 0})
   const productToGet = useSelector(state => state.productReducer?.productToGet)
  const {id} = useParams();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewProduct({...newProduct, [e.target.name] : e.target.value})
  }
  useEffect(() => {
    dispatch(getProducts(id))
  })
  const handleEdit = () => {
    dispatch(editProduct(id, newProduct));
    navigate(-1);
  }
  return (
    <div className='edit'>
            <h1>Edit product</h1>
<Form.Label>Name</Form.Label>
<Form.Control type="text" placeholder={`${productToGet?.name}`}  name="name" value={newProduct.name} onChange={handleChange}></Form.Control>
<Form.Label>Description</Form.Label>
<Form.Control type="text" placeholder={`${productToGet?.description}`}  name="description" value={newProduct.description} onChange={handleChange}></Form.Control>

<Form.Label>Price</Form.Label>
<Form.Control type="number" placeholder={`${productToGet?.price}`}  name="price" value={newProduct.price} onChange={handleChange}></Form.Control>

<Link to='/'>
<Button className='btn' variant="primary" type="submit" onClick={handleEdit}> Edit Product</Button>
</Link>
    </div>
  )
}
export default EditProduct