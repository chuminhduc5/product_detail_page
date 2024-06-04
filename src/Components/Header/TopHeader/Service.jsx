import React from "react";
import { GeoAlt, InfoCircle, Headset, Gift } from "react-bootstrap-icons";

function Service() {
    return (
        <div className="Header_Service">
            <div className="system">
                <GeoAlt />
                <span className="content-service">Hệ thống Showroom</span>
            </div>
            <div className="support-service">
                <InfoCircle/>
                <span className="content-service">Hỗ trợ</span>
            </div>
            <div className="service">
                <Headset />
                <span className="content-service">Trung tâm dịch vụ</span>
            </div>
            <div className="promotion">
                <Gift/>
                <span className="content-service">Khuyến mại</span>
            </div>
        </div>
    )
}
export default Service;