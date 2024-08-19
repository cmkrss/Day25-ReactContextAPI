// src/App.jsx
import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import './index.css';

const App = () => {
  return (
    <CartProvider>
      <div className="App">
      <Cart />
        <ProductList />
        
      </div>
    </CartProvider>
  );
};

export default App;
