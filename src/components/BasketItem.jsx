import { useContext } from "react";
import { ShopContext } from "../context";

function BasketItem(props) {
    const {  countingQuantity, removeFromBasket} = useContext(ShopContext)
    const { name, price, quantity } = props
    return (
        <li className="collection-item orderItem">
            {name}
            <button className="material-icons btn #b388ff deep-purple accent-1" onClick={() => {
                quantity > 1 ? countingQuantity(name, '-') : removeFromBasket(name)
            }}>keyboard_arrow_left</button>
            x{quantity}
            <button className="material-icons btn #b388ff deep-purple accent-1" onClick={()=> {countingQuantity(name, '+')}}>keyboard_arrow_right</button>
            {price * +quantity}$
            <button className="material-icons btn right #b388ff deep-purple accent-1" onClick={() => {removeFromBasket(name)}}>close</button>
        </li>
    )
}

export default BasketItem;
