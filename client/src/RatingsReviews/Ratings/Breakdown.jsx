import React from 'react';
import styled from 'styled-components';
import Bar from './Bar.jsx';
import CharBar from './CharBar.jsx';

function Breakdown(props) {
  return (
    <div>

      {!props.isLoaded && <p>loading . . .</p>}
      {props.isLoaded && (
        <BreakContainer>
          <div>
            {Math.round(100 * (parseInt(props.meta.recommended.true)
            / parseInt(props.totalRatings)))
            + "% of reviewers recommend this item."}
          </div>
          <div>
            <Bar star="5" percentage={(props.meta.ratings['5'] / props.totalRatings) * 100} />
            <Bar star="4" percentage={(props.meta.ratings['4'] / props.totalRatings) * 100} />
            <Bar star="3" percentage={(props.meta.ratings['3'] / props.totalRatings) * 100} />
            <Bar star="2" percentage={(props.meta.ratings['2'] / props.totalRatings) * 100} />
            <Bar star="1" percentage={(props.meta.ratings['1'] / props.totalRatings) * 100} />
          </div>
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
