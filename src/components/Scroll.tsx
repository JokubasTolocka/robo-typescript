import * as React from 'react';

//Props.children will be JSX elements
//question mark makes it so it may not be children
type Props = {
  children?: JSX.Element
}

const Scroll = (props: Props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;