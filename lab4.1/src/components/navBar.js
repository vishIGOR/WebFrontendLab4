import { Navbar, Nav,} from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="sm" className="navbar-dark bg-dark">
            <div className="container-fluid">
                <Navbar.Brand href="#">Navbar</Navbar.Brand >
                <Navbar.Toggle aria-controls="navbar_menu" />
                <Navbar.Collapse id="navbar_menu">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link" >News</NavLink>
                        <NavLink to="/todo" className="nav-link" >ToDo lists</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </div>

        </Navbar>
    )
}


export default NavBar;