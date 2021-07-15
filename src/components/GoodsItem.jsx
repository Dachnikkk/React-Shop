import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context";

function GoodsItem(props) {
    const { url, name } = props
    const { addToBasket, setLoading } = useContext(ShopContext)

    const [image, setImage] = useState('')
    const [price, setPrice] = useState(0)
    
    useEffect(function getImage() {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                setImage(data.sprites.front_default);
                setPrice(data.weight)
            }
        }).catch((err) => {
            console.error(err)
            setLoading(false)
        })
        // eslint-disable-next-line
    }, []) 
    
    return (
        <div className="row">
            <div className="col s12 m12">
                <div className="card">
                    <div className="card-image">
                        <img src={image} alt={ name }/>
                    </div>
                    <div className="card-content">
                        <span className="card-title">{name}</span>
                        <p>Это что за покемон?</p>
                    </div>
                    <div className="card-action">
                        <button className='btn #b388ff deep-purple accent-1' onClick={() => { addToBasket( name, price ) }}>Купить</button>
                        <span className='right' style={{ fontSize: '1.8rem' }}>{price}$</span>
                    </div>
                </div>
            </div>
        </div>
                
    )
}

export default GoodsItem