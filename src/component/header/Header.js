import "./Header.css";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      {/* header logo */}
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="header-logo"
        className="header-logo"
      />

      {/* search bar */}
      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <SearchIcon className="header-searchIcon" />
      </div>

      {/* header navigation */}
      <div className="header-nav">
        <div className="header-option">
          <span className="header-option-one">Hello Guest</span>
          <span className="header-option-two">Sign In</span>
        </div>
        <div className="header-option">
          <span className="header-option-one">Returns</span>
          <span className="header-option-two">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-option-one">Your</span>
          <span className="header-option-two">Prime</span>
        </div>
        <div className="header-option-basket">
          <ShoppingBasketIcon />
          <span className="header-option-two header-basket-count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
