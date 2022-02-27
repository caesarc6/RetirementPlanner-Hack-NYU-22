import React, {useState} from 'react';
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import StartSection from '../component/startSection';
import Annuities from '../component/Annuities'
import Roth from '../component/Roth';
import Contact from '../component/Contact';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <StartSection />
        <Annuities />
        <Roth />
        <Contact />
        </>
    );
};

export default Home;