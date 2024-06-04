import React from "react";
import '../../Styles/SimilarProduct/SimilarProduct.css'
import { CreditCard, StarFill, Check2, BagPlus } from "react-bootstrap-icons";

function SimilarProduct({ persentSale, imageUrl, name, price, priceSale }) {
    return (
        <div className="similar-product">
            <div className="product-persent-sale">
                {persentSale}
            </div>
            <img src={imageUrl} className="similar-product-image"/>
            <div className="installment">
                <CreditCard />
                <span>Trả góp</span>
            </div>
            <div className="star-fill">
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
                <span>(0)</span>
            </div>
            <div className="similar-product-infomation">
                <span>{name}</span>
                <span className="product-price">{price}</span>
                <span className="product-price-sale">{priceSale}</span>
                <span><Check2 />Sẵn hàng</span>
            </div>

            <div className="icon-bag">
                <BagPlus />
            </div>
        </div>
    )
}
export default SimilarProduct;