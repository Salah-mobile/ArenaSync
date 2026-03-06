import { NavLink } from "react-router-dom";
function BottomMenu() {
  return (
    <ul className="menuBottom">
      <li>
        <NavLink to="/">
          <i className="ri-home-2-fill"></i>
          <p>Home</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/tournament">
          <i className="ri-calendar-2-line"></i>
          <p>Tournament</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile">
          <i className="ri-user-fill"></i>
          <p>Profile</p>
        </NavLink>
      </li>
    </ul>
  );
}
export default BottomMenu;