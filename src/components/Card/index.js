import * as React from 'react';
import 'style!./style.css'

const Card = (props) => {
  const imageStyle = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover'
  };
  return (
    <figure className="b-card" onClick={props.onClick}>
      <div className="b-card-image" style={imageStyle}></div>
      <figcaption className="b-card-caption">{props.caption}</figcaption>
    </figure>
  );
}
export default Card;
