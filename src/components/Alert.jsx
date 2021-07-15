import { useEffect, useContext } from 'react'
import { ShopContext } from '../context';

function Alert() {

    const { alertName, removeAlertName } = useContext(ShopContext)
    
    useEffect(() => {
        const timerId = setTimeout(() => removeAlertName(), 3000)

        return (() => clearInterval(timerId))
    // eslint-disable-next-line
    },[alertName])

    return (
        <div id="toast-container">
            <div className="toast">{ alertName } добавлено в корзину</div>
        </div>
    )
}

export default Alert;