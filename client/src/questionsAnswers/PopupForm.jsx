// takes in type props
// and populates form depnding on type
import React from 'react';
import styled from 'styled-components';
import Form from './Form';

const Popup = styled.div`
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  position: fixed;
  background-color: #fefefe;
  left: 25%;
  top: 10%;
  justify-content: center;
  align-items: center;
  display: none;
`;

function PopupForm({ config, id, header, submitHandler }) {
  return (
    <Popup className="popup" id={`${id}-popup`} data-testid="popup-test">
      <Form formConfig={config} submitHandler={submitHandler} id={id} header={header} />
    </Popup>
  );
}

export default PopupForm;
