import React from 'react';

function Characteristics(props) {
  return (
    <div>
      {!props.isLoaded && <p>l o a d i n g . . .</p>}
      {props.isLoaded && (
        <div>
          Comfort: {props.meta.characteristics.Comfort.value}<br />
          Length: {props.meta.characteristics.Length.value}<br />
          Quality: {props.meta.characteristics.Quality.value}<br />
          Fit: {props.meta.characteristics.Fit.value}
        </div>
      )}
    </div>
  );
}


export default Characteristics;