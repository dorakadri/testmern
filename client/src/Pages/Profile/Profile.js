import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector((state)=> state.AuthReducer.user)
  console.log(user) 
  return (
    <div>
      <h1>Profile</h1>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
      <Card.Body>
        <Card.Title>Name: {user && user.name}</Card.Title>
        <Card.Text>Email: {user && user.email}</Card.Text>
        <Card.Text>Phone: {user && user.phone}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profile