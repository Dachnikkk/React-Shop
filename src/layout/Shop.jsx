import React, { useEffect, useState } from 'react'
import Prealoader from '../components/Preloader'
import GoodsList from '../components/GoodsList'
import Cart from '../components/Cart'
import BasketList from '../components/BasketList'
import Alert from '../components/Alert'
import { API_URL } from '../config'

function Shop() {

    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [showBasket, setShowBasket] = useState(false)
    const [alertName, setAlertName] = useState('')

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.name === item.name)

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((item, index) => {
                if (itemIndex === index) {
                    return {
                        ...item,
                        quantity: item.quantity + 1 
                    }
                } else {
                    return item
                }
            })
            setOrder(newOrder)
        }
        setAlertName(item.name)
    }
    
    const handleShowBasket = () => {
        setShowBasket(!showBasket)
    }

    const countingQuantity = (findName, func) => {
        const newOrder = order.map(item => {
            if (item.name === findName && func === '+') {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            } else if (item.name === findName && func === '-') {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            } else {
                return item
            }
        })
        setOrder(newOrder)
    }

    const removeFromBasket = (delEl) => {
        const newOrder = order.filter((el) => el.name !== delEl)
        console.log(newOrder)
        setOrder(newOrder)
    }

    const removeAlertName = () => {
        setAlertName('')
    } 
    
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
    })

    return (
        
        <main className='container content'>
            <Cart quantity={order.length} handleShowBasket={ handleShowBasket }/>
            {
                loading ? <Prealoader /> : <GoodsList goods={goods} addToBasket={ addToBasket }/>
            }
            {
                showBasket ? <BasketList order={order} handleShowBasket={handleShowBasket} countingQuantity={countingQuantity} removeFromBasket={ removeFromBasket }/> : null
            }
            {
                alertName && <Alert name={alertName} removeAlertName={removeAlertName} />
            }
        </main>

    )
}

export default Shop