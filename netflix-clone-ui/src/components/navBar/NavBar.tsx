import React from "react";
import Logo from "../../assets/Logo.png";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { testApi } from "../../services/api.service";

type Props = {};

const NavBar = (props: Props) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/signin");
  };

  const onClickToken = () => {
    testApi();
  };
  return (
    <div className="navbar-container">
      <img src={Logo} alt="missing logo" width={148} height={40} />
      <span className="navbar-right-container">
        <select className="language-select">
          <option className="language-option">English</option>
          <option className="language-option">Chinese</option>
          <option className="language-option">Japanese</option>
          <option className="language-option">Korean</option>
        </select>
        <button className="app-red-btn navbar-sigin-btn" onClick={onClick}>
          Sign In
        </button>
        <button onClick={onClickToken}>Show Token</button>
      </span>
    </div>
  );
};

export default NavBar;
