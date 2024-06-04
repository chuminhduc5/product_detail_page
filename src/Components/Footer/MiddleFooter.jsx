import React from "react";
import logo from '../../assets/images/logo-hacom-compressed (1).jpg'
import '../../Styles/Footer/MiddleFooter.css'
import logoFB from '../../assets/images/FaceBookIcon.webp'
import logoYoutube from '../../assets/images/iconYoutube.webp'
import logoLinked from '../../assets/images/iconLinkedin.webp'
import logoTiktok from '../../assets/images/iconTiktok.webp'
import logoDMCA from '../../assets/images/dmca_logo 1.webp'
import logoGov from '../../assets/images/Gov.webp'
import {Telephone, Envelope} from "react-bootstrap-icons"

function MiddleFooter() {
    return (
        <div className="middle-footer">
            <div className="about">
                <a href="http://web-dev.hacom.vn:8086/">
                    <img src={logo} alt="Hacom" />
                </a>
                <ul>
                    <li>Về chúng tôi</li>
                    <li>Liên hệ hợp tác kunh doanh</li>
                    <li>Tuyển dụng nhân sự</li>
                    <li>Tin tức công nghệ</li>
                    <li>Tin tức</li>
                </ul>
            </div>
            <div className="support">
                <ul> Hỗ trợ
                    <li>Xây dựng cấu hình</li>
                    <li>Tra cứu đươn hàng</li>
                    <li>Hướng dẫn mua hàng trực tuyến</li>
                    <li>Hướng dẫn thanh toán</li>
                    <li>Hướng dẫn mua hàng trả góp</li>
                    <li>In hóa đơn điện tử</li>
                    <li>Bảng giá vật tư</li>
                    <li>Góp ý, khiếu nại</li>
                </ul>
            </div>
            <div className="policy">
                <ul> Chính sách
                    <li>Chính sách, quy định chung</li>
                    <li>Chính sach giao hàng</li>
                    <li>Chính sách bảo hành</li>
                    <li>Chính sách cho doanh nghiệp</li>
                    <li>Chính sách hàng chính hãng</li>
                    <li>Bảo mật thông tin khách hàng</li>
                    <li>Chính sách nhập lại tính phí</li>
                </ul>
            </div>
            <div className="contact">
                <span>Kết nối</span>
                <p><Telephone className="icon telephone"/>Hotline:<span>1900 1903</span></p>
                <p><Envelope className="icon envelope"/>Email:<a href="">info@hacom.vn</a></p>
                <div className="social-media">
                    <a href="">
                        <img src={logoFB} alt="Facebook" />
                    </a>
                    <a href="">
                        <img src={logoYoutube} alt="Youtube" />
                    </a>
                    <a href="">
                        <img src={logoLinked} alt="Linked" />
                    </a>
                    <a href="">
                        <img src={logoTiktok} alt="Tiktok" />
                    </a>
                </div>
                <div className="certification">
                    <a href="">
                        <img src={logoDMCA} alt="logoDMCA" />
                    </a>
                    <a href="">
                        <img src={logoGov} alt="logoGov" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MiddleFooter;