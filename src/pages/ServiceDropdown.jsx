import React, { useState } from "react";
import { serviceDropdown } from "./NavItem";
import { NavLink } from "react-router-dom";

function ServiceDropdowns() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item) => {
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

export default ServiceDropdowns;
