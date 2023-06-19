import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const updatedCart = cart.filter(item => item.id !== product.id);
    setCart(updatedCart);
  };

  const handleUpdateQuantity = (product, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(product);
    } else {
      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      setCart(updatedCart);
    }
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="nav-bar">
          <ul className="nav-links">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/products">Products</Link>
            </li>
            <li className="nav-link">
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} handleUpdateQuantity={handleUpdateQuantity} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
