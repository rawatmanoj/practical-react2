import React, { useMemo } from "react";

export default React.memo(function Timer({ timer, setTime }) {
  console.log("timer");
  return (
    <div>
      <div>{timer}</div>
      <button onClick={setTime}>Click</button>
    </div>
  );
});
