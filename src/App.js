import './App.css';
import React, { createContext, useContext } from 'react';
import ParentComponent from './components/ParentComponent';

// Contextを作成
const MyContext = createContext();

// コンポーネント内でContextを使用するためのカスタムHookを定義
export function useMyContext() {
  return useContext(MyContext);
}

function App() {
  // Contextの値を定義
  const contextValue = {
    data: 'Hello from Context!',
  };

  return (
    <MyContext.Provider value={contextValue}>
      <div>
        <h1>React Hooks Tutorial</h1>
        <hr />
        <h2>useContext</h2>
        <ParentComponent />
      </div>
    </MyContext.Provider>
  );
}

export default App;
