import React, { useState, useEffect } from "react"
import { getProducts } from "../mock/data"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = ({ greeting }) => {
    const [products, setProductus] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoria } = useParams()

    useEffect(() => {
        setLoading(true)
        getProducts()
            .then((res) => {
                if (categoria) {
                    setProductus(res.filter((prod) => prod.categoria === categoria))
                } else {
                    setProductus(res)
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [categoria])

    return (
        <div className="titleContainer">
            <h1>{greeting}</h1>
            <h2 className="span-categoria">{categoria}</h2>
            {loading ? <Spinner animation="border" role="status" variant="primary" className="spinner-container">
                <span className="visually-hidden">Loading...</span>
            </Spinner> : <ItemList products={products} />}
        </div>

    )
}

export default ItemListContainer