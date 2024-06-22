import './App.css';
import React, { useState, useMemo } from 'react';

function App() {
  // 状態管理の変数を定義
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  // 重い計算を模擬する関数
  const calculation = (num) => {
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };

  // useMemoを使用して、計算結果をメモ化する
  const memoizedValue = useMemo(() => {
    return calculation(count02);
  }, [count02]);

  return (
    <div>
      <h1>React Hooks Tutorial</h1>
      <hr />
      <h2>useMemo</h2>
      {/* Count01の値の表示 */}
      <p>Count01: {count01}</p>
      {/* カウンターの値を増やすボタン */}
      <button onClick={() => setCount01(count01 + 1)}>Increment Count01</button>
      {/* Count02の値の表示 */}
      <p>Count02: {count02}</p>
      {/* カウンターの値を増やすボタン */}
      <button onClick={() => setCount02(count02 + 1)}>Increment Count02</button>
      {/* メモ化された値の表示 */}
      <p>Memoized Value: {memoizedValue}</p>
    </div>
  );
}

export default App;
