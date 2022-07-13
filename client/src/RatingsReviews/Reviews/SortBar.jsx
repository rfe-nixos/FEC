import React from 'react';

function SortBar(props) {
  const sort = (e) => {
    props.sort(e.target.value);
  }

  return (
    <div>
      <b>{props.reviews.length} reviews, sorted by </b>
      <select id="sort" onChange={sort}>
        <option value="relevance">Relevance</option>
        <option value="newest">Newest</option>
        <option value="helpful">Helpfulness</option>
      </select>
    </div>
  )
}
export default SortBar;