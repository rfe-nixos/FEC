import React from 'react';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {}
    }
  }

  render() {
    return (
      <div>
        here is a reviewTile
      </div>
    )
  }
}

export default ReviewTile;

//renders
// a single review entry
//which contains
// rating,
// review title
// review body
// recommend
// helpful/report
