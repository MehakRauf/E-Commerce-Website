import React from 'react'
import './Card.css'

const Card = ({ name, category, price, image }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
           <h3>{name}</h3>
           <p>{category}</p>
           <p>RS {price}</p>
           <button>Add to Cart</button>
        </div>
    )
}

export default Card