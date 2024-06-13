import React from 'react';
import { useMyContext } from '../App'; // App.jsからuseMyContextをインポート

function ChildComponent() {
  // Contextの値を取得
  const data = useMyContext();

  return (
    <>
        <p>{data.info}</p>
        <p>{data.context}</p>
    </>
  );
}

export default ChildComponent; // ChildComponentをデフォルトエクスポート
