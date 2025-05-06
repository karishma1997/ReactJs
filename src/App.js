// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { setProducts } from './features/products/productsSlice';  
import ProductsList from './features/products/ProductsList';
import Login from './features/auth/Login';

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);  
  const userName = useSelector((state) => state.auth.user);  

  useEffect(() => {
    const fetchProducts = () => {
      const products = [
        { id: 1, title: 'Product 1', price: 20, image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg' },
        { id: 2, title: 'Product 2', price: 30, image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg' },
        { id: 3, title: 'Product 3', price: 40, image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg' },
      ];

      dispatch(setProducts(products));  // Dispatch action to set products in Redux store
    };

    fetchProducts();
  }, [dispatch]);

  console.log(userName, "isAuthenticated");

  return (
    <div>
      {!isAuthenticated ? (
        <Login />
      ) : (
        <div>
          <h2>Welcome <span style={{ color: '#4CAF50', fontWeight: 'bold' }}>{userName?.toUpperCase()}!</span> You are logged in.</h2>
          <ProductsList />
        </div>
      )}
    </div>
  );
}

export default App;
