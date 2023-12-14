import React, { Component } from "react";

class OnChange extends Component {
  constructor() {
    super();
    this.state = {
      name: "Dishant Joshi",
    };
  }
  render() {
    const changename = () => {
      this.setState({ name: this.state.name });
    };

    return (
      <div className="border-top  border-secondary pt-1 pb-1 ">
    <h2 className="border-bottom  border-secondary pt-1 pb-1">Name is={this.state.name}</h2>
          <input className="mb-5 mt-2"
            type="text"
            onChange={(i) => this.setState({ name: i.target.value })}
          />{" "}
      
      </div>
    );
  }
}

export default OnChange;
