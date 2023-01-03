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
                        <NavLinks to="about" spy={true} smooth={true} duration={500} >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="annuities" spy={true} smooth={true} duration={500} >Annuities</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="roth" spy={true} smooth={true} duration={500} >Roth</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact" spy={true} smooth={true} duration={500} >Contact Us!</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}
export default Navbar; 