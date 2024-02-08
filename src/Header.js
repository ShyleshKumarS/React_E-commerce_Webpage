import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
        className="header__logo"
      />
      <div className="header__search">
        <input className="header_searchInput" type="text" />
        <div className="header__searchIcon">
          <SearchIcon className="header__searchIconImg" />
        </div>
      </div>
      <div className={`header_nav ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="header_options">
          <span className="header_optionLineOne">Hello</span>
          <span className="header_optionLineTwo">Sign in</span>
        </div>
        <div className="header_options">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_options">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <div className="headerBasketOptions">
          <ShoppingBasketIcon className="header_basketIcon" />
          <span className="header_optionLineTwo header_basketCount">0</span>
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </div>
  );
}
