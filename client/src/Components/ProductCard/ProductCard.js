import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { deleteProduct, editProduct } from '../../JS/Actions/ProductActions';


const ProductCard = ({product}) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
    <Card className='cardss' style={{ width: '18rem' }}>
      <Card.Img className='img' variant="top" src="https://www.jetsetmagazine.net/__admin/__admin_medias/modules/listes/article_2377/diaporama/Guerlain_Eau_De_Parfum_Cherry_Blossom_2022.jpg" />
      <Card.Body className='list'>
        <Card.Title className='title'>{product.name}</Card.Title>
        <Card.Text className='des'>{product.description}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
        <Button variant="dark">Buy</Button>
        <Button variant="success" onClick={() => navigate(`/edit_product/${product._id}`)} > edit</Button>
        <Button variant="danger" onClick={handleShow} >delete</Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this Product ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => {dispatch(deleteProduct(`${product._id}`))}}>
            Delete
          </Button>
          <Button variant="danger" onClick={() => {dispatch(editProduct(`${product._id}`))}}>
            Edit
          </Button>
          
        





        </Modal.Footer>
      </Modal>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProductCard