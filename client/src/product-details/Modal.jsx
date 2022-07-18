/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable arrow-body-style */
/* eslint-disable radix */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React from 'react';
// import styled from 'styled-components';

function Modal({
  mainImage, galleryList, setModal, modalZoom, setModalZoom,
}) {
  const handleImageGalleryModalClose = (event) => {
    event.preventDefault();
    setModalZoom(false);
    setModal('off');
  };

  const handleModalClick = (event) => {
    event.preventDefault();
    setModalZoom((modalZoom) => !modalZoom);
  };

  return (
    <div className="imageGalleryModal">
      <button className="closeImageGalleryModal" type="button" onClick={handleImageGalleryModalClose}>X</button>
      <div className="thumbnailView">
        {galleryList}
      </div>
      <div className="mainImageContainerModal" onClick={handleModalClick} style={{ 'max-width': modalZoom ? 2500 : 1000, 'min-width': modalZoom ? 2000 : 800 }}>
        {mainImage}
      </div>
    </div>
  );
};

export default Modal;
