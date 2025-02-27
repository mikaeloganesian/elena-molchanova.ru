import React, { useState, useCallback } from 'react';
import logo from '../images/ElenaMolchanovaLogo.png';
import footerLogo from "../images/logo_white.png";

const menuItems = [
  { href: "#heroHook", text: "Главная" },
  { href: "#aboutMeHook", text: "Обо мне" },
  { href: "#skillsHook", text: "Навыки" },
  { href: "#companiesHook", text: "Опыт работы" },
  { href: "#achivmentsHook", text: "Достижения" },
  { href: "#contactsHook", text: "Контакты" }
];

const MenuItem = ({ href, text, onClick }) => (
  <a href={href} onClick={onClick}>
    <div className="menu-item">{text}</div>
  </a>
);

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleMenuClick = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleMenuItemClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className="menu">
      <img className="logo" src={logo} alt="Elena Molchanova" />
      
      <div className="menu-points">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
      
      <button 
        className="menu-mobile" 
        onClick={handleMenuClick}
        aria-label="Toggle menu"
      >
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_20_35)">
            <path d="M0 0H24V2.6875H0V0ZM0 9.3125V6.6875H24V9.3125H0ZM0 16V13.3125H24V16H0Z" fill="black"/>
          </g>
          <defs>
            <clipPath id="clip0_20_35">
              <rect width="24" height="16" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>

      <div className={`menu-mobile-open ${isOpen ? "isOpen" : "isClosed"}`}>
        <div className="mobile-menu-point">
          {menuItems.map((item, index) => (
            <MenuItem 
              key={index} 
              {...item} 
              onClick={handleMenuItemClick}
            />
          ))}
          <div onClick={handleMenuItemClick} className="menu-item close">
            Закрыть
          </div>
          <center>
          <img 
            className="menu-logo" 
            alt="White logo" 
            src={footerLogo}
          />
          </center>
        </div>
      </div>
    </nav>
  );
}