/* eslint-disable jsx-a11y/no-static-element-interactions */
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
  currentStyle, currentThumbnail, setCurrentThumbnail, modal, setModal, zoom, setZoom, modalZoom, setModalZoom, range, setRange,
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
    setCurrentThumbnail(event.target.alt);
  };

  const handlePrevClick = (event) => {
    event.preventDefault();
    if (range[0] - 7 < 0) {
      setRange([0, 7]);
    } else {
      setRange([range[0] - 7, range[0]]);
    }
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    if (range[1] + 7 > galleryList.length - 1) {
      setRange([range[1], galleryList.length - 1]);
    } else {
      setRange([range[1], range[1] + 7]);
    }
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

  // <div className="slider leftSlider">&#9001;</div>

  if (modal === 'on') {
    return <Modal mainImage={mainImage} galleryList={galleryList} setModal={setModal} modalZoom={modalZoom} setModalZoom={setModalZoom} range={range} setRange={setRange} handlePrevClick={handlePrevClick} handleNextClick={handleNextClick} />;
  } else if (galleryList.length > 7) {
    if (range[0] === 0) {
      return (
        <div className="imagegallery">
          <div className="thumbnailView">
            {galleryList.slice(range[0], range[1])}
            <div className="imageGalleryNext" onClick={handleNextClick}>&#9002;</div>
          </div>
          <div className="mainImageContainer">
            {mainImage}
          </div>
        </div>
      );
    } else if (range[1] === galleryList.length - 1) {
      return (
        <div className="imagegallery">
          <div className="thumbnailView">
            <div className="imageGalleryPrev" onClick={handlePrevClick}>&#9001;</div>
            {galleryList.slice(range[0], range[1])}
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
            <div className="imageGalleryPrev" onClick={handlePrevClick}>&#9001;</div>
            {galleryList.slice(range[0], range[1])}
            <div className="imageGalleryNext" onClick={handleNextClick}>&#9002;</div>
          </div>
          <div className="mainImageContainer">
            {mainImage}
          </div>
        </div>
      );
    }
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
