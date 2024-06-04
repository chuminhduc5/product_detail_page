import React from "react";
import '../../Styles/Footer/BottomFooter.css'

function BottomFooter() {
    return (
        <div className="bottom-footer">
            <p>© 2021 Công ty Cổ phần đầu tư công nghệ HACOM</p>
            <p>
                <span className="address">Địa chỉ:</span> Tầng 3 Tòa nhà LILAMA, số 124 Minh Khai, Phường Minh Khai,
                Quận Hai Bà Trưng, Hà Nội
            </p>
            <p>GPĐKKD số 0101161194 do Sở KHĐT Tp.Hà Nội cấp ngày 31/8/2001</p>
            <p><span className="email">Email:</span> info@hacom.vn</p>
            <p><span className="phone">Điện thoại:</span> 1900 1903</p>
        </div>
    )
}

export default BottomFooter;