import React, {useState} from 'react';
import InfoSection from '../component/InfoSection';
import { homeObjOne } from '../component/InfoSection/data';
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import StartSection from '../component/startSection';

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
        {/* <InfoSection {...homeObjOne}/> */}
        </>
    );
};

export default Home;