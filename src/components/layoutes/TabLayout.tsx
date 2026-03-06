import { NavLink } from "react-router-dom";

function TabLayout() {
    return(
    <div className="tabLayoutElement">
        <ul>
           <NavLink to={""}>
            <li>
                <p>Info</p>
            </li>
           </NavLink>
             <NavLink to={""}>
            <li>
                <p>Info</p>
            </li>
           </NavLink>
            <NavLink to={""}>
            <li>
                <p>Info</p>
            </li>
           </NavLink>
        </ul>
    </div>
    );
}
export default TabLayout;
