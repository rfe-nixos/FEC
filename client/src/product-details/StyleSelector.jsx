/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function StyleSelector({ styles, currentStyle }) {
  const handleClick = (event) => {
    event.preventDefault();
  };

  const styleList = [];
  // <p>{style.name}</p>

  styles.forEach((style) => (
    styleList.push(
      <div key={style.name} className="styleOption">
        <img src={style.photos[0].thumbnail_url} alt={style.name} onClick={handleClick} />
      </div>,
    )
  ));

  return <div className="styleSelector">{styleList}</div>;
}

export default StyleSelector;
