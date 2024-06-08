import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  // useStateフックを使ってカウンターの値と名前の状態を管理
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // countが変化するたびに実行されるuseEffect
  useEffect(() => {
    // カウンターの値が変わったことをコンソールにログとして表示
    console.log(`カウントの更新: ${count}`);
  }, [count]); // countが変わるたびに実行される

  // messageが変化するたびに実行されるuseEffect
  useEffect(() => {
    // メッセージが変わったことをコンソールにログとして表示
    console.log(`メッセージの更新: ${message}`);
  }, [message]); // messageが変わるたびに実行される

  // カウントを増やす関数
  const increment = () => {
    setCount(count + 1); // カウントを1増やす
    setMessage('カウントが1つ増えました'); // メッセージを更新
  };

  // カウントを減らす関数
  const decrement = () => {
    setCount(count - 1); // カウントを1減らす
    setMessage('カウントが1つ減りました'); // メッセージを更新
  };

  return (
    <div>
      <h1>React Hooks Tutorial</h1>
      <hr />
      <h2>Counter</h2>
      <p>Count: {count}</p> {/* 現在のカウントを表示 */}
      <button onClick={increment}>+</button> {/* カウントを増やすボタン */}
      <button onClick={decrement}>-</button> {/* カウントを減らすボタン */}
      <p>{message}</p> {/* 現在のメッセージを表示 */}
    </div>
  );
}

export default App;
