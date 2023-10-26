import React from "react";
import styled from "styled-components";

import { useSpring, animated } from "react-spring";
import {
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent,
  CloseModalButton,
} from "../Modal//ModalElements";
import { VideoModalUnmuted, ImageModal } from "./ModalElements";
import { VideoBG } from "../HeroSection/HeroElements";

export const ModalUnmuted = ({
  showModalU,
  setShowModalU,
  title,
  p1,
  p2,
  p3,
  p4,
  video,
  image,
}) => {
  //const modalRef = useRef()

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModalU ? 1 : 0,
    transform: showModalU ? `translateY(0%)` : `translateY(-100%)`,
  });

  /**const closeModal = e =>{
        if (modalRef.current === e.target){
            setShowModalU(false);
        }
    };**/
  return showModalU ? (
    <Background onClick={setShowModalU((prev) => !prev)}>
      <animated.div style={animation}>
        <ModalWrapper showModalU={showModalU}>
          <VideoModalUnmuted autoPlay loop src={video} alt="popup" />
          <ModalContent>
            <h1>{title}</h1>
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
            <p>{p4}</p>
          </ModalContent>
          <CloseModalButton
            aria-label="Close modal"
            onClick={setShowModalU((prev) => !prev)}
          />
        </ModalWrapper>
      </animated.div>
    </Background>
  ) : null;
};
