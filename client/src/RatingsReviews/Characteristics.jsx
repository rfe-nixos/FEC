import React from 'react';

function Characteristics(props) {
  return (
    <div>
      {!props.isLoaded && <p>l o a d i n g . . .</p>}
      {props.isLoaded && (
        <div>
          loaded.
        </div>
      )}
    </div>
  );
}


export default Characteristics;