import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "./NavItem";
// import Button from "./Button";
import ServiceDropdown  from "./ServiceDropdown";
import IptvDropdown from "./IptvDropdown";
import IndustriesDropdown from "./IndustriesDropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="navbar-logo">
          <h2>OTTFast</h2>
        </NavLink>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Services") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <NavLink to={item.path}>{item.title}</NavLink>
                  {dropdown && <ServiceDropdown />}
                </li>
              );
            }
            else if (item.title === "IPTV") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <NavLink to={item.path}>{item.title}</NavLink>
                  {dropdown && <IptvDropdown />}
                </li>
              );
            }
            else if (item.title === "Industries"){
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <NavLink to={item.path}>{item.title}</NavLink>
                  {dropdown && <IndustriesDropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <NavLink to={item.path}>{item.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;