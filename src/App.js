import './App.css';
import React, { useState, useCallback } from 'react';
import Child from './Child';

function App() {
  const [count, setCount] = useState(0);
  const [parentCount, setParentCount] = useState(0);

  // useCallbackを使用して関数をメモ化する
  const increment = useCallback(() => {
    console.log('increment function is called');
    setCount((prevCount) => prevCount + 1);
  }, []);

  // useCallbackを使用しない関数
  const incrementWithoutCallback = () => {
    console.log('incrementWithoutCallback function is called');
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>React Hooks Tutorial</h1>
      <hr />
      <h2>useCallback</h2>
      <p>Parent Count: {parentCount}</p>
      <button onClick={() => setParentCount(parentCount + 1)}>Increment Parent Count</button>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment with useCallback</button>
      <button onClick={incrementWithoutCallback}>Increment without useCallback</button>
      <Child onIncrement={increment} label="With useCallback" />
      <Child onIncrement={incrementWithoutCallback} label="Without useCallback" />
    </div>
  );
}

export default App;
