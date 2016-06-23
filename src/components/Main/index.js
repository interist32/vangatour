import * as React from 'react';
import 'style!../../styles/common.css';

const Main = (props) => {
  return <div>
  {React.cloneElement(props.children, Object.assign({}, props, {key: undefined, ref: undefined}))}
  </div>;
}

export default Main;
