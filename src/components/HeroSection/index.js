import React, {useState} from 'react'
import { 
    HeroContainer,
    HeroBG,
     VideoBG, 
     HeroBtnWrapper,
      HeroContent,
       HeroH1, 
      HeroP, 
      ArrowForward,
       ArrowRight 
    } from './HeroElements'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements'
import {SocialIconLink, SocialIcons, SocialLogo} from '../Footer/FooterElements'
import {FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaYoutube} from 'react-icons/fa'
const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer >
            <HeroBG>
                <VideoBG autoPlay loop muted src = {Video} type = 'video/mp4'/>
            </HeroBG>
            <HeroContent>
                <HeroH1>José Octavio Molina Nava</HeroH1>
                <HeroP>
                    I'm a rising sophomore studying Physics and CS
                    at Tsinghua University, in Beijing.
                </HeroP>
                <HeroBtnWrapper>
                    <Button href = "https://drive.google.com/drive/folders/1w6rYWjTbmEZSuxXNWCMcYCPtcqrn1qmo" 
                    target = "https://drive.google.com/drive/folders/1w6rYWjTbmEZSuxXNWCMcYCPtcqrn1qmo"
                     onMouseEnter = {onHover}
                     onMouseLeave = {onHover}
                     primary="true"
                     dark="false">
                        Download resume! {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
                <SocialIcons>
                    <SocialIconLink href="https://github.com/tavo-molina"
                    target="https://github.com/tavo-molina"
                    aria-label="Github">
                        <FaGithub/>
                    </SocialIconLink>
                    <SocialIconLink href="https://www.linkedin.com/in/octavio12/"
                    target="https://www.linkedin.com/in/octavio12/"
                    aria-label="Linkedin">
                        <FaLinkedin/>
                    </SocialIconLink>
                    <SocialIconLink href="https://www.facebook.com/lito.gonzalez.904/"
                    target="https://www.facebook.com/lito.gonzalez.904/"
                    aria-label="Facebook">
                        <FaFacebook/>
                    </SocialIconLink>
                    <SocialIconLink href="https://www.youtube.com/channel/UCa-0YGtzFGUK_R05INXoICA"
                    target="https://www.youtube.com/channel/UCa-0YGtzFGUK_R05INXoICA"
                    aria-label="Youtube">
                        <FaYoutube/>
                    </SocialIconLink>
                </SocialIcons>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
