import React from "react";
import "./styles/Footer.scss" ;

function Footer(){
    return(
        <div className="footer-container">
            <p>Developed by &copy; {new Date().getFullYear()} Kriti Prajapati</p>

        </div>
    )
}

export default Footer;