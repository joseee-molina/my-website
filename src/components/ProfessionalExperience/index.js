import React, { useState } from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
  subtitleP,
} from "./ProfessionalExperienceElements.js";
import niq_logo from "../../images/niq_logo.png";
import orchata_logo from "../../images/orchata_logo.png";
import hpe_logo from "../../images/hpe_logo.png";

import { ModalUnmuted } from "../ModalUnmuted/ModalUnmuted.js";
import { Modal } from "../Modal/Modal.js";
import { nielseniq, byow, erisc, deques, dco, ctg } from "../Modal/Data";

const ProfessionalExperience = () => {
  //hi
  //this is a comment
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
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            {...nielseniq}
          />
          <ServicesIcon src={niq_logo} />
          <ServicesH2>NielsenIQ</ServicesH2>
          <ServicesP>Software Engineer</ServicesP>
        </ServicesCard>
        <ServicesCard onClick={openModal}>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            {...nielseniq}
          />
          <ServicesIcon src={orchata_logo} />
          <ServicesH2>Orchata</ServicesH2>
          <ServicesP>Tech Intern</ServicesP>
        </ServicesCard>
        <ServicesCard onClick={openModal}>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            {...nielseniq}
          />
          <ServicesIcon src={hpe_logo} />
          <ServicesH2>Hewlett Packard Enterprise</ServicesH2>
          <ServicesP>Financial IT Developer Intern</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default ProfessionalExperience;
