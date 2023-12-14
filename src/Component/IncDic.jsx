import React, { useState } from "react";

const IncDic = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  return (
    <div className="border-top  border-secondary pt-1 pb-1 ">
    <h2 className="border-bottom  border-secondary pt-1 pb-1"> INCREMENT/DECREMENT:</h2>
        <h4> Count is : {count}</h4>
        <button className="btn btn-success mx-4 mb-3" onClick={add}>
          {" "}
          Increment{" "}
        </button>
        <button class="btn btn-danger mb-3" onClick={() => setCount(count - 1)}>
          Decrement
        </button>{" "}
        <br/>
    </div>
    
  );
};

export default IncDic;
