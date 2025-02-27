import React from 'react';
import footerLogo from '../images/logo_white.png';

export default function Footer() {
    return (
        <div className="footer">
            <img className={"footer-logo"} alt={"White logo"} src={footerLogo}/>
        </div>
    )
}