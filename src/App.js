import './App.css';
import React, { useReducer } from 'react';

// 初期状態を定義
const initialState = 0;

// reducer 関数を定義
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return state = 0;
    default:
      throw new Error();
  }
}

function App() {
  // useReducer フックを使用して、state と dispatch 関数を取得
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>React Hooks Tutorial</h1>
      <hr />
      <h2>useReducer</h2>
      <p>Count: {state}</p>
      {/* dispatch 関数を使用して、アクションを発行 */}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default App;
