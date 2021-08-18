import React, {useState} from 'react'
import { ServicesContainer,
     ServicesH1,
      ServicesH2,
       ServicesWrapper,
        ServicesCard,
         ServicesIcon,
          ServicesP,
         } from './ServicesElements'
import icon1 from '../../images/svg-4.svg';
import icon2 from '../../images/svg-4.svg';
import icon3 from '../../images/svg-4.svg';
import { Modal } from '../Modal'; 


const Services = () => {
    const[showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    };

    return (
        <ServicesContainer id = "services">
            <ServicesH1>PORTFOLIO</ServicesH1>
            <ServicesWrapper>
                <ServicesCard onClick={openModal}>
                <Modal showModal={showModal}
                    setShowModal={setShowModal} />
                    <ServicesIcon src={icon1}/>
                    <ServicesH2>Gitlet</ServicesH2>
                    <ServicesP>Git-like Version Control System
                    </ServicesP>
                    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon2}/>
                    <ServicesH2>BYOW</ServicesH2>
                    <ServicesP>Randomly generated explorable worlds!
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon3}/>
                    <ServicesH2>ERISC</ServicesH2>
                    <ServicesP>C++ based compiler
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon3}/>
                    <ServicesH2>2048</ServicesH2>
                    <ServicesP>The famous game, in Java!
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon3}/>
                    <ServicesH2>Deques</ServicesH2>
                    <ServicesP>Double ended queues using doubly linked lists and arrays as backend
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon3}/>
                    <ServicesH2>Call the guy</ServicesH2>
                    <ServicesP>Job searching app
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
