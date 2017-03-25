// @flow

import React from 'react';

const style = {
  background: 'white',
  color: 'black',
  fontSize: '2em',
  padding: '1em',
  borderRadius: '4em',
  border: '2px solid blue',
};

export default ({ onClick }: { onClick: () => void}) => (
  <button onClick={onClick} style={style}>
    Add another alarm
  </button>
);
