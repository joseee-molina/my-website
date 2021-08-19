import React from 'react'
import {Button} from '../ButtonElements'
import ImageSlider from '../ImageSlider0/ImageSlider'
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
import {SliderData} from '../ImageSlider0/SliderData'


const InfoSlider0 = ({
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
       desc2,
       slides
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

                            <BtnWrap>
                                <Button to="home"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2 = {dark2 ? 1 : 0}
                                >{buttonLabel}</Button> 
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <ImageSlider />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSlider0;
