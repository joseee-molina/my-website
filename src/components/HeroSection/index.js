import React from 'react'
import { HeroContainer,HeroBG, VideoBG } from './HeroElements'
import Video from '../../videos/video.mp4'

const HeroSection = () => {
    return (
        <HeroContainer >
            <HeroBG>
                <VideoBG autoPlay loop muted src = {Video} type = 'video/mp4'/>
            </HeroBG>
        </HeroContainer>
    )
}

export default HeroSection
