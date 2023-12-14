import React from "react";

function FunbaseComponant() {
  const addtion = () => {
    let p = 20;
    let q = 80;
    let r = p + q;
    return r;
  };
  const sub = () => {
    let p = 32;
    let q = 12;
    let r = p - q;
    return r;
  };
  const multiplication = () => {
    let p = 10;
    let q = 22;
    let r = p * q;
    return r;
  };

  const division = () => {
    let p = 65;
    let q = 3;
    let r = p / q;
    return r;
  };

  return (
    <div className="border-top  border-secondary pt-1 pb-1 ">
      <h2 className="border-bottom  border-secondary pt-1 pb-1"> FUNCTION-BASE METHOD:</h2>
      <h3>Addtion is :- {addtion()}</h3>
      <h3>Subtraction is :- {sub()}</h3>
      <h3>Multiplication is :- {multiplication()}</h3>
      <h3>Division is :- {division()}</h3><br /><br />

    </div>
  );
}

export default FunbaseComponant;
