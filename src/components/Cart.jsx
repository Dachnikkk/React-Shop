import { useContext } from "react";
import { ShopContext } from "../context";

function Cart() {

    const {order, handleShowBasket} = useContext(ShopContext)

    const length = order.length
    
    return (
        <div className='cart #b388ff deep-purple accent-1' onClick={ () => handleShowBasket() }>
            <i className='material-icons'>shopping_cart</i>
            {length ? (
                <span className='cart-quantity'>{length}</span>
            ) : null}
        </div>
    );
}

export default Cart;
