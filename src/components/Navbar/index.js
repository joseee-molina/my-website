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



const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
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
