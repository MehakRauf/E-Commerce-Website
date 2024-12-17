import React from 'react';
import './HomeCard.css'
import { Link } from 'react-router-dom';

const HomeCard = ({ name, image, price, category, id }) => {
    return (
        <>
            <Link to={`menu/${id}`}>
                <div className="home-card">
                    <div className="home-card-image">
                        <img src={image} alt={name} />
                    </div>
                    <h3 className="home-card-name">{name}</h3>
                    <p className="home-card-category">{category}</p>
                    <p className="home-card-price"><span>Rs </span>{price}</p>
                </div>
            </Link>
        </>
    );
};

export default HomeCard;
