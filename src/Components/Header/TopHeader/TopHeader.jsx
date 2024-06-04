import React from "react";
import Hotline from "./Hotline";
import Store from "./Store";
import Service from "./Service";
import '../../../Styles/Header/TopHeader.css'


function TopHeader(){
    return (
        <div className="top-header">
            <Hotline />
            <Store />
            <Service />
        </div>
    )
}
export default TopHeader;