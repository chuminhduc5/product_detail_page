import React from "react";
import '../../Styles/ProductDetail/News.css'

function NewsComponent({ title, description, imageUrl, link }) {
    return (
        <div className="news">
            <img src={imageUrl} alt={title} className="news-image" />
            <div className="news-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link}>Xem thêm</a>
            </div>
        </div>
    )
}
export default NewsComponent;