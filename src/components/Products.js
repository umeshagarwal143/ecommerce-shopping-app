// Products.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './product.css';

function Products({ handleAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const conversionRate = 74.5; // Conversion rate from dollars to rupees

  const handleAddClick = (product) => {
    handleAddToCart(product);
  };

  return (
    <div>
      <h2>Products</h2>
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-title">{product.title}</div>
            <div className="product-price">₹{(product.price * conversionRate).toFixed(2)}</div>
            <button onClick={() => handleAddClick(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
}

export default Products;
