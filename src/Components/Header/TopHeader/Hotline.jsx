import React from "react";
import { Telephone } from "react-bootstrap-icons";

function Hotline() {
    return (
        <div className="Header_Hotline">
            <Telephone />
            <span className="hotline">Hotline mua hàng:</span>
            <span className="phoneNumber">1900 1903</span>
        </div>
    )
}

export default Hotline;