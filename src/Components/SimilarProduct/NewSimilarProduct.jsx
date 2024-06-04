import React from "react";
import SimilarProductData from '../../Data/SimilarProductData.jsx'
import SimilarProduct from "./SimilarProduct.jsx";
import '../../Styles/SimilarProduct/NewSimilarProduct.css'

function NewSimilarProduct() {
    return (
        <div className='similar'>
            <div className='similar-contents'>
                <div className="similar-title">
                    <p>SẢN PHẨM TƯƠNG TỰ</p>
                    <p>SẢN PHẨM ĐÃ XEM</p>
                </div>
                <div className="new-similar-product">
                    {SimilarProductData.map((similar, index) => (
                        <SimilarProduct
                            key={index}
                            persentSale={similar.persentSale}
                            imageUrl={similar.imageUrl}
                            name={similar.name}
                            price={similar.price}
                            priceSale={similar.priceSale}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default NewSimilarProduct;