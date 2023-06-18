import React from "react";
import "./Header.css";
import logo from '../../assets/img.jpeg'

const Header = () => {
  return (
    <div>
      <nav className='header'>
             <h2>Knowledge Cafe</h2>
            <div>
                <img src={logo} alt="" />
            </div>
        </nav>
    </div>
  );
};

export default Header;
