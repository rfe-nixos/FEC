/* eslint-disable react/prop-types */
/* eslint-disable radix */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function StyleSelector({ styles, currentStyle, setCurrentStyle }) {
  const handleClick = (event) => {
    event.preventDefault();
    const styleList = Object.values(styles);
    let newStyle;
    styleList.forEach((style) => {
      if (style.style_id === parseInt(event.target.alt)) {
        newStyle = style;
      }
    });
    setCurrentStyle(newStyle);
  };

  const styleList = [];

  styles.forEach((style) => (
    styleList.push(
      <div key={style.name} className="styleOption" onClick={handleClick}>
        <img src={style.photos[0].thumbnail_url} alt={style.style_id} />
      </div>,
    )
  ));

  return (
    <div className="styleSelector">
      <p className="currentStyleSelector">{currentStyle.name}</p>
      {styleList}
    </div>
  );
}

export default StyleSelector;
