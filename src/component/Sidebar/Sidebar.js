import styled from 'styled-components';
import {FaTimes, FaBars} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';

export const SidebarContainer = styled.aside`
position: fixed;
z-index: ${({isOpen}) => isOpen ? '999' : '0'};
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0') };
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
top: 0;

@media screen and (min-width: 768px) {
    transition: 0.2s ease-in-out;
    opacity: 0;
    visibility: hidden;
    top: -50000%;
`;

export const CloseIcon = styled(FaTimes)`
color: #fff;
`;

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;

@media screen and (min-width: 768px) {
    right:-30%;
`;

export const SidebarWrapper = styled.div`
color: #fff;
`;

export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #fff;
cursor: pointer;

&:hover {
    color: #6dd48c;
    transition: 0.2s ease-in-out;
}
`;

export const SidebarMenu = styled.ul`
visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden') };
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6,80);
text-align: center;
padding: 0 !important; //override default padding

@media screen and (max-width: 480px)
   grid-template-rows: repeat(6,60);
`;


