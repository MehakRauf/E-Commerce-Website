import React from 'react';
import '../../src/index.css';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, deleteFromCart } from '../redux/productSlice';
import empty from '../assets/empty.gif'
import './Cart.css';

const Cart = () => {
    const dispatch = useDispatch();
    const cartData = useSelector(state => state.product.cartItems);
    console.log(cartData);

    let totalAmount = 0, totalQty = 0;
    const calculateData = () => {
        for (let i = 0; i < cartData.length; i++) {
            totalAmount += parseInt(cartData[i].total);
            totalQty += 1;
        }
        console.log(totalAmount, " ", totalQty);
    }
    calculateData();
    return (
        <div className='main'>
            <div className="cart-container">
                {cartData.length === 0 ? (
                    <>
                        <p className="cart-empty">Your cart is empty!</p>
                        <img src={empty} style={{ height: "400px" }} alt="" />
                    </>
                ) : (
                    cartData.map((el) => (
                        <div key={el._id} className="cart-item">
                            <div className="cart-item-image">
                                <img src={el.image} alt={el.name} />
                            </div>
                            <div className="cart-item-details">
                                <h2 className="cart-item-title">{el.name}</h2>
                                <p className="cart-item-price">PRICE: RS {el.price}</p>
                                <p className="cart-item-category">
                                    <strong>Total:</strong> RS {el.total}
                                </p>
                                <div className="cart-item-quantity">
                                    <button className="cart-item-button increment" onClick={() => dispatch(increaseQty(el._id))}>+</button>
                                    <p className="cart-item-qty">{el.qty}</p>
                                    <button className="cart-item-button decrement" onClick={() => dispatch(decreaseQty(el._id))}>-</button>
                                </div>
                                <button className='cart-item-button delete' onClick={() => dispatch(deleteFromCart(el._id))}>Remove Item</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {cartData.length >= 1 &&
                <div className="order-summary-container">
                    <h2 className="order-summary-title">Order Summary</h2>
                    <form className="order-summary-form">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input type="text" id="address" placeholder="Enter your complete address" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="text" id="phone" placeholder="Enter phone number" />
                        </div>
                        <div className="order-summary-details">
                            <p><strong>Total Qty:</strong> {totalQty}</p>
                            <p><strong>Total Amount:</strong> {totalAmount}</p>
                        </div>
                        <button type="button" className="place-order-button">Place Order</button>
                    </form>
                </div>
            }

        </div>
    );
};

export default Cart;
