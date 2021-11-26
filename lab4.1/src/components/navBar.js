import { Navbar, Nav,} from "react-bootstrap";

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar-dark bg-dark">
            <div className="container-fluid">
                <Navbar.Brand href="#">Navbar</Navbar.Brand >
                <Navbar.Toggle aria-controls="navbar_menu" />
                <Navbar.Collapse id="navbar_menu">
                    <Nav className="navbar-nav">
                        <Nav.Link className="nav-link active" href="/">News</Nav.Link>
                        <Nav.Link className="nav-link" href="/todo">ToDo lists</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>

        </Navbar>
    )
}


export default NavBar;