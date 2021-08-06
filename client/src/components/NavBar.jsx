import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import logo from "../logo.svg";

const NavBar = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const logoutHandler = (e) => {
    e.preventDefault();
    auth.logout();
    history.push("/");
  };
  return (
    <nav className="red darken-1">
      <div className="nav-wrapper ">
        <div className="container">
          <span className="brand-logo">
            <img height={64} src={logo} alt={"logo"} />
            Сокращение ссылок
          </span>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/create">Создать</NavLink>
            </li>
            <li>
              <NavLink to="/links">Ссылки</NavLink>
            </li>
            <li>
              <a href="/" onClick={logoutHandler}>
                Выход
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
