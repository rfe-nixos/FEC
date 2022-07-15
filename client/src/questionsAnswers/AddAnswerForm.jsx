import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';

function AddAnswerForm({ show, setShowModal, questionId, questionBody, submitHandler, productName }) {
  if (!show) return null;

  const [isFormValid, setIsFormValid] = useState(true);
  const [emptyFields, setEmptyFields] = useState();
  const [invalidMessage, setInvalidMessage] = useState([]);
  const [formValue, setFormValue] = useState({});

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const fileChangeHandler = (e) => {
    const uploadedFile = Array.from(e.target.files);
    const newImages = formValue.photos ? [...formValue.photos] : [];
    newImages.push({
      name: uploadedFile[0].name,
      url: URL.createObjectURL(uploadedFile[0]),
    });
    setFormValue({
      ...formValue,
      photos: newImages,
    });
  };

  const inputs = [
    {
      config: {
        label: 'Your Answer',
        type: 'textarea',
        name: 'body',
        value: formValue.body,
        placeholder: '',
        maxLength: 1000,
        mandatory: true,
      },
      changeHandler: inputChangeHandler,
    },
    {
      config: {
        label: 'What is your nickname',
        type: 'text',
        name: 'name',
        value: formValue.name,
        placeholder: 'Example: jack543!',
        maxLength: 60,
        mandatory: true,
      },
      comment: 'For privacy reasons, do not use your full name or email address',
      changeHandler: inputChangeHandler,
    },
    {
      config: {
        label: 'Your email',
        type: 'email',
        name: 'email',
        value: formValue.email,
        placeholder: 'Example: jack@email.com',
        maxLength: 60,
        mandatory: true,
      },
      comment: 'For authentication reasons, you will not be emailed',
      changeHandler: inputChangeHandler,
    },
    {
      config: {
        label: 'Upload your photos (choose up to 5 photos)',
        type: 'file',
        name: 'photos',
        placeholder: '',
      },
      changeHandler: fileChangeHandler,
    },
  ];

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // TODO
  const validateFiles = () => {
    if (!formValue.photos) return true;
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    return formValue.photos.every((photo) => (
      allowedExtensions.exec(photo.name)
    ));
  };

  const validateForm = () => {
    let result = true;
    const invalid = [];
    inputs.forEach(({ config }) => {
      const target = config.name;
      if (Boolean(config.mandatory) && !formValue[target]) {
        if (target === 'body') {
          invalid.push('Question');
        }
        if (target === 'name') {
          invalid.push('Username');
        }
        if (target === 'email') {
          invalid.push('Email');
        }
        result = false;
      }
      if (config.type === 'email' && !validateEmail(formValue[config.name])) {
        setInvalidMessage([
          ...invalidMessage,
          'Email is invalid.',
        ]);
        result = false;
      }
      if (config.type === 'file' && !validateFiles(formValue[config.name])) {
        setInvalidMessage([
          ...invalidMessage,
          'uploaded image is invalid.',
        ]);
        result = false;
      }
    });
    setEmptyFields(invalid);
    setIsFormValid(result);
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    setEmptyFields([]);
    if (validateForm()) {
      submitHandler(formValue);
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    setFormValue({});
    setEmptyFields([]);
    setIsFormValid(true);
    setShowModal(false);
  };

  return (
    <Modal>
      <PopupForm id={`${questionId}-popup`}>
        <Header>
          <Title>Submit your Answer</Title>
          <Subtitle>{`${productName}:`}</Subtitle>
          <Subtitle>{questionBody}</Subtitle>
        </Header>
        {!isFormValid
        && (
        <Invalid>
          {Boolean(emptyFields.length)
          && (
            <li>
              You must enter the following:
              <ul>
                {emptyFields.map((field) => <li>{field}</li>)}
              </ul>
            </li>
          )}
          {invalidMessage.map((message) => <li>{message}</li>)}
        </Invalid>
        )}

        {inputs.map(({ config, comment, changeHandler }) => (
          <div>
            <FormInput
              key={config.name}
              attribute={config}
              changeHandler={changeHandler}
            />
            {comment && `*${comment}`}
            {config.name === 'photos'
            && (
              <ThumbnailContainer>
                {!formValue.photos && <p>No files selected.</p>}
                {formValue.photos && formValue.photos.map((photo) => (
                  <FlexRowDiv>
                    <div style={{ width: '50%' }}>
                      <Thumbnail
                        className="obj"
                        key={photo.url}
                        src={photo.url}
                      />
                    </div>
                    <div style={{ width: '50%' }}>
                      {photo.name}
                    </div>
                  </FlexRowDiv>
                ))}
              </ThumbnailContainer>
            )}
          </div>
        ))}
        <DivButton className="form-buttons">
          <ButtonStyled type="submit" onClick={handleSubmit} data-testid="form-button-test">
            Submit
          </ButtonStyled>
          <ButtonStyled onClick={handleClose}>
            Close
          </ButtonStyled>
        </DivButton>
      </PopupForm>
    </Modal>
  );
}

export default AddAnswerForm;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 9998;
  transition: all .3s ease;
  background-color: rgba(0,0,0,.7);
  overflow: auto;
`;

const PopupForm = styled.form`
  position: relative;
  max-width: 51.0714285714rem;
  width: 60%;
  margin: 5vh auto;
  padding: 1.7142857143rem 1.1428571429rem;
  background-color: #fff;
  border-radius: .2857142857rem;
`;

const ButtonStyled = styled.button`
  padding: 2px;
  width: 30%;
  margin: 20px 0;
  border-radius: 1px;
`;

const DivButton = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Header = styled.div`
  margin-bottom: 10px;
`;
const Title = styled.div`
  font-size: 1.5rem;
  padding: 10px 0;
`;

const Subtitle = styled.div`
  font-size: 1.1rem;
  padding: 2px 0;
`;

const Invalid = styled.ul`
  color: red;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const Thumbnail = styled.img`
  max-width:100px;
  max-height: 100px;
  padding-right:10px;
`;

const FlexRowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const PaddedDiv = styled.div`
  padding: 10px;
  margin: 10px;
`;
