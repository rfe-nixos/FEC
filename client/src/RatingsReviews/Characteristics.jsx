import React from 'react';

function Characteristics(props) {
  return (
    <div>
      {!props.isLoaded && <p>l o a d i n g . . .</p>}
      {props.isLoaded && (
        <div>
          Comfort: {parseFloat(props.meta.characteristics.Comfort.value).toFixed(2)}<br />
          Length: {parseFloat(props.meta.characteristics.Length.value).toFixed(2)}<br />
          Quality: {parseFloat(props.meta.characteristics.Quality.value).toFixed(2)}<br />
          Fit: {parseFloat(props.meta.characteristics.Fit.value).toFixed(2)}
        </div>
      )}
    </div>
  );
}


export default Characteristics;