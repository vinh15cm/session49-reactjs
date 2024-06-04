
import "./BT01.css";

export default function B6() {
    return (
        <div>
            BT06
            <nav>
                <NavLink to="/BT06/Home">Home</NavLink>
                <NavLink to="/BT06/Contact">Contact</NavLink>
            </nav>
            <Outlet />
        </div>
    );
}