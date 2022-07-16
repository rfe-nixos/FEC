import React from 'react';
import { StyledModal, ModalOverlay } from './styles/list.styled.js';

function Comparison({ closeModal }) {
  return (
    <>
      <StyledModal>
        <div className="modal">
          <div className="modalHeader">
            <h2 className="title">Comparison</h2>
            <button className="close" type="button" onClick={() => closeModal(false)}>
              &times;
            </button>
          </div>
          <div className="modalBody">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos
          </div>
        </div>
      </StyledModal>
      <ModalOverlay>
        <div className="overlay" />
      </ModalOverlay>
    </>
  );
}

export default Comparison;
