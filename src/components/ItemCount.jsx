import React, { useState } from 'react'

const ItemCount = ({ stock, onAdd, initial }) => {
    const [count, setCount] = useState(initial)
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const onAddHandler = () => {
        onAdd(count)
    }

    return (
        <div className='count-contain'>
            <div className='count-btns'>
                <button className='btn btn-danger' onClick={restar}>-</button>
                <span className='btn'>{count}</span>
                <button className='btn btn-success' onClick={sumar}>+</button>
            </div>
            <button className='btn btn-primary' onClick={onAddHandler} disabled={count === 0}>Comprar</button>
        </div>
    )
}

export default ItemCount
