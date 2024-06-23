import React, { useEffect } from 'react';

function Child({ onIncrement, label }) {
  useEffect(() => {
    console.log(`Function ${label} is passed to Child component`);
  }, [onIncrement, label]);

  return (
    <div>
      <p>{label}</p>
      <button onClick={onIncrement}>Increment in Child ({label})</button>
    </div>
  );
}

export default Child;
