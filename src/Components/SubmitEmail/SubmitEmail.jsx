import React from "react";
import '../../Styles/SubmitEmail/SubmitEmail.css'

function SubmitEmailComponent(){
    return(
        <div className="register-component">
            <h3>ĐĂNG KÝ NHẬN EMAIL THÔNG BÁO KHUYẾN MẠI HOẶC ĐỂ ĐƯỢC TƯ VẤN MIỄN PHÍ</h3>
            <div className="register-input">
                <input type="text" placeholder="Nhập email của bạn"/>
                <button className="register-button">
                    Gửi
                </button>
            </div>
        </div>
    )
}

export default SubmitEmailComponent;