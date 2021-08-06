import React from 'react';
import { connect } from 'react-redux';
import { allBookRemovedFromCart, bookAddedToCart, bookRemovedFromCart } from '../../actions/index'
import './ShoppingCartTable.css'

const ShoppingCartTable = ({ items, total, onIcrease, onDecrease, onDelete }) => {

    const renderRow = (item, index) => {
        const { id, title, count, total } = item;
        return (
            <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button onClick={() => { onDelete(id) }} className="btn btn-outline-danger btn-small">
                        <i className="bi bi-trash"></i>
                    </button>
                    <button onClick={() => { onIcrease(id) }} className="btn btn-outline-success btn-small">
                        <i className="bi bi-bag-plus"></i>
                    </button>
                    <button onClick={() => { onDecrease(id) }} className="btn btn-outline-warning btn-small">
                        <i className="bi bi-shield-minus"></i>
                    </button>
                </td>
            </tr>
        )
    }

    return (
        <div className="ShoppingCartTable">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Count</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(renderRow)
                    }
                </tbody>
            </table>

            <div className="total">
                Total: ${total}
            </div>
        </div>
    )
}

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = {
    onIcrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBookRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);