/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function StyleSelector(styles) {
  const handleClick = (event) => {
    event.preventDefault();
  };

  const styleList = [];

  styles.props.forEach((style) => (
    styleList.push(
      <div key={style.title} className="styleOption">
        <p>{style.title}</p>
        <img src={style.gallery[0]} alt={style.title} onClick={handleClick} />
      </div>,
    )
  ));

  return <div className="styleSelector">{styleList}</div>;
}

export default StyleSelector;
