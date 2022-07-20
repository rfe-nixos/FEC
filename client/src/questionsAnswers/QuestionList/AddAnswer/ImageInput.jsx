import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from '../../components/FormInput';
import UploadedImages from './UploadedImages';

export default function ImageInput({ formValue, setFormValue, testFunc }) {
  const [imageInvalid, setImageInvalid] = useState(false);
  const reader = new FileReader();

  const fileChangeHandler = (e) => {
    if (!e.target.files[0]) return;
    const uploadedFile = e.target.files[0];
    e.target.value = '';

    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const newImages = formValue.photos ? [...formValue.photos] : [];
        newImages.push({
          name: uploadedFile.name,
          file: img.src,
        });
        setFormValue({
          ...formValue,
          photos: newImages,
        });
        setImageInvalid(false);
      };
      img.onerror = () => {
        testFunc();
        setImageInvalid(true);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(uploadedFile);
  };

  const resetPhotos = (photos) => {
    setFormValue({
      ...formValue,
      photos,
    });
  };

  return (
    <div>
      {(!formValue.photos || formValue.photos.length < 5)
      && (
        <label>
          <FormInput
            attribute={{
              label: 'Upload your photos (choose up to 5 photos)',
              type: 'file',
              name: 'photos',
              placeholder: '',
              id: 'image-input',
              'data-testid': 'image-input',
              style: { display: 'none' },
              onChange: fileChangeHandler,
            }}
          />
          <StyledDivButton data-testid="photo-uploader">Select photo</StyledDivButton>
          {imageInvalid && <div style={{ color: 'red' }}>Invalid image content.</div> }
        </label>
      )}
      <UploadedImages
        photos={formValue.photos}
        resetPhotos={resetPhotos}
      />
    </div>
  );
}

const StyledDivButton = styled.div`
  max-width: 80px;
  margin: 1%;
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