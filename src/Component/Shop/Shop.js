import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import Item from '../Item/Item';
import Cart from '../Cart/Cart';
import './Shop.css';
import { isElementOfType } from 'react-dom/test-utils';

const Shop = () => {
    const [course, setCourse] = useState(fakeData);
    const [cart, setCart] = useState([]);
    const handleClicked = (data)=> {
        const newCart = [...cart, data];
        setCart(newCart);
        console.log(data);
    }
    return (
        <div className="row">
            <div className="col-12 col-sm-12 col-md-8">
            {    
                course.map(eachCourse => <Item item={eachCourse} handleClicked={handleClicked} key={eachCourse.id}></Item>)    
            }
            </div>
            <div className="col-12 col-sm-12 col-md-4">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
export default Shop;