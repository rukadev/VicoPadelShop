import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ producto }) => {
    const onAdd = (cantidad) => {
        if (cantidad > 0) {
            alert(`Agregaste ${cantidad} producto/s al carrito `)
        }
    }
    return (
        <div className='card-contein'>
            <img src={producto.img} alt={producto.nombre} />
            <div className='card-detail'>
                <h1>Detalle del producto</h1>
                <p>Modelo {producto.nombre}</p>
                <p>Marca {producto.marca}</p>
                <p className='card-detail-precio'>${producto.precio}</p>
                <p>stock {producto.stock}</p>
                <ItemCount stock={producto.stock} onAdd={onAdd} initial= {1}/>
            </div>
        </div>
    )
}

export default ItemDetail
