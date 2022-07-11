import React from 'react';

function ImageGallery(gallery) {
  return (
    <div>

      <div id="image-carousel">
        <div className="carouselItem">{gallery}</div>
      </div>

      <div id="image">
        <img src={gallery} alt="style" />
      </div>

    </div>
  );
}

export default ImageGallery;
