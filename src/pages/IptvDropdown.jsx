import React, { useState } from "react";
import { iptvDropdown } from "./NavItem";
import { NavLink } from "react-router-dom";

function IptvDropdowns() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {iptvDropdown.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default IptvDropdowns;
