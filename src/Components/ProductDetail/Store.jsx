import React, { useState } from "react";
import '../../Styles/ProductDetail/Store.css';
import { Shop, CaretDownFill, CaretUpFill} from "react-bootstrap-icons";

function Store() {
    const dataStore = [
        { location: 'Bắc Giang', quantity: 1 },
        { location: 'Hai Bà Trưng', quantity: 1 },
        { location: 'Đống Đa', quantity: 2 },
        { location: 'Cầu Giấy', quantity: 3 },
        { location: 'Hà Đông 1', quantity: 1 },
        { location: 'Long Biên', quantity: 1 },
        { location: 'Từ Sơn', quantity: 1 },
        { location: 'Thanh Trì', quantity: 1 },
        { location: 'Đông Anh', quantity: 1 },
    ];

    const [showAll, setShowAll] = useState(false);
    const defaultDisplayCount = 4;
    const [displayCount, setDisplayCount] = useState(defaultDisplayCount);

    const toggleDisplay = () => {
        if (showAll) {
            setDisplayCount(defaultDisplayCount);
        } else {
            setDisplayCount(dataStore.length);
        }
        setShowAll(!showAll);
    };

    return (
        <div className="store-container">
            <div className="store-title">
                <p><Shop className="shop"/>9 CỬA HÀNG CÓ SẴN SẢN PHẨM</p>
            </div>
            <div className="store-quantity">
                <ul>
                    {dataStore.slice(0, displayCount).map((item, index) => (
                        <li key={index}>
                            <span>Kho tổng {item.location} - Số lượng sản phẩm còn lại: <span className="quantity">{item.quantity}</span></span>
                        </li>
                    ))}
                </ul>
                <button onClick={toggleDisplay}>
                    {showAll ? 'Ẩn bớt' : 'Xem thêm 7 cửa hàng'} {showAll ? <CaretUpFill/> : <CaretDownFill/>}
                </button>
            </div>
        </div>
    );
}

export default Store;
