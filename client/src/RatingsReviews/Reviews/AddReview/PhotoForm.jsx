import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PhotoTile from './PhotoTile';
import PhotoUpload from './PhotoUpload';

function PhotoForm({ photos, addPhoto, addUrl }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photosArray, addToArray] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const url = 'https://api.cloudinary.com/v1_1/joehan/image/upload';

  const uploadPhoto = () => {
    setShowSpinner(true);
    const fd = new FormData();
    fd.append('upload_preset', 'upload1');
    fd.append('file', selectedPhoto);
    const config = {
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    };
    axios.post(url, fd, config)
      .then((res) => {
        // console.log('file upload success', res);
        addUrl(res.data.url);
        addPhoto(res.data);
        setSelectedPhoto(null); // reset selected photo.
      })
      .then(() => {
        setShowSpinner(false);
        setUploaded(true);
      })
      .catch((err) => console.log('error uploading photo', err));
  };

  return (
    <StyledDiv>
      <PhotoUpload
        onFileSelect={(file) => {
          setSelectedPhoto(file);
          addToArray([...photosArray, file]);
        }}
        addUrl={addUrl}
        uploaded={uploaded}
        setUploaded={setUploaded}
        addPhoto={addPhoto}
        addToArray={addToArray}
      />
      {(selectedPhoto) && (<StyledButton onClick={uploadPhoto}>upload photo</StyledButton>)}
      {(showSpinner) && (<div><Spinner id="spinner" src="public/icons/spinner.gif" /></div>)}
      {/* <div>uploaded images:</div> */}
      {/* {(photosArray.length > 0)
        && (photosArray.map((photo, index) => (
          <PhotoTile key={index} photo={photo} />
        )))} */}
    </StyledDiv>
  );
}

const Spinner = styled.img`
  size: auto;
  max-height: 60px;
  background-color: transparent;
`;

const StyledButton = styled.button`
  width: auto;
  max-width: 180px;
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

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2%;
  margin-left: 2%;
  width: 80%;
`;

export default PhotoForm;
