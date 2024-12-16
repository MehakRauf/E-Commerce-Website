import React from 'react'

const Card = ({ name, category, price, image }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
            <h3 className="home-card">{name}</h3>
            <p className="home-card">{category}</p>
            <p className="home-card"><span>Rs </span>{price}</p>
            <button>Add to cart</button>
        </div>
    )
}

export default Card