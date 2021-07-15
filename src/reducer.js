function reducer(state, {type, payload}) {
    switch (type) {
        case 'REMOVE_ALERT_NAME': {
            return (
                {
                    ...state,
                    alertName: ''
                }
            )
        }
        case 'REMOVE_FROM_BASKET': {
            return (
                {
                    ...state,
                    order: state.order.filter((el) => el.name !== payload)
                }
            )
        }
        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex(orderItem => orderItem.name === payload.name)
            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1
                }
                newOrder = [...state.order, newItem]
            } else {
                newOrder = state.order.map((item, index) => {
                    if (itemIndex === index) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    } else {
                        return item
                    }
                })
            }
            return (
                {
                    ...state,
                    order: newOrder,
                    name: payload.name,
                    price: payload.price,
                    alertName: payload.name
                }
            )
        }
        case 'HANDLE_SHOW_BASKET': {
            return {
                ...state,
                showBasket: !state.showBasket
            }
        }
        case 'COUNTING_QUANTITY': {
            const newOrder = state.order.map(item => {
                if (item.name === payload.findName && payload.func === '+') {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                } else if (item.name === payload.findName && payload.func === '-') {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                } else {
                    return item
                }
            })
            return {
                ...state,
                order: newOrder
            }
        }
        case 'SET_GOODS': {
            return {
                ...state,
                goods: payload,
            }
        }
        case 'SET_LOADING': {
            return {
                ...state,
                loading: payload.status
            }
        }
        case 'SET_IMAGE': {
            return {
                ...state,
                image: payload.item
            }
        }
        case 'SET_PRICE': {
            return {
                ...state,
                price: payload.price
            }
        }
        default:
            return state;
    }
}

export default reducer