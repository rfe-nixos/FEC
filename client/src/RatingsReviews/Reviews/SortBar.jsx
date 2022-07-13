import React from 'react';

function SortBar(props) {
  const sort = (e) => {
    props.sort(e.target.value);
  }

  return (
    <div>
      {props.reviews.length} reviews, sorted by
      <select id="sort" onChange={sort}>
        <option value="relevance">Relevance</option>
        <option value="newest">Newest</option>
        <option value="helpful">Helpful</option>
      </select>
    </div>
  )
}
export default SortBar;