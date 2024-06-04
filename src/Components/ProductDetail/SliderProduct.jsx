import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { CaretDown, CaretUp , ChevronRight , ChevronLeft} from "react-bootstrap-icons";
import '../../Styles/ProductDetail/SliderProduct.css';
import imgProduct1 from '../../assets/images/imgProduct1.jpg';
import imgProduct2 from '../../assets/images/imgProduct2.jpg';
import imgProduct3 from '../../assets/images/imgProduct3.jpg';
import imgProduct4 from '../../assets/images/imgProduct4.jpg';
import imgProduct5 from '../../assets/images/imgProduct5.jpg';

function SliderProduct() {
    const images = [
        imgProduct1,
        imgProduct2,
        imgProduct3,
        imgProduct4,
        imgProduct5,
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: (oldIndex, newIndex) => setCurrentImageIndex(newIndex),
        arrows: false
    };

    const handleNext = () => {
        const nextIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(prevIndex);
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="slider-wrapper">
            <div className="slider-container">
                <button onClick={handlePrev} className="control-button top">
                    <CaretUp />
                </button>
                <Slider ref={sliderRef} {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className={`slider-item ${currentImageIndex === index ? 'active' : ''}`}>
                            <img src={image} alt={`Slide ${index}`} onClick={() => handleThumbnailClick(index)} />
                        </div>
                    ))}
                </Slider>
                <button onClick={handleNext} className="control-button bottom">
                    <CaretDown />
                </button>
            </div>
            <div className="main-image-container">
                <button onClick={handlePrev} className="control-button left">
                    <ChevronLeft />
                </button>
                <img src={images[currentImageIndex]} alt="Main Slide" className="main-image" />
                <button onClick={handleNext} className="control-button right">
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
}

export default SliderProduct;
