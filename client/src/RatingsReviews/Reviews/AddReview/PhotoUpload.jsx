import React, { useState } from 'react';
import styled from 'styled-components';
import PhotoTile from './PhotoTile';

function PhotoUpload({
  onFileSelect, setUploaded, photosArray, addToArray, onDelete
}) {
  const handleFileInput = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = (evt) => {
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

export default PhotoUpload;
