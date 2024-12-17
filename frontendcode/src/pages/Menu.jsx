import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/productSlice';
import '../../src/index.css';
import './Menu.css';

const Menu = () => {
  const { filterby } = useParams();
  const productDetails = useSelector(state => state.product.productList);
  const filteredData = productDetails.filter(el => el._id == filterby);

  if (filteredData.length === 0) {
    return <div className="menu-container">Product not found</div>;
  }

  const product = filteredData[0];
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(addToCart({
      name: product.name,
      category: product.category,
      _id: product.id,
      image: product.image,
      price: product.price
    }));
  }
  return (
    <div className=" main">
      <div className='menu-container'>
        <div className="menu-image-section">
          <img className="menu-image" src={product.image} alt={product.name} />
        </div>
        <div className="menu-details-section">
          <h2 className="menu-title">{product.name}</h2>
          <p className="menu-price">RS {product.price}</p>
          <p className="menu-category"><strong>Category:</strong> {product.category}</p>
          <p className="menu-description-title"><strong>Description:</strong></p>
          <p className="menu-description">{product.description}</p>
          <div className="menu-buttons">
            <button className="menu-button buy-button">Buy</button>
            <button className="menu-button cart-button" onClick={addItem}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
