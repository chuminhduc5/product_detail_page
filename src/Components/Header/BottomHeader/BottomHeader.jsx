import React from "react";
import '../../../Styles/Header/BottomHeader.css'
import logo from '../../../assets/images/logo-hacom-compressed (1).jpg'
import { PcDisplay, PersonCircle, Cart3  } from "react-bootstrap-icons";

function BottomHeader(){
    return (
        <div className="header-container">
            <div class="header-content">
                <div className="header-logo">
                    <a href="http://web-dev.hacom.vn:8086/">
                        <img src={logo} alt="Hacom" />
                    </a>
                </div>


                <div className="header-search">
                    <input type="text" placeholder="Nhập tên sản phẩm cần tìm" />
                    <button>
                        <i className="bi bi-search"></i>
                    </button>
                </div>


                <div className="header-icons">
                    <div className="icon">
                        <PcDisplay/>
                    </div>
                    <div className="icon">
                        <PersonCircle/>
                    </div>
                    <div className="icon cart">
                       <Cart3/>
                        <span className="cart-count">0</span>
                    </div>
                    <div className="price">
                        <span>Giỏ hàng</span>
                        <span>0đ</span>
                    </div>
                </div>
            </div>
            <div class="header-inline"></div>
        </div>
    )
}

export default BottomHeader;