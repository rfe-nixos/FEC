import React from 'react';

function Breakdown(props) {
  return (
    <div>
      {!props.isLoaded && <p>loading . . .</p>}
      {props.isLoaded && (
        <div>
          {Math.round(100 * (parseInt(props.meta.recommended.true)
          / parseInt(props.totalRatings)))
          + "% of buyers recommend this item."}
        </div>
      )}
    </div>
  );
}

export default Breakdown;
