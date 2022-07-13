import React from 'react';
import styled from 'styled-components';

function Characteristics(props) {
  return (
    <CharContainer>
      {!props.isLoaded && <p>l o a d i n g . . .</p>}
      {props.isLoaded && (
        <div>
          <b>Comfort:</b> {parseFloat(props.meta.characteristics.Comfort.value).toFixed(2)}<br />
          <b>Length:</b> {parseFloat(props.meta.characteristics.Length.value).toFixed(2)}<br />
          <b>Quality:</b> {parseFloat(props.meta.characteristics.Quality.value).toFixed(2)}<br />
          <b>Fit:</b> {parseFloat(props.meta.characteristics.Fit.value).toFixed(2)}
        </div>
      )}
    </CharContainer>
  );
}

const CharContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
`


export default Characteristics;