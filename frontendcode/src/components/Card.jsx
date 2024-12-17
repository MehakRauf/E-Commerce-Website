import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({ name, category, price, image, id }) => {
    return (
        <Link to={`menu/${id}`}>
            <div className="card">
                <div className="card-image">
                    <img src={image} alt={name} />
                </div>
                <h3>{name}</h3>
                <p>{category}</p>
                <p>RS {price}</p>
                <button>Add to Cart</button>
            </div>
        </Link>
    )
}

export default Card