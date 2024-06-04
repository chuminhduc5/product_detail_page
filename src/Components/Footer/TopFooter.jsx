import React from "react";
import '../../Styles/Footer/TopFooter.css'

function TopBottom() {
    return (
        <div className="top-footer">
            <div className="delivery">
                <i class="bi bi-truck"></i>
                <div className="delivery-policy">
                    <span>Chính sách giao hàng</span>
                    <span>Nhận hàng và thanh toán tại nhà</span>
                </div>
            </div>
            <div className="lie">
                <i class="bi bi-repeat"></i>
                <div className="lie-policy">
                    <span>Đổi trả để dàng</span>
                    <span>1 đổi 1 trong 15 ngày</span>
                </div>
            </div>
            <div className="pay">
                <i class="bi bi-credit-card"></i>
                <div className="convenient-payment">
                    <span>Thanh toán tiện lợi</span>
                    <span>Trả tiền mặt, CK, trả góp 0%</span>
                </div>
            </div>
            <div className="support-footer">
                <i class="bi bi-chat-left"></i>
                <div className="support-content">
                    <span>Hỗ trợ nhiệt tình</span>
                    <span>Tư vấn gải đáp về mọi mặt</span>
                </div>
            </div>
        </div>
    )
}
export default TopBottom;