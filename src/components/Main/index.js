import * as React from 'react';

const Main = (props) => {
  return <div>
  <h1>Vanga Tour</h1>
  {React.cloneElement(props.children, Object.assign({}, props, {key: undefined, ref: undefined}))}
</div>;
}

export default Main;
