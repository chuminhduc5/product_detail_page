import React, { useState } from "react";
import { Star, CaretDownFill, CaretUpFill } from "react-bootstrap-icons";
import '../../Styles/ProductDetail/ProductInfomation.css';

function ProductInfomation() {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="product-infomation">
            <div className="product-name">
                <span>Laptop Acer Gaming Aspire 7 A715-76G-59MW (NH.QMYSV.001) (i5 12450H/8GB RAM/512GB...</span>
            </div>
            <div className="product-code">
                <p>Mã sản phẩm: <span>001.0001.46</span></p>
                <p>Đánh giá:
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <span>0</span>
                </p>
                <p>Bình luận<span>0</span></p>
                <p>Lượt xem<span>0</span></p>
            </div>
            <div className="specifications">
                {showDetails ? (
                    <div className="product-specifications">
                        <h3>Thông tin sản phẩm:</h3>
                        <span>- CPU: Intel Core i5 12450H</span>
                        <span>- RAM: 8GB (1x 8GB) DDR4-3200MHz (2 khe) (Tối đa 32GB)</span>
                        <span>- Ổ cứng: 512GB SSD M.2 2280 PCIe VMe</span>
                        <span>- VGA: NVIDIA GeForce RTX 2050 4GB</span>
                        <span>- Màn hình: 15.6 inch FHD IPS (1920 x 1080) Slim Benzel 144Hz; ComfyView IPS LED</span>
                        <span>- Màu: Đen</span>
                        <span>- Chất liệu: Nhôm</span>
                        <span>- OS: Windows 11 Home</span>
                    </div>
                ) : (
                    <div className="product-specifications">
                        <h3>Thông tin sản phẩm:</h3>
                        <span>- CPU: Intel Core i5 12450H</span>
                        <span>- RAM: 8GB (1x 8GB) DDR4-3200MHz (2 khe) (Tối đa 32GB)</span>
                        <span>- Ổ cứng: 512GB SSD M.2 2280 PCIe VMe</span>
                        <span>- VGA: NVIDIA GeForce RTX 2050 4GB</span>
                    </div>
                )}
                <button onClick={toggleDetails}>
                    {showDetails ? 'Ẩn bớt' : 'Xem thêm'} {showDetails ? <CaretUpFill className="icon-caret"/> : <CaretDownFill className="icon-caret"/>}
                </button>
            </div>
            <div className="promotional-price">
                <h3>Giá Khuyến mãi:</h3>
                <div className="price">
                    <span>17.990.000đ</span>
                    <span className="price-product">20.999.000₫</span>
                    <span>(Tiết kiệm 3.000.000₫ )</span>
                </div>
            </div>
        </div>
    )
}

export default ProductInfomation;
