import React, { useRef, useState } from 'react';
import PhotoTile from './PhotoTile.jsx';
import PhotoUpload from './PhotoUpload.jsx';
import styled from 'styled-components';

function PhotoForm(props) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photosArray, addToArray] = useState([]);

  return (
    <StyledDiv>
      <PhotoUpload
        onFileSelect={(file) => {
          setSelectedPhoto(file);
          addToArray(oldPhotos => [...oldPhotos, file]);
          props.addPhoto(file);
          //console.log(URL.createObjectURL(file));
        }
        }
       />
      {(props.photos.length > 0) &&
        (props.photos.map((photo, index) => (
          <PhotoTile key={index} photo={photo} />
        )))
      }

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