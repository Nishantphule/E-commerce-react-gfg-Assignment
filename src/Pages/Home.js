import React from 'react'
import { useProductContext } from '../Context/productsContext'
import ProductCard from '../Components/ProductCard';

export default function Home() {

    const { products } = useProductContext();
    console.log(products)
    return (
        <div id="product-container">
            {products.map((data) => (<ProductCard
                key={data.id}
                item={data}
                id={data.id}
            />))}
        </div>
    )
}
