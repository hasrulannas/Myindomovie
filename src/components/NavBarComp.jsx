import { Navbar, Nav } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


function NavBarComp() {
    const navigate = useNavigate();

    const movePage = (path) => {
        navigate(path);
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand onClick={() => movePage("/")}>Logo Brand</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link onClick={() => movePage("/")}>Home</Nav.Link>
                    <Nav.Link onClick={() => movePage("/movies")}>Movielist</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link onClick={() => movePage("/register")}>Sign In</Nav.Link>
                    <Nav.Link onClick={() => movePage("/login")}>Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBarComp