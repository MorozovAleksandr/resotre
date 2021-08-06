import React from 'react';
import './ShopHeader.css';
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className="ShopHeader row">
            <Link to="/">
                <div className="logo text-dark" href="#">ReStore</div>
            </Link>
            <Link to="/cardpage">
                <div className="ShoppingCart">
                    <i className="bi bi-cart"></i>
                    {numItems} item (${total})
                </div>
            </Link>
        </header>
    )
}


export default ShopHeader;