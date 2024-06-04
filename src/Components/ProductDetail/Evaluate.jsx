import React, { useState } from "react";
import '../../Styles/ProductDetail/Evaluate.css';
import { StarFill } from "react-bootstrap-icons";

function EvaluateComponent() {
    const [comment, setComment] = useState('');

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = () => {
        if (comment.trim()) {
            alert(`Bình luận của bạn: ${comment}`);
            setComment('');
        } else {
            alert('Vui lòng nhập bình luận');
        }
    };
    return (
        <div className="evaluate-component">
            <div className="evaluate-content">
                <div className="evaluate-racting">
                    <h3>Xếp hạng đánh giá của khách hàng</h3>
                    <div className="rating">
                        <span>0/5</span>
                        <div className="stars">
                            <StarFill className="icon-starFill"/>
                            <StarFill className="icon-starFill"/>
                            <StarFill className="icon-starFill"/>
                            <StarFill className="icon-starFill"/>
                            <StarFill className="icon-starFill"/>
                            <span>(0 lượt bình chọn)</span>
                        </div>
                        <button onClick={handleSubmit} className="submit-button">Viết nhận xét của bạn</button>
                    </div>
                </div>
                <div className="point-evaluate">
                    <div>
                        <span>5 <StarFill className="star-fill" /></span>
                        <div></div>
                        <span>0</span>
                    </div>
                    <div>
                        <span>4 <StarFill className="star-fill" /></span>
                        <div></div>
                        <span>0</span>
                    </div>
                    <div>
                        <span>3 <StarFill className="star-fill" /></span>
                        <div></div>
                        <span>0</span>
                    </div>
                    <div>
                        <span>2 <StarFill className="star-fill" /></span>
                        <div></div>
                        <span>0</span>
                    </div>
                    <div>
                        <span>1 <StarFill className="star-fill" /></span>
                        <div></div>
                        <span>0</span>
                    </div>
                </div>
            </div>
            <div className="comment-box">
                <div className="title-comment">
                    <h2>Bình luận</h2>
                </div>
                <div className="comment-input">
                    <textarea
                        placeholder="Nhập bình luận của bạn..."
                        value={comment}
                        onChange={handleCommentChange}
                    />
                    <button onClick={handleSubmit}>Gửi bình luận</button>
                </div>
            </div>
        </div>
    );
}
export default EvaluateComponent;