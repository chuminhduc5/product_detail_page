import React, { useState } from "react";
import '../../Styles/ProductDetail/GiftBox.css';
import { Gift, CaretDownFill, CaretUpFill} from "react-bootstrap-icons";

function GiftBox() {
    const [showAllGifts, setShowAllGifts] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const toggleShowGifts = () => {
        setShowAllGifts(!showAllGifts);
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const gift = [
        { priceSale: '50.000đ', product: 'Balo, Cặp, Túi chống sốc cao cấp...' },
        { priceSale: '100.000đ', product: 'Ram Laptop thương hiệu KINGSTON' },
        { priceSale: '100.000đ', product: 'Ram Laptop thương hiệu LEXAR' },
        { priceSale: '200.000đ', product: 'Ghế công thái học thương hiệu LEGION' },
        { priceSale: '40.000đ', product: ' kèm Ổ HDD' },
        { priceSale: '500.000đ', product: 'Balo, Cặp, Túi chống sốc cao cấp...' },
        { priceSale: '100.000đ', product: 'Ram Laptop thương hiệu LEXAR' },
    ];

    const defaultDisplayCount = 4;
    const displayGifts = showAllGifts ? gift : gift.slice(0, defaultDisplayCount);

    return (
        <div className="purchase-product">
            <div className="gift-table">
                <div className="gift-content">
                    <Gift className="gift" />
                    <h3>QUÀ TẶNG VÀ ƯU ĐÃI DÀNH CHO BẠN</h3>
                </div>
                <div className="gift-box">
                    <ul>
                        {displayGifts.map((item, index) => (
                            <li key={index}>
                                <div className="number">{index + 1}</div>
                                <span>Giảm ngay <span className="price-sale">{item.priceSale}</span></span>
                                <span>khi mua {item.product}</span>
                            </li>
                        ))}
                    </ul>
                    <button onClick={toggleShowGifts} className="toggle-button">
                        {showAllGifts ? 'Ẩn bớt' : 'Xem thêm ưu đãi'} {showAllGifts ? <CaretUpFill/> : <CaretDownFill/>}
                    </button>
                </div>
            </div>
            <div className="purchase-component">
                <div className="purchase-actions">
                    <div className="quantity-section">
                        <label>Số lượng:</label>
                        <div className="handleButton">
                            <button onClick={handleIncrement}>+</button>
                            <input type="text" value={quantity} readOnly />
                            <button onClick={handleDecrement}>-</button>
                        </div>
                    </div>
                    <div className="actions">
                        <button className="add-to-cart">THÊM VÀO GIỎ</button>
                        <button className="save"><i className="bi bi-heart"></i>Lưu</button>
                    </div>
                </div>
                <button className="buy-now"><i className="bi bi-bag"></i>MUA NGAY</button>
                <div className="installment-options">
                    <button className="installment-card">TRẢ GÓP QUA THẺ<br />VISA, Master Card, AMEX</button>
                    <button className="installment-file">TRẢ GÓP HỒ SƠ<br />Duyệt nhanh trong 15 phút</button>
                </div>
            </div>
        </div>
    );
}

export default GiftBox;
