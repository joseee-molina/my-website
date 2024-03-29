import React, { useState } from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
  ServicesP2,
  subtitleP,
} from "./ProfessionalExperienceElements.js";
import niq_logo from "../../images/niq_logo.png";
import orchata_logo from "../../images/orchata_logo.png";
import hpe_logo from "../../images/hpe_logo.png";
import aws_logo from "../../images/aws_logo.png";
import csmc_logo from "../../images/csmc.png";

//Included logos from other companies, deleting unnecessary comments from past versions of the code.
import { ModalUnmuted } from "../ModalUnmuted/ModalUnmuted.js";
import { Modal } from "../Modal/Modal.js";
import { nielseniq, orchata, hpe, aws, csmc } from "../Modal/Data";

const ProfessionalExperience = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalU, setShowModalU] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const openModalU = () => {
    setShowModalU((prev) => !prev);
  };

  return (
    <ServicesContainer id="experience">
      <ServicesH1>PROFESSIONAL EXPERIENCE</ServicesH1>

      <ServicesWrapper>
        <ServicesCard onClick={openModal}>
          <Modal showModal={showModal} setShowModal={setShowModal} {...aws} />
          <ServicesIcon src={aws_logo} />
          <ServicesH2>Amazon Web Services</ServicesH2>
          <ServicesP>Software Development Engineer Intern</ServicesP>
          <ServicesP2>May - Aug 2023</ServicesP2>
          {/**ServicesP2 is just another text but in a gray tone to include the date of the experience
           *
           */}
        </ServicesCard>
        <ServicesCard onClick={openModal}>
          <Modal showModal={showModal} setShowModal={setShowModal} {...csmc} />
          <ServicesIcon src={csmc_logo} />
          <ServicesH2>CS Mentor Center</ServicesH2>
          <ServicesP>Mentor</ServicesP>
          <ServicesP2>Aug 2023 - present</ServicesP2>
          {/**ServicesP2 is just another text but in a gray tone to include the date of the experience
           *
           */}
        </ServicesCard>
        <ServicesCard onClick={openModal}>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            {...nielseniq}
          />
          <ServicesIcon src={niq_logo} />
          <ServicesH2>NielsenIQ</ServicesH2>
          <ServicesP>Software Engineer</ServicesP>
          <ServicesP2>Apr - Aug 2022</ServicesP2>
          {/**ServicesP2 is just another text but in a gray tone to include the date of the experience
           *
           */}
        </ServicesCard>
        <ServicesCard onClick={openModal}>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            {...orchata}
          />
          <ServicesIcon src={orchata_logo} />
          <ServicesH2>Orchata (YC S21)</ServicesH2>
          <ServicesP>Tech Intern</ServicesP>
          <ServicesP2>Nov 2021 - Mar 2022</ServicesP2>
        </ServicesCard>
        <ServicesCard onClick={openModal}>
          <Modal showModal={showModal} setShowModal={setShowModal} {...hpe} />
          <ServicesIcon src={hpe_logo} />
          <ServicesH2>Hewlett Packard Enterprise</ServicesH2>
          <ServicesP>Financial IT Developer Intern</ServicesP>
          <ServicesP2>Feb - Apr 2022</ServicesP2>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default ProfessionalExperience;
