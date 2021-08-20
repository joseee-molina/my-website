import React, {useState} from 'react'
import { ServicesContainer,
     ServicesH1,
      ServicesH2,
       ServicesWrapper,
        ServicesCard,
         ServicesIcon,
          ServicesP,
         } from './ServicesElements'
import gitletp from '../../images/gitlet-photo.png';
import byowp from '../../images/byow-photo.png';
import eriscp from '../../images/erisc-photo.png';
import dequesp from '../../images/gh-photo.jpeg';
import dcop from '../../images/dco-photo.png';
import ctgp from '../../images/ctg-photo.png';
import {ModalUnmuted} from '../ModalUnmuted/ModalUnmuted.js'; 
import { Modal } from '../Modal/Modal.js'; 
import {gitlet, byow, erisc, deques, dco, ctg} from '../Modal/Data'

const Services = () => {

    const [showModal, setShowModal] = useState(false);
    const [showModalU, setShowModalU] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    const openModalU = () => {
        setShowModalU(prev => !prev);
    };

    return (
        <ServicesContainer id = "services">
            <ServicesH1>PORTFOLIO</ServicesH1>
            <ServicesWrapper >
                <ServicesCard onClick={openModal}>
                    <Modal showModal={showModal}
                        setShowModal={setShowModal} {...gitlet} />
                    <ServicesIcon src={gitletp}/>
                    <ServicesH2>Gitlet</ServicesH2>
                    <ServicesP>Git-like Version Control System
                    </ServicesP>
                </ServicesCard>
                <ServicesCard onClick={openModal}>
                    <Modal showModal={showModal}
                        setShowModal={setShowModal} {...byow} />
                    <ServicesIcon src={byowp}/>
                    <ServicesH2>BYOW</ServicesH2>
                    <ServicesP>Randomly generated explorable worlds!
                    </ServicesP>
                </ServicesCard>
                <ServicesCard onClick={openModal}>
                    <Modal showModal={showModal}
                        setShowModal={setShowModal} {...erisc} />
                    <ServicesIcon src={eriscp}/>
                    <ServicesH2>ERISC</ServicesH2>
                    <ServicesP>C++ based compiler, able to read and output .txt files
                    </ServicesP>
                </ServicesCard>
                <ServicesCard onClick={openModalU}>
                    <ModalUnmuted showModalU={showModalU}
                        setShowModalU={setShowModalU} {...deques} />
                    <ServicesIcon src={dequesp}/>
                    <ServicesH2>Deques</ServicesH2>
                    <ServicesP>Double ended queues, <i>turn your sound on </i>
                    </ServicesP>
                </ServicesCard>
                <ServicesCard onClick={openModal}>
                    <Modal showModal={showModal}
                        setShowModal={setShowModal} {...dco} />
                    <ServicesIcon src={dcop}/>
                    <ServicesH2>2048</ServicesH2>
                    <ServicesP> The core logic of the famous game, in java! 
                    </ServicesP>
                </ServicesCard>
                <ServicesCard onClick={openModal}>
                    <Modal showModal={showModal}
                        setShowModal={setShowModal} {...ctg} />
                    <ServicesIcon src={ctgp}/>
                    <ServicesH2>Call the guy</ServicesH2>
                    <ServicesP>A job searching app for informal workers
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
