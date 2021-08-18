import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav,
     NavbarContainer,
      NavLogo,
       MobileIcon,
        NavMenu,
         NavItem,
          NavLinks,
          NavBtn,
           NavBtnLink } from './NavbarElements'
import { BrowserRouter as Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY>=80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }

    useEffect (()=>{
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
        <>
        <Nav scrollNav ={scrollNav}>
            <NavbarContainer>
                <NavLogo to  ='/' onClick={toggleHome}> Tavo</NavLogo>
                <MobileIcon onClick = {toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>About me</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Portfolio</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="resume"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Resume</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="awards"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Awards</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Contact me</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign in</NavBtnLink>
                </NavBtn>
            </NavbarContainer>

        </Nav>
        </>
    )
}

export default Navbar
