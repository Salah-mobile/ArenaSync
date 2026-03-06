import { NavLink } from "react-router-dom";
function TabLayout() {
    return(
    <div className="tabLayoutElement">
        <ul>
           <NavLink to={"Info"}>
            <li>
                <p>Info</p>
            </li>
           </NavLink>
             <NavLink to={"Participant"}>
            <li>
                <p>Participants</p>
            </li>
           </NavLink>
            <NavLink to={"Bracket"}>
            <li>
                <p>Brakets</p>
            </li>
           </NavLink>
        </ul>
    </div>
    );
}
export default TabLayout;
