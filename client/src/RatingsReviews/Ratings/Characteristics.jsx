import React from 'react';
import styled from 'styled-components';
import CharBar from './CharBar';

function Characteristics(props) {
  return (
    <CharContainer>
      {!props.isLoaded && <p>l o a d i n g . . .</p>}
      {props.isLoaded && (
        <div>
          {props.meta.characteristics.Fit
          && (
          <CharBar
            rating={props.meta.characteristics.Fit.value}
            char="Fit"
            chars={['small', 'perfect', 'large']}
          />
          )}
          {props.meta.characteristics.Length
          && (
          <CharBar
            rating={props.meta.characteristics.Length.value}
            char="Length"
            chars={['short', 'perfect', 'long']}
          />
          )}
          {props.meta.characteristics.Comfort
          && (
          <CharBar
            rating={props.meta.characteristics.Comfort.value}
            char="Comfort"
            chars={['poor', 'ok', 'perfect']}
          />
          )}
          {props.meta.characteristics.Quality
          && (
          <CharBar
            rating={props.meta.characteristics.Quality.value}
            char="Quality"
            chars={['poor', 'expected', 'perfect']}
          />
          )}
          {props.meta.characteristics.Size
          && (
          <CharBar
            rating={props.meta.characteristics.Size.value}
            char="Size"
            chars={['small', 'perfect', 'large']}
          />
          )}
          {props.meta.characteristics.Width
          && (
          <CharBar
            rating={props.meta.characteristics.Width.value}
            char="Width"
            chars={['short', 'perfect', 'wide']}
          />
          )}
        </div>
      )}
    </CharContainer>
  );
}

const CharContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  font-size: small;
`;

export default Characteristics;
