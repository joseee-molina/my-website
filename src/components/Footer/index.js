import React from 'react'
import { FooterContainer,
     FooterWrap,
      FooterLinksContainer,
FooterLinksWrapper,
FooterLinkItems,
FooterLinkTitle,
FooterLink,
SocialIconLink,
SocialLogo,
SocialIcons,
SocialMedia,
SocialMediaWrap,
WebsiteRights,
 } from './FooterElements';

import {FaFacebook, FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to= "/">
                            Octavio
                        </SocialLogo>
                        <WebsiteRights>Octavio Molina © {new Date().getFullYear()}  All rights reserved </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/"
                            target="_blank"
                            aria-label="Github">
                                <FaGithub/>
                            </SocialIconLink>
                            <SocialIconLink href="/"
                            target="_blank"
                            aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href="/"
                            target="_blank"
                            aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="www.facebook.com"
                            target="_blank"
                            aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
