/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import styled from 'styled-components';

function ImageGallery(style) {
  let currentImage = <img src={style.props.gallery[0]} alt="style" className="currentImage" />;

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

  style.props.gallery.forEach((image) => {
    galleryList.push(
      <img src={image} key={galleryList.length} alt={style.props.title} onClick={handleClick} className="carousel" />,
    );
  });

  return (
    <div className="imagegallery">
      <div>
        <button className="button" type="button">left</button>
        {galleryList}
        <button className="button" type="button">right</button>
      </div>
      {currentImage}
    </div>
  );
}

export default ImageGallery;
