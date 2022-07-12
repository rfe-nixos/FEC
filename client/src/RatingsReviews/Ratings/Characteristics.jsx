import React from 'react';

function Characteristics(props) {
  return (
    <div>
      {`____________________________`}<br />
      {!props.isLoaded && <p>l o a d i n g . . .</p>}
      {props.isLoaded && (
        <div>
          <b>Comfort:</b> {parseFloat(props.meta.characteristics.Comfort.value).toFixed(2)}<br />
          <b>Length:</b> {parseFloat(props.meta.characteristics.Length.value).toFixed(2)}<br />
          <b>Quality:</b> {parseFloat(props.meta.characteristics.Quality.value).toFixed(2)}<br />
          <b>Fit:</b> {parseFloat(props.meta.characteristics.Fit.value).toFixed(2)}
        </div>
      )}
    </div>
  );
}


export default Characteristics;