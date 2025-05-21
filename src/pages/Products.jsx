import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {
    const value = useSelector((state) => state.products)
    const dispatch = useDispatch()
    console.log('fvalue', value);

    return (
        <div>Products</div>
    )
}

export default Products