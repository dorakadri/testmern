import React from 'react'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {  logout } from '../../JS/Actions/AuthActions'

const Navigation = () => {
  const dispatch = useDispatch()

  const isAuth = useSelector((state) => state.AuthReducer.isAuth)


  const logoutUser = () => {
    dispatch(logout())
  }

  return (
    <div>
            <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/add_product">Add Product</Nav.Link>
            

            {
              isAuth?
              <div>
            <Link to='/profile'>
            <Button variant='light'>Profile</Button>
            </Link>

            <Button onClick={()=> logoutUser()}>Logout</Button>
              </div>
              :
              <div>
            <Link to='/login'>
            <Button>Login</Button>
            </Link>

            <Link to='/register'>
            <Button>Register</Button>
            </Link>
              </div>
            }


          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation