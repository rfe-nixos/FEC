import React from 'react';

class SortBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
    this.sort = this.sort.bind(this);
  }

  sort() {

  }

  render() {
    return (
      <div>
        {this.props.reviews.length} reviews, sorted by
        <select id="sort">
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="helpful">Helpful</option>
        </select>
      </div>
    )
  }
}

export default SortBar;


//renders
// a button to load more reviews
// a button to add a review.
