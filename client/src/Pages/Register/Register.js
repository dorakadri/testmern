import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { register } from '../../JS/Actions/AuthActions'
import {useNavigate} from 'react-router-dom'


const Register = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [newUser, setNewUser] = useState({})

  const handleChange = (e) => {
    setNewUser({...newUser, [e.target.name] : e.target.value})
  }

  const handleUser = (e) => {
    e.preventDefault()
    console.log(newUser)
    dispatch(register(newUser))
    navigate('/profile')
  }
  return (
    <div className='re'>
      <h1>Register</h1>
<Form.Group>

<Form.Label>Name</Form.Label>
<Form.Control className='na' name='name' onChange={handleChange} type='text'></Form.Control>

<Form.Label>Email</Form.Label>
<Form.Control className='em' name='email' type='email'  onChange={handleChange}></Form.Control>

<Form.Label>Password</Form.Label>
<Form.Control className='pa' name='password' type='password' onChange={handleChange}></Form.Control>

<Form.Label>Phone</Form.Label>
<Form.Control className='ph' name='phone' type='number' onChange={handleChange}></Form.Control>

<Button variant='success' onClick={handleUser}>Register</Button>

</Form.Group>
    </div>
  )
}

export default Register