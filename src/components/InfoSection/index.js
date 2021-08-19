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
import {FaGithub} from 'react-icons/fa'
import {SocialIconLink} from '../Footer/FooterElements'


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
       desc2,
       to
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
                                <Button 
                                href={to}
                                target={to}
                                aria-label="Linkedin"
                                >{buttonLabel}</Button> 
                            </BtnWrap>
                            

                            
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSection
