function Cart(props) {
    const { quantity = 0, handleShowBasket = Function.prototype} = props;

    return (
        <div className='cart #b388ff deep-purple accent-1' onClick={ () => handleShowBasket() }>
            <i className='material-icons'>shopping_cart</i>
            {quantity ? (
                <span className='cart-quantity'>{quantity}</span>
            ) : null}
        </div>
    );
}

export default Cart;
