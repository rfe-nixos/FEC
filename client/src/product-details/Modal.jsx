/* eslint-disable no-else-return */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable arrow-body-style */
/* eslint-disable radix */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React from 'react';

function Modal({
  mainImage, galleryList, setModal, modalZoom, setModalZoom, range, handlePrevClick, handleNextClick,
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

  if (galleryList.length > 7) {
    if (range[0] === 0) {
      return (
        <div className="imageGalleryModal">
          <div className="closeImageGalleryModal">
            <button type="button" onClick={handleImageGalleryModalClose}>X</button>
          </div>
          <div className="thumbnailView">
            {galleryList.slice(range[0], range[1])}
            <div style={{ float: 'right', margin: 10, width: 20, color: 'white' }} onClick={handleNextClick}>&#9002;</div>
          </div>
          <div className="mainImageContainerModal" onClick={handleModalClick} style={{ maxWidth: modalZoom ? 2500 : 1000, minWidth: modalZoom ? 2000 : 800 }}>
            {mainImage}
          </div>
        </div>
      );
    } else if (range[1] === galleryList.length - 1) {
      return (
        <div className="imageGalleryModal">
          <div className="closeImageGalleryModal">
            <button type="button" onClick={handleImageGalleryModalClose}>X</button>
          </div>
          <div className="thumbnailView">
            <div style={{ float: 'left', margin: 10, width: 20, color: 'white' }} onClick={handlePrevClick}>&#9001;</div>
            {galleryList.slice(range[0], range[1])}
          </div>
          <div className="mainImageContainerModal" onClick={handleModalClick} style={{ maxWidth: modalZoom ? 2500 : 1000, minWidth: modalZoom ? 2000 : 800 }}>
            {mainImage}
          </div>
        </div>
      );
    } else {
      return (
        <div className="imageGalleryModal">
          <div className="closeImageGalleryModal">
            <button type="button" onClick={handleImageGalleryModalClose}>X</button>
          </div>
          <div className="thumbnailView">
            <div style={{ float: 'left', margin: 10, width: 20, color: 'white' }} onClick={handlePrevClick}>&#9001;</div>
            {galleryList.slice(range[0], range[1])}
            <div style={{ float: 'right', margin: 10, width: 20, color: 'white' }} onClick={handleNextClick}>&#9002;</div>
          </div>
          <div className="mainImageContainerModal" onClick={handleModalClick} style={{ maxWidth: modalZoom ? 2500 : 1000, minWidth: modalZoom ? 2000 : 800 }}>
            {mainImage}
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="imageGalleryModal">
        <div className="closeImageGalleryModal">
          <button type="button" onClick={handleImageGalleryModalClose}>X</button>
        </div>
        <div className="thumbnailView">
          {galleryList}
        </div>
        <div className="mainImageContainerModal" onClick={handleModalClick} style={{ maxWidth: modalZoom ? 2500 : 1000, minWidth: modalZoom ? 2000 : 800 }}>
          {mainImage}
        </div>
      </div>
    );
  }
}

export default Modal;
