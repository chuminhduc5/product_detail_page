import React from "react";
import TopFooter from './TopFooter.jsx'
import MiddleFooter from './MiddleFooter.jsx'
import BottomFooter from './BottomFooter.jsx'

function Footer(){
    return (
        <div className="footer">
            <TopFooter />
            <MiddleFooter />
            <BottomFooter />
        </div>
    )
}

export default Footer;