import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu} from './Sidebar';

const Sidebar = ({isOpen, toggle}) =>{
    return (
        <SidebarContainer isOpen={isOpen} /*onClick={toggle}*/>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu isOpen={isOpen}>
                    <SidebarLink to='about' to="about" spy={true} smooth={true} duration={500} onClick={toggle}>
                        About
                     </SidebarLink>
                    <SidebarLink to='annuities' to="annuities" spy={true} smooth={true} duration={500}  onClick={toggle}>
                        Annuities
                    </SidebarLink>
                    <SidebarLink to='roth' to="roth" spy={true} smooth={true} duration={500}  onClick={toggle}>
                        Roth
                    </SidebarLink>
                    <SidebarLink to='contact' to="contact" spy={true} smooth={true} duration={500}  onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;