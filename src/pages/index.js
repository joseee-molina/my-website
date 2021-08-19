import React, {useState} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar/index';
import Sidebar from '../components/Sidebar/index';
import Services from '../components/Services/index';
import Footer from '../components/Footer';
import InfoSlider from '../components/InfoSlider/index'
import '../components/ImageSlider0/styles.css'
import InfoSlider0 from '../components/InfoSlider0/index'

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
            <InfoSlider0 {...homeObjOne}  />
            <Services/>
            <InfoSlider {...homeObjThree}/>
            <InfoSection {...homeObjTwo} />

            <Footer/>
        </Router>

    )
};

export default Home;
