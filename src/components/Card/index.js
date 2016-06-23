import * as React from 'react';

const Card = (props) => {
  return (<div onClick={props.onClick}>
    <h4>{props.caption}</h4>
    <img src={props.url} />
    </div>);
  }
  export default Card;
