
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom'

import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import ShopIntroduce from './Pages/ShopIntroduce';
import LoginSignup from './Pages/LoginSignup';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import ShopInformation from './Pages/ShopInformation';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sanpham' element={<ShopCategory category="men"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/gioithieu' element={<ShopInformation/>}/>
        <Route path='/khuyenmai' element={<ShopIntroduce category="khuyenmai"/>}/>
        <Route path='/tintuc' element={<ShopIntroduce category="tintuc"/>}/>
        <Route path='/lienhe' element={<Contact/>}/>
        <Route path='/taikhoan' element={<LoginSignup/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
