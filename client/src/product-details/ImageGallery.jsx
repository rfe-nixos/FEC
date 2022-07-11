/* eslint-disable react/destructuring-assignment */
import React from 'react';

function ImageGallery(style) {
  const cssStyle = {
    width: 200,
  };
  const sideStyle = {
    width: 50,
    display: 'in-line',
  };
  let currentImage = <img src={style.props.gallery[0]} alt="style" style={cssStyle} />;
  const handleClick = (event) => {
    event.preventDefault();
    currentImage = event.target;
  };
  const galleryList = [];
  style.props.gallery.forEach((image) => (
    galleryList.push(
      <img key={galleryList.length} src={image} alt={style.props.title} style={sideStyle} onClick={handleClick} />
    )
  ));
  return (
    <div>
      {galleryList}
      {currentImage}
    </div>
  );
}

export default ImageGallery;
