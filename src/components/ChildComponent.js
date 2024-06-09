import React from 'react';
import { useMyContext } from '../App'; // App.jsからuseMyContextをインポート

function ChildComponent() {
  // Contextの値を取得
  const { data } = useMyContext();

  return <p>{data}</p>;
}

export default ChildComponent; // ChildComponentをデフォルトエクスポート
