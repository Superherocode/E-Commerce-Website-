import React, { useState } from "react";
import './Navbar.css'
import { Link } from 'react-router-dom';


import logo from '../Assets/Logo_UEH_xanh.png'
import vector1 from '../Assets/Vector_1.png'
import vector2 from '../Assets/Vector_2.png'
import vector3 from '../Assets/Vector_3.png'
import vector4 from '../Assets/Vector_4.png'
import vector5 from '../Assets/Vector_5.png'
import vector from '../Assets/Vector.png'


const Navbar = () => {

    const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="navbar1">
        <div className="navbar1-contact">
          <div>
            <img src={vector} alt="" />
            <span>Hotline: 028 7306 1976</span>
          </div>
          <div>
            <img src={vector1} alt="" />
            <span>Email: shop@ueh.edu.vn</span>
          </div>
        </div>
        <div>
          <span>Khuyến Mãi Mùa Thu Giảm Giá</span>
          <span> 50%.</span>
        </div>
        <div className="navbar1-3">
          <img src={vector5} alt="" />
          <span>Tiếng Việt</span>
        </div>
      </div>
      <div className="navbar2">
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-tong">
          <ul className="nav-menu">
            <li onClick={() =>{setMenu("shop")}}><Link to='/'>Trang chủ</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("gioithieu")}}><Link to='/gioithieu'>Giới thiệu</Link>{menu==="gioithieu"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("sanpham")}}>
              <div>
                <Link to='/sanpham'><span>Sản phẩm </span></Link>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              {menu==="sanpham"?<hr/>:<></>}
            </li>
            <li onClick={() =>{setMenu("khuyenmai")}}><Link to='/khuyenmai'>Khuyễn mãi</Link>{menu==="khuyenmai"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("tintuc")}}><Link to='/tintuc'>Tin tức</Link>{menu==="tintuc"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("lienhe")}}><Link to='/lienhe'>Liên hệ</Link>{menu==="lienhe"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("taikhoan")}}><Link to='/taikhoan'>Tài khoản</Link>{menu==="taikhoan"?<hr/>:<></>}</li>
          </ul>
          <div className="nav-icon">
            <img src={vector2} alt="" />
            <img src={vector3} alt="" />
            <div className="nav-count1">0</div>
            <Link to='/cart'><img src={vector4} alt="" /></Link>
            <div className="nav-count2">0</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar