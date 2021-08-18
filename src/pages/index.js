import React, {useState} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar/index';
import Sidebar from '../components/Sidebar/index';
import Services from '../components/Services/index';
import Footer from '../components/Footer';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <Router>
            <Sidebar isOpen = {isOpen} toggle = {toggle}/>
            <Navbar toggle = {toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <Services/>
            <InfoSection {...homeObjTwo} />

            <Footer/>
        </Router>

    )
};

export default Home;
