/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import styled from 'styled-components';

function ImageGallery(currentStyle) {
  let currentImage;

  const handleClick = (event) => {
    event.preventDefault();
    currentImage = event.target;
  };

  /* const StyledCarousel = styled.div`
    display: flex,
    flex-direction: column,
    width: 50px,
    height: 250px,
    border: solid black 5px
    `; */

  const galleryList = [];

  if (Object.keys(currentStyle.props).length > 0) {
    currentImage = <img src={currentStyle.props.photos[0].thumbnail_url} alt={currentStyle.props.name} className="currentImage" />;

    currentStyle.props.photos.forEach((photo) => {
      galleryList.push(
        <img src={photo.thumbnail_url} key={galleryList.length} alt={photo.name} onClick={handleClick} className="carousel" />,
      );
    });

    return (
      <div className="imagegallery">
        <div className="thumbnailView">
          <button className="button" type="button">left</button>
          {galleryList}
          <button className="button" type="button">right</button>
        </div>
        {currentImage}
      </div>
    );
  }
}

export default ImageGallery;
