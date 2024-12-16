import React from 'react'
import './Home.css'
import '../../src/index.css'
import HomeCard from '../components/HomeCard'
import Card from '../components/Card'
import { useSelector } from 'react-redux'

const Home = () => {
  const data = useSelector(state => state.product.productList);
  const homeData = data.slice(2, 5);
  const vegetableData = homeData.filter(el => el.category == "Vegetables", []);

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
          <button>Order now</button>
        </div>
        <div className='main3'>
          {homeData[0] && homeData.map(el => {
            return (
              <HomeCard
                key={el._id}
                name={el.name}
                image={el.image}
                price={el.price}
                category={el.category}
              />
            )
          })}
        </div>
      </div>
      <div>
        <p>Fresh Vegetables!</p>
        {
          vegetableData[0] && vegetableData.map(el => {
            return (<Card
              key={el._id}
              name={el.name}
              image={el.image}
              price={el.price}
            />)
          })}
      </div>
    </>
  )
}

export default Home