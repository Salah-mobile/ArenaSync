import { Link } from "react-router-dom";
function BottomMenu() {
  return (
    <ul className="menuBottom">
      <li>
        <Link to="/">
          <i className="ri-home-2-fill"></i>
          <p>Home</p>
        </Link>
      </li>
      <li>
        <Link to="/tournament">
          <i className="ri-calendar-2-line"></i>
          <p>Tournament</p>
        </Link>
      </li>
      <li>
        <Link to="/profile">
          <i className="ri-user-fill"></i>
          <p>Profile</p>
        </Link>
      </li>
    </ul>
  );
}
export default BottomMenu;