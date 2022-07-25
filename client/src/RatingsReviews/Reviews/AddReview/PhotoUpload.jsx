import React, { useState } from 'react';
import styled from 'styled-components';
import PhotoTile from './PhotoTile';

function PhotoUpload({
  onFileSelect, addUrl, uploaded, setUploaded, photosArray, addToArray, onDelete
}) {
  const handleFileInput = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = (evt) => {
      // console.log(evt.target.result);
      addToArray([...photosArray, evt.target.result]);
    };
    reader.readAsDataURL(file);
    onFileSelect(file);
    setUploaded(false);
  };

  return (
    <div data-testid="photouploadform">
      <input type="file" onChange={handleFileInput} />
      {(photosArray.length < 1) && (<div>please select a photo</div>)}
      <PhotoDiv>
        {(photosArray.length > 0)
        && (photosArray.map((photo, index) => (
          <PhotoTile key={index} value={index} photo={photo} onDelete={onDelete} />
        )))}
      </PhotoDiv>
    </div>
  );
}

const PhotoDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

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
