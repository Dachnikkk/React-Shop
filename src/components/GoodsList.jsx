import { useContext } from "react";
import { ShopContext } from "../context";
import GoodsItem from './GoodsItem'


function GoodsList() {
    const { goods } = useContext(ShopContext)
    if (!goods.length) {
        return <h3>Кажется всё раскупили</h3>
    }

    return (
        <div className="goods">
            {goods.map(item => (
                <GoodsItem key={item.name} {...item}/>
            ))}
        </div>
    )
}


export default GoodsList 