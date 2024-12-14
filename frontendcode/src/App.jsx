import './App.css'
import { Routes, Route } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Header from './components/header'
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NewProduct from './pages/NewProduct';
import Signup from './pages/Signup';

function App() {

  return (
    <>
      <Toaster />
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="newproduct" element={<NewProduct />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </div>

    </>
  )
}

export default App
