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
                    <Button to="signup" onMouseEnter = {onHover}
                     onMouseLeave = {onHover}
                     primary="true"
                     dark="true">
                        Contact me! {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
