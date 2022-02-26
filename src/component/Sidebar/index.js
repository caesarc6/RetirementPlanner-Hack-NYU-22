import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu} from './Sidebar';

const Sidebar = ({isOpen, toggle}) =>{
    return (
        <SidebarContainer isOpen={isOpen} /*onClick={toggle}*/>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='About' /*onClick={toggle}*/>
                        About
                    </SidebarLink>
                    <SidebarLink to='Annuities' /*onClick={toggle}*/>
                        Annuities
                    </SidebarLink>
                    <SidebarLink to='Roth' /*onClick={toggle}*/>
                        Roth
                    </SidebarLink>
                    <SidebarLink to='Contact' /*onClick={toggle}*/>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;