import './App.css';
import React, { useState } from 'react';

function App() {
  // 関数の宣言
  let CountTest = 0;

  // ボタンをクリックすると、状態を更新する関数を定義します
  const incrementTest = () => {
    CountTest++;
    console.log(CountTest);
  };

  const decrementTest = () => {
    CountTest--;
    console.log(CountTest);
  };

  // useStateフックを使用して、状態とその更新関数を宣言します
  const [count, setCount] = useState(0);

  // ボタンをクリックすると、状態を更新する関数を定義します
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>React Hooks Tutorial</h1>
      <hr />
      <h2>Counter useStateの使用なし</h2>
      <p>Count: {CountTest}</p>
       {/* カウンターの値を増やすボタン */}
      <button onClick={incrementTest}>+</button>
      {/* カウンターの値を減らすボタン */}
      <button onClick={decrementTest}>-</button>

      <h2>Counter useStateを使用あり</h2>
      <p>Count: {count}</p>
      {/* カウンターの値を増やすボタン */}
      <button onClick={increment}>+</button>
      {/* カウンターの値を減らすボタン */}
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
