import './App.css';
import React, { useRef, useEffect, useState } from 'react';

function App() {
  // useRef フックを使用して、input 要素への参照を作成
  const inputElement = useRef();

  // useState フックを使用して、テキストの状態を管理
  const [text, setText] = useState("");

  // ボタンがクリックされたときに、入力されたテキストを取得して状態を更新する関数
  const handleClick = () => {
    setText(inputElement.current.value);
  };

  // コンポーネントがマウントされたときに、input 要素にフォーカスを設定
  useEffect(() => {
    inputElement.current.focus();
  }, []); // 第2引数の空の配列は、この useEffect を最初のレンダリング時にのみ実行することを示します

  return (
    <div>
      <h1>React Hooks Tutorial</h1>
      <hr />
      <h2>useRef</h2>
      {/* input 要素への参照を inputElement に設定 */}
      <input ref={inputElement} type="text" />
      {/* ボタンがクリックされたときに、handleClick 関数を実行 */}
      <button onClick={handleClick}>入力内容を確認する</button>
      {/* 入力されたテキストを表示 */}
      <p>テキスト : {text}</p>
    </div>
  );
}

export default App;
