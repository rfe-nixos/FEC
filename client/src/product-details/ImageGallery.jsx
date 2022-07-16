/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React from 'react';
// import styled from 'styled-components';

function ImageGallery({ currentStyle, currentImage, setCurrentImage, currentThumbnail, setCurrentThumbnail }) {
  /* const StyledCarousel = styled.div`
    display: flex,
    flex-direction: column,
    width: 50px,
    height: 250px,
    border: solid black 5px
    `; */

  const galleryList = [];

  const mainImage = <img src={currentImage} alt={currentStyle.name} className="currentImage" />;

  const handleClick = (event) => {
    event.preventDefault();
    // console.log('click!');
    setCurrentImage(event.target.src);
    setCurrentThumbnail(event.target.alt);
  };

  for (let i = 0; i < currentStyle.photos.length; i += 1) {
    // console.log(i, currentThumbnail);
    if (i === parseInt(currentThumbnail)) {
      galleryList.push(
        <div className="carousel" key={galleryList.length}>
          <img src={currentStyle.photos[i].thumbnail_url} alt={currentStyle.name} style={{ opacity: 0.7 }} onClick={handleClick} />
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

  if (galleryList.length > 7) {
    return (
      <div className="imagegallery">
        <div className="thumbnailView">
          <button className="button" type="button">back</button>
          {galleryList}
          <button className="button" type="button">next</button>
        </div>
        <div className="mainImageContainer">
          {mainImage}
        </div>
      </div>
    );
  }
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

export default ImageGallery;
