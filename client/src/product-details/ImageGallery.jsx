/* eslint-disable no-else-return */
/* eslint-disable arrow-body-style */
/* eslint-disable radix */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React from 'react';
import Modal from './Modal';
// import styled from 'styled-components';

function ImageGallery({
  currentStyle, setCurrentImage, currentThumbnail, setCurrentThumbnail, modal, setModal, zoom, setZoom, modalZoom, setModalZoom,
}) {
  const defaultStyle = { cursor: zoom ? 'zoom-in' : 'auto' };
  const modalStyle = { cursor: modalZoom ? '-webkit-zoom-out' : 'zoom-in' };
  let style;
  if (modal === 'on') {
    style = modalStyle;
  } else {
    style = defaultStyle;
  }

  const galleryList = [];
  const currentIndex = parseInt(currentThumbnail);

  const handleImageGalleryModal = (event) => {
    event.preventDefault();
    setZoom(false);
    setModal('on');
  };

  const handleDefaultViewMouseEnter = (event) => {
    event.preventDefault();
    setZoom(true);
  };

  const handleDefaultViewMouseLeave = (event) => {
    event.preventDefault();
    setZoom(false);
  };
  const mainImage = <img src={currentStyle.photos[currentIndex].url} alt={currentStyle.name} className="currentImage" onClick={handleImageGalleryModal} onMouseEnter={handleDefaultViewMouseEnter} onMouseLeave={handleDefaultViewMouseLeave} style={style} />;

  const handleClick = (event) => {
    event.preventDefault();
    setCurrentImage(event.target.src);
    setCurrentThumbnail(event.target.alt);
  };

  for (let i = 0; i < currentStyle.photos.length; i += 1) {
    if (i === currentIndex) {
      galleryList.push(
        <div className="carousel" key={galleryList.length}>
          <img src={currentStyle.photos[i].thumbnail_url} alt={i} style={{ opacity: 0.7 }} onClick={handleClick} />
        </div>,
      );
    } else {
      galleryList.push(
        <div className="carousel" key={galleryList.length}>
          <img src={currentStyle.photos[i].thumbnail_url} alt={i} onClick={handleClick} />
        </div>,
      );
    }
  }
  console.log(galleryList.length);
  if (modal === 'on') {
    return <Modal mainImage={mainImage} galleryList={galleryList} setModal={setModal} modalZoom={modalZoom} setModalZoom={setModalZoom} />;
  } else if (galleryList.length > 7) {
    return (
      <div className="imagegallery">
        <div className="thumbnailView">
          <button className="button" type="button" style={{ float: 'left' }}>b</button>
          {galleryList.slice(0, 7)}
          <button className="button" type="button" style={{ float: 'right' }}>n</button>
        </div>
        <div className="mainImageContainer">
          {mainImage}
        </div>
      </div>
    );
  } else {
    return (
      <div className="imagegallery">
        <div className="thumbnailView">
          {galleryList}
        </div>
        <div className="mainImageContainer">
          {mainImage}
        </div>
      </div>
    );
  }
}

export default ImageGallery;
