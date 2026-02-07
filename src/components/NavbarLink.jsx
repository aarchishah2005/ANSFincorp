import { NavLink } from "react-router-dom";

const NavbarLink = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
      }
    >
      {label}
    </NavLink>
  );
};

export default NavbarLink;
