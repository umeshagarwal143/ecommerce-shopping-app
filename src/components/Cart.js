import React from 'react';
import './cart.css';

function Cart({ cart, handleRemoveFromCart, handleUpdateQuantity }) {
  const conversionRate = 74.5; // Conversion rate from dollars to rupees

  const getTotalAmount = () => {
    const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    return (totalAmount * conversionRate).toFixed(2);
  };

  const handleRemoveClick = (product) => {
    handleRemoveFromCart(product);
  };

  const handleQuantityChange = (product, newQuantity) => {
    handleUpdateQuantity(product, newQuantity);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cart.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <div>{product.title}</div>
              <div>₹{(product.price * conversionRate).toFixed(2)}</div>
              <div>
                Quantity:
                <button
                  onClick={() => handleQuantityChange(product, product.quantity - 1)}
                  disabled={product.quantity <= 1}
                >
                  -
                </button>
                <span>{product.quantity}</span>
                <button onClick={() => handleQuantityChange(product, product.quantity + 1)}>+</button>
              </div>
              <button onClick={() => handleRemoveClick(product)}>Remove from Cart</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total Amount: ₹{getTotalAmount()}</p>
    </div>
  );
}

export default Cart;
