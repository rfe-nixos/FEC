import React, { useRef, useState } from 'react';
import PhotoTile from './PhotoTile.jsx';
import PhotoUpload from './PhotoUpload.jsx';
import styled from 'styled-components';
import axios from 'axios';

function PhotoForm(props) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photosArray, addToArray] = useState([]);

  const url = "https://api.cloudinary.com/v1_1/joehan/image/upload"
  const api_key = "481542639533787"

  const uploadPhoto = () => {
    var fd = new FormData();
    fd.append('upload_preset', 'upload1');
    fd.append('file', selectedPhoto);
    const config = {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    };
    axios.post(url, fd, config)
      .then((res) => {
        console.log('file upload success', res);
        props.addUrl(res.data.url);
      })
      .catch((err) => console.log('error uploading photo', err));
  }

  return (
    <StyledDiv>
      <PhotoUpload
        onFileSelect={(file) => {
          setSelectedPhoto(file);
          addToArray(oldPhotos => [...oldPhotos, file]);
          props.addPhoto(file);
        }}
        addUrl={props.addUrl}
       />
      {(props.photos.length > 0) &&
        (props.photos.map((photo, index) => (
          <PhotoTile key={index} photo={photo} />
        )))
      }
      <button onClick={uploadPhoto}>submit</button>

    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2%;
  margin-left: 2%;
  width: 80%;
`

export default PhotoForm;