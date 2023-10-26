import React, { useState } from "react";

import {
  HeroContainer,
  HeroBG,
  VideoBG,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Video from "../../videos/hero-demo-fin.mp4";
import { Button } from "../ButtonElements";
import {
  SocialIconLink,
  SocialIcons,
  SocialLogo,
} from "../Footer/FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  /*
        <SocialIconLink href="https://www.youtube.com/channel/UCa-0YGtzFGUK_R05INXoICA"
                    target="https://www.youtube.com/channel/UCa-0YGtzFGUK_R05INXoICA"
                    aria-label="Youtube">
                        <FaYoutube/>
                    </SocialIconLink> 
                    delete this
                    delete this
                    delete this too
    */

  return (
    <HeroContainer>
      <HeroBG>
        <VideoBG autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBG>
      <HeroContent>
        <HeroH1>Jose Molina</HeroH1>
        <HeroP>Welcome to my website!</HeroP>
        <HeroBtnWrapper>
          <Button
            href="https://drive.google.com/drive/folders/1qZmFm0WISh95AzAIRN1S6AXFc4FLnLzM?usp=sharing"
            target="https://drive.google.com/drive/folders/1qZmFm0WISh95AzAIRN1S6AXFc4FLnLzM?usp=sharing"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="false"
          >
            Download resume! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
        <SocialIcons>
          <SocialIconLink
            href="https://github.com/tavo-molina"
            target="https://github.com/tavo-molina"
            aria-label="Github"
          >
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink
            href="https://www.linkedin.com/in/octavio12/"
            target="https://www.linkedin.com/in/octavio12/"
            aria-label="Linkedin"
          >
            <FaLinkedin />
          </SocialIconLink>
        </SocialIcons>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
