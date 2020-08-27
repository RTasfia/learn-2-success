import React from 'react';
import './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Item = (props) => {
    const {title,price,oldPrice,img} = props.item;
    return (
        <div className="course-container row">
            <div className="col-md-6 col-lg-5 image">
                <img className="allImage" src={img} alt=""/>
            </div>
            <div className="course-info col-md-6 col-lg-7">
                <h3 className="course-title">{title}</h3>
                <p>$ {price} <del> {oldPrice}</del></p>
                <img src="https://www.weatherizationky.com/images/customer-reviews.png" alt=""/>
                <br/>
                <button className="enrollButton" onClick={()=>props.handleClicked(props.item)}><FontAwesomeIcon icon={faShoppingCart} /> Enroll Now</button>
            </div>

        </div>
        
        
    );
};

export default Item;