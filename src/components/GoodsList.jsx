import GoodsItem from './GoodsItem' 


function GoodsList(props) {
    const { goods = [], addToBasket= Function.prototype } = props
    
    if (!goods.length) {
        return <h3>Кажется всё раскупили</h3>
    }

    return (
        <div className="goods">
            {goods.map(item => (
                <GoodsItem key={item.name} {...item} addToBasket={ addToBasket }/>
            ))}
        </div>
    )
}


export default GoodsList 