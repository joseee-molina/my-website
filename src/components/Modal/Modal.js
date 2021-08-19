import React, {useRef, useEffect, useCallback} from 'react'
import styled from 'styled-components'

import {useSpring, animated} from 'react-spring'
import {Background, ModalWrapper, ModalImg, ModalContent, CloseModalButton, VideoModal } from './ModalElements'
import {VideoBG} from '../HeroSection/HeroElements'


export const Modal = ({showModal, setShowModal, title, p1, p2, p3, p4, video, img}) => {
    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration:250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e =>{
        if (modalRef.current === e.target){
            setShowModal(false);
        }
    };
    return (
        showModal ? 
          <Background ref={modalRef} onClick={closeModal}>
              <animated.div style={animation}>
                  <ModalWrapper showModal = {showModal}>
                      <VideoModal autoPlay loop muted src={video} alt='popup' />
                      
                      <ModalContent>
                          <h1>{title}</h1>
                          <p>{p1}</p>
                          <p>{p2}</p>
                          <p>{p3}</p>
                          <p>{p4}</p>
                      </ModalContent>
                      <CloseModalButton aria-label='Close modal' onClick={setShowModal(prev => !prev)}/>
                  </ModalWrapper>
              </animated.div>
          </Background>

        : null
        );
};