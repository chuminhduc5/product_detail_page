import React from "react";
import { Telephone, ChevronDown} from "react-bootstrap-icons";

function Store() {
    return (
        <div className="Header_Store">
            <div className="Shopping">
                <Telephone />
                <span>Mua hàng online</span>
                <i class="bi bi-chevron-down"></i>
            </div>
            <div className="Northern_store">
                <Telephone />
                <span>Miền Bắc</span>
                <ChevronDown />
            </div>
            <div className="Central_store">
                <Telephone />
                <span>Miền Trung</span>
                <ChevronDown />
            </div>
            <div className="Southern_store">
                <Telephone />
                <span>Miền Nam</span>
                <ChevronDown />
            </div>
        </div>
    )
}
export default Store;