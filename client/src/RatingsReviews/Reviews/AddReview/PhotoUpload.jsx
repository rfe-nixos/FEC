import React, {useRef} from 'react';
import styled from 'styled-components';

function PhotoUpload ({ onFileSelect }) {
  const fileInput = useRef(null)

  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    onFileSelect(e.target.files[0])
  };

  return (
    <div className="file-uploader">
        <input type="file" onChange={handleFileInput} />
    </div>
  )
}

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