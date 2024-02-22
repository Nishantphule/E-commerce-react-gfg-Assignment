import React from 'react'


export default function ProductCard({ item, id }) {
    return (
        <div className="product-card" key={id}>
            <img className="product-image"
                src={item.imageUrl}
                alt="Product" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button>Add to Cart</button>
        </div>
    )
}
