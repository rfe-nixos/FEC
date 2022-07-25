import React, { useState } from 'react';
import styled from 'styled-components';
import PhotoTile from './PhotoTile';

function PhotoUpload({
  onFileSelect, addUrl, uploaded, setUploaded, photosArray, addToArray,
}) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  // const [photosArray, setPhotosArray] = useState([]);
  // const reader = new FileReader();

  const handleFileInput = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = (evt) => {
      // console.log('loaded brah', reader.result);
      console.log(evt.target.result);
      // setPhotosArray([...photosArray, evt.target.result]);
      addToArray([...photosArray, evt.target.result]);
      // const img = new Image();
      // img.onload = () => {
      //   console.log('img loaded');
      //   setPhotosArray([...photosArray], img.src);
      // };
    };
    reader.readAsDataURL(file);
    setSelectedPhoto(file);
    onFileSelect(file);
    setUploaded(false);
  };

  const handlePhotoSelection = (e) => {
    const url = e.target.src;
    addUrl(url);
  };

  return (
    <div data-testid="photouploadform">
      <input type="file" onChange={handleFileInput} />
      {(!selectedPhoto) && (<div>please select a photo</div>)}
      <PhotoDiv>
        {(photosArray.length > 0)
        && (photosArray.map((photo, index) => (
          <PhotoTile key={index} photo={photo} />
        )))}
      </PhotoDiv>
    </div>
  );
}

const PhotoDiv = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledImg = styled.img`
  height: 60px;
  width: 60px;
  scale: auto;
  object-fit: cover;
  border: 1px solid #d9d9d9;
  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
`;

const StyledButton = styled.button`
  width: auto;
  max-width: 100px;
  font-size: small;
  margin: 1%;
  margin-right: 3%;
  padding: 0.25em 1em;
  border-radius: 3px;
  background: white;
  color: black;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
`;

export default PhotoUpload;
