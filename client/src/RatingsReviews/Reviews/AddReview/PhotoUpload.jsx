import React, { useState } from 'react';
import styled from 'styled-components';
import PhotoTile from './PhotoTile';

function PhotoUpload({
  onFileSelect, setUploaded, photosArray, addToArray, onDelete,
}) {
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file.type.match('image.*')) {
      // console.log('is an image');
      const reader = new FileReader();

      reader.onload = (evt) => {
        // console.log(evt.target.result, 'etargetresult');
        console.log(reader.result, 'reader.result');
        addToArray([...photosArray, reader.result]);
      };

      reader.readAsDataURL(file);
      // onFileSelect(file);
      // setUploaded(false);
    } else {
      alert('selected file is not a photo, try again');
      const x = document.getElementById('photoselect');
      x.value = '';
    }
  };

  const readFileAsUrl = (file) => new Promise((res, rej) => {
    const fr = new FileReader();

    fr.onload = () => {
      res(fr.result);
    };

    fr.onerror = () => {
      rej(fr);
    };

    fr.readAsDataURL(file);
  });

  const handleMultipleFiles = (e) => {
    const files = e.currentTarget.files;
    const readers = [];
    // Abort if there were no files selected
    if (!files.length) return;

    // Store promises in array
    for (let i = 0; i < files.length; i++) {
      readers.push(readFileAsUrl(files[i]));
    }
    // Trigger Promises
    Promise.all(readers).then((values) => {
      // Values will be an array that contains an item
      // with the text of every selected file
      // ["File1 Content", "File2 Content" ... "FileN Content"]
      console.log(values);
      addToArray(...photosArray, values);
    });
  }

  return (
    <div data-testid="photouploadform">
      {/* <input type="file" id="photoselect" onChange={handleFileInput} /> */}
      <input type="file" id="photoselect" onChange={handleMultipleFiles} multiple/>
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
  padding: 1%;
  margin: 1%;
`;

export default PhotoUpload;
