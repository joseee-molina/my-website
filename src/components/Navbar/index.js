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

    return (
        <>
        <Nav scrollNav ={scrollNav}>
            <NavbarContainer>
                <NavLogo to  ='/'> Tavo</NavLogo>
                <MobileIcon onClick = {toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About me</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">Sign up</NavLinks>
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
