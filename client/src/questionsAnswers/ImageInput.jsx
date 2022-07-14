import React, { useState } from 'react';
import styled from 'styled-components';

const ThumbnailContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Thumbnail = styled.img`
  max-height:50px;
  max-width:50px;
  padding-right:10px;
`;

function ImageInput({ setImageForm }) {
  const [images, setImages] = useState([]);
  // const [fileLimit, setFileLimit] = useState(false);

  const handleChange = (e) => {
    const uploadedFile = Array.from(e.target.files);
    // declare new array with copied existing images
    const newImages = [...images];
    newImages.push(URL.createObjectURL(uploadedFile[0]));
    // convert them into objectURL
    // push each to images

    console.log(newImages);
    setImages(newImages);
    setImageForm(newImages);
  };

  const handleClick = (e) => {
    document.getElementById('file-elem').click();
    e.preventDefault();
  };

  // useEffect(() => {
  //   return () => URL.revokeObjectURL()
  // }, [setImages]);

  return (
    <div id="images">
      {images.length < 5
        && (
        <div>
          Choose up to 5 photos.
          <input
            type="file"
            name="image"
            id="file-elem"
            accept="image/png, image/jpeg"
            onChange={handleChange}
            style={{ display: 'none' }}
          />
          <a href="#" id="file-select" onClick={handleClick}>
            Select some files
          </a>
        </div>
        )}
      <ThumbnailContainer id="file-list">
        {!images.length && <p>No files selected.</p>}
        {images.map((image) => (
          <Thumbnail
            className="obj"
            key={image}
            src={image}
          />
        ))}
      </ThumbnailContainer>
    </div>
  );
}

export default ImageInput;
