import React, { useState } from 'react';
import '../../src/index.css';
import './NewProduct.css';
import { ImagetoBase64 } from '../utility/ImagetoBase64';

const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    category: "",
  });

  const uploadImage = async (e) => {
    const base64Data = await ImagetoBase64(e.target.files[0]);
    setData({ ...data, image: base64Data });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", data);
  };

  return (
    <div className="main">
      <div className="items-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <label htmlFor="category">Category</label>
          <select
            name="category"
            value={data.category}
            onChange={(e) => setData({ ...data, category: e.target.value })}
          >
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Dosa">Dosa</option>
            <option value="Pizza">Pizza</option>
            <option value="Ice Cream">Ice Cream</option>
          </select>

          <label htmlFor="image">Image</label>
          <div className="imageContainer">
            {data.image ? <img src={data.image} alt="" className='product-image'/> : <input type="file" onChange={uploadImage} />}
          </div>

          <label htmlFor="price">Price</label>
          <input
            type="text"
            value={data.price}
            onChange={(e) => setData({ ...data, price: e.target.value })}
          />

          <label htmlFor="description">Description</label>
          <textarea
            rows={2}
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          ></textarea>

          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
