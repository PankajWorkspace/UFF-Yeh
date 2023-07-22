import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "./NavItem";
import ServiceDropdowns from "./ServiceDropdown";
import IptvDropdowns from "./IptvDropdown";
import IndustriesDropdown from "./IndustriesDropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState({});

  const mouseEnterHandler = (title) => {
    setDropdown((prevDropdown) => ({
      ...prevDropdown,
      [title]: true,
    }));
  };

  const mouseLeaveHandler = (title) => {
    setDropdown((prevDropdown) => ({
      ...prevDropdown,
      [title]: false,
    }));
  };

  const renderDropdown = (title) => {
    switch (title) {
      case "Services":
        return <ServiceDropdowns />;
      case "IPTV":
        return <IptvDropdowns />;
      case "Industries":
        return <IndustriesDropdown />;
      default:
        return null;
    }
  };

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="navbar-logo">
          <h2>Uffyeh</h2>
        </NavLink>
        <ul className="nav-items">
          {navItems.map((item) => {
            const { id, title, path, cName } = item;
            return (
              <li
                key={id}
                className={cName}
                onMouseEnter={() => mouseEnterHandler(title)}
                onMouseLeave={() => mouseLeaveHandler(title)}
              >
                <NavLink to={path}>{title}</NavLink>
                {dropdown[title] && renderDropdown(title)}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
