import styled from 'styled-components';

export const StyledList = styled.div`
  display: grid;
  margin-top: 5em;
  margin-bottom: 5em;
  grid-template-columns: repeat(auto-fit, minmax(auto, 200px));
  grid-template-rows: repeat(auto-fit, minmax(12rem, auto));
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  .slider {
    background-color: gray;
    position: absolute;
    z-index: 1.5;
    background: none;
    border: none;
    font-size: 1.5rem;
    top: 50%;
    cursor: pointer;
    border-radius: 0.25rem;
  }
  .leftSlider {
    left: 2.5rem;
  }
  .rightSlider {
    right: 2.5rem;
  }
`;

export const StyledCard = styled.div`
  font-size: 1rem;
  background: white;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  overflow: hidden;
  .cardBody {
    padding: 0.5rem;
    padding-top: 0;
  }
  .cardHeader {
    position: relative;
  }
  .cardImage {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 13;
    object-fit: cover;
    object-position: center;
    max-height: 200%;
    padding: 0;
    transition: all 400ms;
  }
  .cardImage:hover {
    transform: scale(1.05);
  }
  .relatedAction {
    position: absolute;
    padding: 0.25rem;
    z-index: 3;
    right: 0;
    top: 0;
    color: gold;
  }
  .relatedAction:hover {
    color: yellow;
    cursor: pointer;
  }
  .btn {
    position: absolute;
    z-index: 1.5;
    background: none;
    border: none;
    font-size: 1.5rem;
    top: 50%;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    //transform: translateY(-50%)
  }
  .btn:hover,
  .btn:focus {
    color: white;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .btn:focus {
    outline: 1px solid black;
  }

  .btnRight {
    right: 0.25rem;
  }
  .btnLeft {
    left: 0.25rem;
  }
`;

export const StyledModal = styled.div`
position: : absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border: 1px solid black;
border-radius: 1rem;
z-index: 10;
background-color: white;
width: 500px;
max-width:80%;
background-color: white;
.modalHeader {
  padding:10 15px;
  display: flex;
  justify-content:space-between;
  border-bottom: 1px solid black;
  align-items:center;
  padding: 5px 15px;
}
.close {
font-size: 1em;
cursor: pointer;
font-weight: bold;
border:none;
background: none;
outline:none
}
.modalBody {
  padding: 10px 15px;
}
`;

export const ModalOverlay = styled.div`
  position: fixed;
  opacity:0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: white;
`;
