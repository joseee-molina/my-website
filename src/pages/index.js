import React, {useState} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import HeroSection from '../components/HeroSection'

import Navbar from '../components/Navbar/index'
import Sidebar from '../components/Sidebar/index'

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
        </Router>

    )
}

export default Home
