
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom'

import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import ShopIntroduce from './Pages/ShopIntroduce';
import LoginSignup from './Pages/LoginSignup';
import Home from './Pages/Home';
import background from './Components/Assets/Background.png'



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sanpham' element={<ShopCategory banner={background} />}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/gioithieu' element={<ShopIntroduce banner={background} category="gioithieu"/>}/>
        <Route path='/khuyenmai' element={<ShopIntroduce banner={background} category="khuyenmai"/>}/>
        <Route path='/tintuc' element={<ShopIntroduce banner={background} category="tintuc"/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
