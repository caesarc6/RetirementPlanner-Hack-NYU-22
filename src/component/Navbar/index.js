import React from "react";
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer,NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavBar';


const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Retirement Planner</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="About">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="Annuities">Annuities</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="Roth">Roth</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="Contact">Contact Us!</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}
export default Navbar; 