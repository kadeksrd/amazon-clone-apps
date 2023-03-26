import React from "react";
import "./Home.css";
import Product from "./product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61um60VOoeL._SX3000_.jpg"
          alt="home-header"
          className="home-image"
        />
        <div className="home-row">
          <Product
            id="1010101"
            title={`Asus LED 49" Gaming Monitor`}
            price={299}
            rating={5}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61sRzChrOGL._AC_SX679_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
