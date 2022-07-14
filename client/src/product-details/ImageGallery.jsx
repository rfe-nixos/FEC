/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import styled from 'styled-components';

function ImageGallery({ currentStyle, currentImage, setCurrentImage }) {
  // let currentImage;
  // console.log(currentStyle, currentImage, setCurrentImage);

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
    console.log("Next Image!");
    setCurrentImage(event.target.src);
  };

  currentStyle.photos.forEach((photo) => {
    galleryList.push(
      <img src={photo.thumbnail_url} key={galleryList.length} alt={currentStyle.name} className="carousel" onClick={handleClick} />,
    );
  });

  return (
    <div className="imagegallery">
      <div className="thumbnailView">
        <button className="button" type="button">back</button>
        {galleryList}
        <button className="button" type="button">next</button>
      </div>
      {mainImage}
    </div>
  );
}

export default ImageGallery;
