function BasketItem(props) {
    const { name, price, quantity, countingQuantity = Function.prototype, removeFromBasket = Function.prototype } = props
    
    return (
        <li className="collection-item orderItem">
            {name}
            <button className="material-icons btn #b388ff deep-purple accent-1" onClick={() => {
                quantity > 1 ? countingQuantity(name, '-') : removeFromBasket(name)
            }}>keyboard_arrow_left</button>
            x{quantity}
            <button className="material-icons btn #b388ff deep-purple accent-1" onClick={()=> {countingQuantity(name, '+')}}>keyboard_arrow_right</button>
            {price * quantity}$
            <button className="material-icons btn right #b388ff deep-purple accent-1" onClick={() => {removeFromBasket(name)}}>close</button>
        </li>
    )
}

export default BasketItem;
