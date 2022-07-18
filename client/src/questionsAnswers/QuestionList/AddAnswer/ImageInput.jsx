import React, { useState } from 'react';
import FormInput from '../../components/FormInput';
import UploadedImages from './UploadedImages';

export default function ImageInput({ formValue, setFormValue }) {
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
        <>
          <FormInput
            attribute={{
              label: 'Upload your photos (choose up to 5 photos)',
              type: 'file',
              name: 'photos',
              placeholder: '',
              id: 'image-input',
              style: { color: 'transparent' },
            }}
            changeHandler={fileChangeHandler}
          />
          {imageInvalid && <div style={{ color: 'red' }}>Invalid image content.</div> }
        </>
      )}
      <UploadedImages
        photos={formValue.photos}
        resetPhotos={resetPhotos}
      />
    </div>
  );
}
