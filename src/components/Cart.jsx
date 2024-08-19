// src/components/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();

  const handleIncrease = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: { id } });
  };

  const handleDecrease = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: { id } });
  };

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  const totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="Cart">
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.items.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>
                <button onClick={() => handleDecrease(item.id)}>-</button>
                {item.quantity}
                <button onClick={() => handleIncrease(item.id)}>+</button>
              </td>
              <td>${item.price * item.quantity}</td>
              <td>
                <button onClick={() => handleRemove(item.id)} style={{ backgroundColor: 'red' }}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        <h2>Total Quantity: {totalQuantity}</h2>
        <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
