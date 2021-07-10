import { useEffect } from 'react'

function Alert(props) {
    const { name='', removeAlertName = Function.prototype } = props;

    useEffect(() => {
        const timerId = setTimeout(() => removeAlertName(), 3000)

        return (() => clearInterval(timerId))
    // eslint-disable-next-line
    },[name])

    return (
        <div id="toast-container">
            <div className="toast">{ name } добавлено в корзину</div>
        </div>
    )
}

export default Alert;