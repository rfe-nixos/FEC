import React, { useState } from 'react';
import styled from 'styled-components';

function PhotoUpload({
  onFileSelect, addUrl, uploaded, setUploaded,
}) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    setSelectedPhoto(file);
    onFileSelect(file);
    setUploaded(false);
  };

  const handlePhotoSelection = (e) => {
    const url = e.target.src;
    addUrl(url);
  };

  return (
    <div>
      <input type="file" onChange={handleFileInput} />
      {(!selectedPhoto) && (<div>please select a photo</div>)}
      {(selectedPhoto && !uploaded) && (
      <div>
        {selectedPhoto.name}
        , click button below to upload
      </div>
      )}
      {(!selectedPhoto) && (
      <div>
        <div> or select from the following: </div>
        <StyledImg onClick={handlePhotoSelection} src="https://res.cloudinary.com/joehan/image/upload/v1658003181/o0t1cymcaggj2g3hgbjj.jpg" />
        <StyledImg onClick={handlePhotoSelection} src="https://media.gq.com/photos/619d44c7f3b9613312e5a58d/16:9/w_2560%2Cc_limit/story%2520dnc%2520259207888_4588755407868444_1734975685078234037_n.jpeg" />
        <StyledImg onClick={handlePhotoSelection} src="https://cdn.whatsonthestar.com/uploads/t_20200708145548.jpg" />
        <StyledImg onClick={handlePhotoSelection} src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Michael_Jordan_crying.jpg/220px-Michael_Jordan_crying.jpg" />
        <StyledImg onClick={handlePhotoSelection} src="https://6.viki.io/image/04e3e839af9d4fcd937661fe2bc1e1cf/dummy.jpeg?s=900x600&e=t" />
      </div>
      )}
    </div>
  );
}

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
