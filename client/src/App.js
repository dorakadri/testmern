import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Pages/Home/Home';
import {Routes, Route} from 'react-router-dom'
import AddProduct from './Pages/AddProduct/AddProduct';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import ProductList from './Components/ProductList/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { current } from './JS/Actions/AuthActions';
import ErrorPage from './Pages/Error/ErrorPage';
import EditProduct from './Pages/Edit/EditProduct';

function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector((state)=> state.AuthReducer.isAuth)

  useEffect(() => {
      if (localStorage.getItem('token', {})) {
      dispatch(current())
      }    
  }, [dispatch])
  
  return (
    <div className="App">
     <Navigation />

     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<ProductList /> } />
      <Route path='/add_product' element={<AddProduct />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path="/*" element={<ErrorPage />} />
      <Route path='/edit_product/:id' element={<EditProduct />} />
      {
        isAuth?
        <Route path='/profile' element={<Profile />} />
        : null
      }
      

     </Routes>
    </div>
  );
}

export default App;