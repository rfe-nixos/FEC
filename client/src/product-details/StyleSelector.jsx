/* eslint-disable react/destructuring-assignment */
import React from 'react';

function StyleSelector(styles) {
  const cssStyle = {
    width: 50,
  };
  const styleList = [];
  styles.props.forEach((style) => (
    styleList.push(
      <div key={style.title} className="styleOption">
        <p>{style.title}</p>
        <img src={style.gallery[0]} alt={style.title} style={cssStyle} />
      </div>,
    )
  ));
  return <div className="styleSelector">{styleList}</div>;
}

export default StyleSelector;
