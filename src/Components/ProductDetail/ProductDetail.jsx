import React from "react";
import '../../Styles/ProductDetail/ProductDetail.css'
import ProductInfomation from './ProductInfomation.jsx'
import Store from './Store.jsx'
import GiftBox from './GiftBox.jsx'


function ProductDetail() {
    return (
        <div className="product-detail">
            <div className="content">
                <ProductInfomation />
                <Store />
                <GiftBox />
            </div>
        </div>
    )
}

export default ProductDetail;