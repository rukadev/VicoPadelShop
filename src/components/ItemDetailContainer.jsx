import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        getOneProduct(id)
            .then((res) => setProducto(res))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [])
    return (
        <div className="titleContainer">
            {loading ? <Spinner animation="border" role="status" variant="primary" className="spinner-container">
                <span className="visually-hidden">Loading...</span>
            </Spinner> : <ItemDetail producto={producto} />}
        </div>
    )
}

export default ItemDetailContainer
