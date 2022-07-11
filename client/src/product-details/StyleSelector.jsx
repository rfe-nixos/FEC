/* eslint-disable react/destructuring-assignment */
import React from 'react';

function StyleSelector(styles) {
  const styleList = styles.forEach((style) => (
    <div key={style.title}>
      <p>{style.title}</p>
      <img src={style.thumbnail} alt={style.title} />
    </div>
  ));
  return <div>{styleList}</div>;
}

export default StyleSelector;
