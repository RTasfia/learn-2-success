import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';
const Cart = (props) => {
    const allCourse = props.cart;
    const total = (allCourse.reduce((total,coursePrice) => total + coursePrice.price, 0)).toFixed(2);
    return (
        <div className="order-status">
            <p><FontAwesomeIcon icon={faShoppingCart} /> <sup>{allCourse.length}</sup> </p>
            <br/>
            <h3 className="cart-heading">Order Summary</h3> 
            <br/>
            <p>Total Order: {allCourse.length}</p>
            <p>Course Title: </p>
            {
                allCourse.map(courseTitle => <p className="title-style">{courseTitle.title}</p>)
            }
            <p>Total Price: {Number(total)}</p>
        </div>
    );
};

export default Cart;