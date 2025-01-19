import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import NotFound from './components/notfound'
import Shop from './components/shop'
import Cart from './components/cart'
import Navbar from './layout/navbar'
import {ShopContextProvider} from './context/shopContext'
import Welcome from './assets/welcome'
import About from './components/about'
import Contact from './components/contact'
import Footer from './layout/footer'


function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Welcome />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </>
  )
}

export default App;