import React, { Fragment, useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </Fragment>
  );
}

export default Counter;
