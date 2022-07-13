import React from 'react';
import styled from 'styled-components';

function Breakdown(props) {
  return (
    <div>

      {!props.isLoaded && <p>loading . . .</p>}
      {props.isLoaded && (
        <BreakContainer>
          {Math.round(100 * (parseInt(props.meta.recommended.true)
          / parseInt(props.totalRatings)))
          + "% of reviewers recommend this item."}
        </BreakContainer>
      )}
    </div>
  );
}

const BreakContainer = styled.div`
  display: block;
  font-size: x-small;
  font-weight: light;
  margin-top: 7%;
  width: 200px;
`

export default Breakdown;
