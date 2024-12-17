import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import './Home.css';
import '../../src/index.css';
import HomeCard from '../components/HomeCard';
import FilterCard from '../components/FilterCard'
import Card from '../components/Card';

const Home = () => {
  const [filterby, setFilterBy] = useState("Vegetables");
  const [filterData, setFilterData] = useState([]);
  const data = useSelector(state => state.product.productList);
  const homeData = data.slice(2, 5);
  const vegetableData = data.filter(el => el.category == "Vegetables");
  const categories = [...new Set(data.map(el => el.category))];
  const selectDiv = useRef();
  useEffect(() => {
    const updatedFilterData = data.filter(el => el.category === filterby);
    setFilterData(updatedFilterData);
  }, [filterby, data]);
  const previous = () => {
    selectDiv.current.scrollLeft -= 200;
  }

  const next = () => {
    selectDiv.current.scrollLeft += 200
  }
  return (
    <>
      <div className='main1'>
        <div className='main2'>
          <div className='delivery-container'>
            <img className="bikeIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vx2p17urjqua0INufBF3xMQxKSVqLPfKzQ&s" alt="" />
            <div>Bike Delivery!</div>
          </div>
          <div className='data-container'>
            <h1>The Fasted Delivery Service in <span>Your Home.</span></h1>
            <p>We bring the world of food to your fingertips and deliver it straight to your doorstep. Whether it's desi, continental or street food we’ve got you covered.</p>
          </div>
          <button className="order-button">Order now</button>
        </div>
        <div className='main3'>
          {homeData[0] && homeData.map(el => {
            return (
              <HomeCard
                key={el._id}
                id={el._id}
                name={el.name}
                image={el.image}
                price={el.price}
                category={el.category}
              />
            )
          })}
        </div>
      </div>
      <h2 style={{ marginLeft: "25px" }}>Fresh Vegetables</h2>
      <div className="carousel-container">
        <button className="scroll-button previous" onClick={previous}>
          <GrPrevious />
        </button>
        <div className="vegetables" ref={selectDiv}>
          {vegetableData.map(el => (
            <Card
              key={el._id}
              id={el._id}
              name={el.name}
              image={el.image}
              price={el.price}
              category={el.category}
            />
          ))}
        </div>
        <button className="scroll-button next" onClick={next}>
          <GrNext />
        </button>
      </div>
      <h2 style={{ marginLeft: "25px" }}>Available Products</h2>
      <div className="carousel-container filter" >
        {
          categories[0] && categories.map((el, index) => {
            return (
              <FilterCard key={index} category={el} onClick={() => setFilterBy(el)} />
            )
          })
        }
      </div>
      <div className='vegetables filteredData'>
        {filterData[0] && filterData.map((el) => {
          return (
            <Card
              key={el._id}
              id={el._id}
              name={el.name}
              image={el.image}
              price={el.price}
              category={el.category} />
          )
        })}
      </div>
    </>
  )
}

export default Home