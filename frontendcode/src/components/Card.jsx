import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/productSlice'
import './Card.css'

const Card = ({ name, category, price, image, id }) => {
    const dispatch = useDispatch();
    const addItem = () => {
        dispatch(addToCart({
            name: name,
            category: category,
            _id: id,
            image: image,
            price: price
        }));
    }
    return (
        <div className="card">
            <Link to={`menu/${id}`}>
                <div className="card-image">
                    <img src={image} alt={name} />
                </div>
                <h3>{name}</h3>
                <p>{category}</p>
                <p>RS {price}</p>
            </Link>
            <button onClick={addItem}>Add to Cart</button>
        </div>
    )
}

export default Card