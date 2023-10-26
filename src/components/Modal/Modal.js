import React from "react";
import styled from "styled-components";

import { useSpring, animated } from "react-spring";
import {
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent,
  CloseModalButton,
  VideoModal,
} from "./ModalElements";
import { VideoBG } from "../HeroSection/HeroElements";

export const Modal = ({
  showModal,
  setShowModal,
  title,
  p1,
  p2,
  p3,
  p4,
  video,
  img,
}) => {
  /**const modalRef = useRef()**/

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  /**const closeModal = e =>{
        if (modalRef.current === e.target){
            setShowModal(false);
        }
    };**/
  let element;
  if (video != null) {
    element = (
      <animated.div style={animation}>
        <VideoModal autoPlay loop muted src={video} alt="popup" />;
      </animated.div>
    );
  }
  if (img != null) {
    element = <ModalImg src={img} />;
  }

  return showModal ? (
    <Background onClick={setShowModal((prev) => !prev)}>
      <animated.div style={animation}>
        <ModalWrapper showModal={showModal}>
          {element}
          <ModalContent>
            <h1>{title}</h1>
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
            <p>{p4}</p>
          </ModalContent>
          <CloseModalButton
            aria-label="Close modal"
            onClick={setShowModal((prev) => !prev)}
          />
        </ModalWrapper>
      </animated.div>
    </Background>
  ) : null;
};
