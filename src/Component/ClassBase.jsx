import React, { Component } from "react";

class ClassBase extends Component {
  render() {
    const add = () => {
      let p = 13;
      let q = 122;
      let r = p + q;
      return r;
    };
    const sub = () => {
      let p = 105;
      let q = 32;
      let r = p - q;
      return r;
    };
    const multiplication = () => {
      let p = 9;
      let q = 6;
      let r = p * q;
      return r;
    };

    const division = () => {
      let p = 77;
      let q = 7;
      let r = p / q;
      return r;
    };

    return (
      <div className="border-top  border-secondary pt-1 pb-1 ">
    
      <h2 className="border-bottom  border-secondary pt-1 pb-1">CLASS-BASE METHOD:</h2>
        <h3> Addtion is :- {add()}</h3>
        <h3> subtraction is :- {sub()}</h3>
        <h3> Multiplication is :- {multiplication()}</h3>
        <h3> Division is :- {division()}</h3> <br /> <br />
      </div>
    );
  }
}

export default ClassBase;
