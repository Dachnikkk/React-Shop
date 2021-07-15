import { createContext, useReducer } from 'react';
import reducer from './reducer'

export const ShopContext = createContext()

export const ContextProvider = ({ children }) => {
    const initialState = {
        goods: [],
        loading: true,
        order: [],
        showBasket: false,
        alertName: '',
        name: '',
        price: 0
    }

    const [value, dispatch] = useReducer(reducer, initialState)

    value.removeAlertName = () => {
        dispatch({ type: 'REMOVE_ALERT_NAME' })
    }

    value.removeFromBasket = (delEl) => {
        dispatch({ type: 'REMOVE_FROM_BASKET', payload: delEl })
    }

    value.addToBasket = (name, price) => {
        dispatch({ type: 'ADD_TO_BASKET', payload: {name, price} })
    }

    value.handleShowBasket = () => {
        dispatch({ type: 'HANDLE_SHOW_BASKET' })
    }
 
    value.countingQuantity = (findName, func) => {
        dispatch({ type: 'COUNTING_QUANTITY', payload: {findName, func} })
    }

    value.setGoods = (goods) => {
        dispatch({ type: 'SET_GOODS', payload: goods})
    }

    value.setLoading = (status) => {
        dispatch({ type: 'SET_LOADING', payload: status})
    }

    value.setImage = (item) => {
        dispatch({ type: 'SET_IMAGE', payload: item})
    }

    value.setPrice = (price) => {
        dispatch({ type: 'SET_PRICE', payload: price})
    }

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    )
}

