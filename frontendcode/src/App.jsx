import './App.css'
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/header'
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NewProduct from './pages/NewProduct';
import Signup from './pages/Signup';
import { useDispatch } from 'react-redux';
import { setData } from './redux/productSlice';
import Cart from './pages/Cart';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const fetchData = await fetch("http://localhost:8080/products")
      const res = await fetchData.json();
      dispatch(setData(res));
    })()
  }, [])
  return (
    <>
      <Toaster />
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu/:filterby" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="newproduct" element={<NewProduct />} />
          <Route path="signup" element={<Signup />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>

    </>
  )
}

export default App
