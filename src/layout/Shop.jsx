import React, { useEffect, useContext } from 'react'
import Prealoader from '../components/Preloader'
import GoodsList from '../components/GoodsList'
import Cart from '../components/Cart'
import BasketList from '../components/BasketList'
import Alert from '../components/Alert'
import { ShopContext } from '../context'
import { API_URL } from '../config'

function Shop() {

    const {loading, alertName, showBasket, setGoods, setLoading} = useContext(ShopContext)

    useEffect(function getGoods() {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                data.results && setGoods(data.results)
                setLoading(false)
            })
            .catch((err) => {
                console.error(err)
                setLoading(false)
            })
        // eslint-disable-next-line
    }, [])

    return (
        
        <main className='container content'>
            <Cart/>
            {
                loading ? <Prealoader /> : <GoodsList/>
            }
            {
                showBasket ? <BasketList/> : null
            }
            {
                alertName && <Alert/>
            }
        </main>

    )
}

export default Shop