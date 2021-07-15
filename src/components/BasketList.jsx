import { useContext } from "react";
import { ShopContext } from "../context";
import BasketItem from "./BasketItem";

function BasketList() {
    const { order, handleShowBasket } = useContext(ShopContext)
    
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity 
    }, 0)

    return (
        <ul className="collection">
            <li  className="collection-item active #b388ff deep-purple accent-1">Корзина <i className="material-icons right" onClick={() => {handleShowBasket()}}>close</i></li>
            {
                order.map(orderItem => {
                    return <BasketItem key={orderItem.name} {...orderItem}/>
                })
            }
            <li className="collection-item active #b388ff deep-purple accent-1">Итого: { totalPrice }$</li>
        </ul>
    )
}

export default BasketList;