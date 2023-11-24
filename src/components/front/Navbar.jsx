import React, { useState } from "react";
import style from "../stylesheets/navbar_style.module.css";
import search from "../../assets/search_icon.svg";

function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className={style.links}>
        <a href="#">Home</a>
        <a href="#">Trending</a>
        <a href="#">Category</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <div className={style.search}>
          {active && <input type="text" placeholder="Search BT" />}
          <img
            src={search}
            alt="search"
            onClick={() => {
              setActive(!active);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
