import React from 'react'
import {Button} from '../ButtonElements'
import ImageSlider from '../ImageSlider/ImageSlider'
import { InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    ImgWrap,
    Img
 } from './InfoElements'
import Video from '../../images/bbvavideo.mp4'
import {VideoBG,HeroBG} from '../HeroSection/HeroElements'

const InfoSection = ({
    id,
     lightBg,
     imgStart,
      topLine,
      lightText,
      headLine,
      darkText,
      description,
      buttonLabel,
      img,
      alt,
      primary,
      dark,
      dark2,
       desc2
      }) => {
        
    return (
        <InfoContainer lightBg = {lightBg} id = {id}>
            <InfoWrapper>
                <InfoRow imgStart = {imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText = {lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <Subtitle darkText={darkText}>{desc2}</Subtitle>

                            
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <VideoBG autoPlay loop muted src = {Video} type = 'video/mp4'/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSection
