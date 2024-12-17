import React from 'react'
import '../../src/index.css'
import { useParams } from 'react-router-dom';

const Menu = () => {
  const { filterby } = useParams();

  return (
    <div className='main'>Menu</div>
  )
}

export default Menu