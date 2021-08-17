import React from 'react'
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



const Services = () => {
    return (
        <ServicesContainer id = "services">
            <ServicesH1>Our services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon1}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and
                        increase your revenue
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon2}/>
                    <ServicesH2>Virtual offices</ServicesH2>
                    <ServicesP>Go bears!
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon3}/>
                    <ServicesH2>Access the platform!!</ServicesH2>
                    <ServicesP>Membership card!
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
