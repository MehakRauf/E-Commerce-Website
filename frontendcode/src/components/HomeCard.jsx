import React from 'react';
import './HomeCard.css'

const HomeCard = ({ name, image, price, category }) => {
    return (
        <div className="home-card">
            <div className="home-card-image">
                <img src={image} alt={name} />
            </div>
            <h3 className="home-card-name">{name}</h3>
            <p className="home-card-category">{category}</p>
            <p className="home-card-price"><span>Rs </span>{price}</p>
        </div>
    );
};

export default HomeCard;
