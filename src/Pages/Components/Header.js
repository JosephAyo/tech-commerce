import React from 'react';
import '../style/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import {
    Nav,
    Navbar
} from 'react-bootstrap';
import {
    ShoppingCartTwoTone,
    ExitToAppTwoTone,
    FavoriteTwoTone,
    AccountCircleTwoTone,
    ScatterPlotTwoTone,
    HomeTwoTone
} from '@material-ui/icons';
const NavBrand=(props)=>{
    return(
        <NavLink className="nav-item nav-brand-custom" to="/home">
            <ScatterPlotTwoTone/>
            <p style={{margin:"auto 1rem"}}>TECH COMMERCE</p>
        </NavLink>
    )
}

const Header =(props)=>{
    const [scrollPosition, setSrollPosition] = React.useState(0);
    
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };

    return(
        <Navbar variant="dark" fg="light" expand="lg" fixed="top"
        collapseOnSelect={true}  
        className="mb-5 nav-bg"
        id={(scrollPosition>10)?"bottom-bord":"no-bottom-bord"}>
        <Navbar.Brand className="nav-brand" as={NavBrand}/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto nav-items">
                <Nav.Link eventKey="0" >
                    <NavLink to="/home" 
                    className="nav-item" activeStyle={styles.NavbarActive}>
                        <p><HomeTwoTone/>Home</p>
                    </NavLink>
                </Nav.Link>
                <Nav.Link eventKey="1" >
                    <NavLink to="/account" 
                    className="nav-item" activeStyle={styles.NavbarActive}>
                        <p><ExitToAppTwoTone/> Sign Up</p>
                    </NavLink>
                </Nav.Link>
                <Nav.Link eventKey="1" >
                    <NavLink to="/account"
                    className="nav-item" activeStyle={styles.NavbarActive}>
                        <p><AccountCircleTwoTone/> Sign In</p>
                        </NavLink>
                </Nav.Link>
                <span id="prod-select-info">
                <Nav.Link eventKey="2" >
                    <NavLink to="/favourite" className="nav-item fav icon-only" activeStyle={styles.NavbarActive}>
                        <p><FavoriteTwoTone/> <span className="badge">0</span></p>
                        </NavLink>
                </Nav.Link>
                <Nav.Link eventKey="3" >
                <NavLink to="/cart" className="nav-item icon-only" activeStyle={styles.NavbarActive}>
                        <p><ShoppingCartTwoTone/> <span className="badge">{scrollPosition}</span> Cart: N0.00</p>
                        </NavLink>
                </Nav.Link>
                </span>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
};


const styles = {
    NavbarActive: {
        color: "#E8835F"
    },
    NavbarDropItems: {
        textDecoration: "none",
        color: "#000000",
        fontSize:"20px"
    },
    NavbarDropActive: {
        color: "#A684FF"
    }
}
export default Header;