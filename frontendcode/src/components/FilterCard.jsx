import React from 'react';
import { PiForkKnifeBold } from "react-icons/pi";
import './FilterCard.css'; // Make sure to import the CSS file

const FilterCard = ({ category, onClick }) => {
    return (
        <div className="filter-card" onClick={onClick}>
            <div>
                <PiForkKnifeBold className="icon" />
            </div>
            <div className="category-text">
                {category}
            </div>
        </div>
    )
}

export default FilterCard;
