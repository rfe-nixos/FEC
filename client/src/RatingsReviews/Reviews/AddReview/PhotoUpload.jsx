import React, {useRef} from 'react';
import styled from 'styled-components';

function PhotoUpload ({ onFileSelect, addUrl }) {
  const fileInput = useRef(null)

  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    onFileSelect(e.target.files[0])
  };

  const handlePhotoSelection = (e) => {
    const url = e.target.src;
    addUrl(url);
  }

  return (
    <div>
        <input type="file" onChange={handleFileInput} />
        <div> or select from the following: </div>
        <StyledImg onClick={handlePhotoSelection} src="https://www.imcgrupo.com/wp-content/uploads/2021/06/This-True-IU-Kpop-Story-Will-Inspire-You-02.jpeg" />
        <StyledImg onClick={handlePhotoSelection} src="https://media.gq.com/photos/619d44c7f3b9613312e5a58d/16:9/w_2560%2Cc_limit/story%2520dnc%2520259207888_4588755407868444_1734975685078234037_n.jpeg" />
        <StyledImg onClick={handlePhotoSelection} src="https://cdn.whatsonthestar.com/uploads/t_20200708145548.jpg" />
        <StyledImg onClick={handlePhotoSelection} src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Michael_Jordan_crying.jpg/220px-Michael_Jordan_crying.jpg" />
    </div>
  )
}

const StyledImg = styled.img`
  max-height: 60px;
  scale: auto;
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