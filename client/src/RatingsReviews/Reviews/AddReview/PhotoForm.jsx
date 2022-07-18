import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PhotoTile from './PhotoTile.jsx';
import PhotoUpload from './PhotoUpload.jsx';

function PhotoForm(props) {
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
        console.log('file upload success', res);
        props.addUrl(res.data.url);
        props.addPhoto(res.data);
        setSelectedPhoto(null); // reset selected photo.
      })
      .then(() => {
        console.log('turning off spinner');
        setShowSpinner(false);
        setUploaded(true);
      })
      .catch((err) => console.log('error uploading photo', err));
  };

  // const toggleSpinner = () => {
  //   !showSpinner ? setShowSpinner(true) : setShowSpinner(false);
  // };

  return (
    <StyledDiv>
      <PhotoUpload
        onFileSelect={(file) => {
          setSelectedPhoto(file);
          //addToArray((oldPhotos) => [...oldPhotos, file]);
        }}
        addUrl={props.addUrl}
        uploaded={uploaded}
        setUploaded={setUploaded}
      />
      {(selectedPhoto) && (<StyledButton onClick={uploadPhoto}>upload photo</StyledButton>)}
      {(showSpinner) && (<div><StyledImg id="spinner" src="public/icons/spinner.gif" /></div>)}
      <div>uploaded images:</div>
      {(props.photos.length > 0)
        && (props.photos.map((photo, index) => (
          <PhotoTile key={index} photo={photo} />
        )))}
    </StyledDiv>
  );
}

const StyledImg = styled.img`
  size: auto;
  max-height: 20px;
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
