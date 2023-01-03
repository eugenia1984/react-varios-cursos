import React, { Component } from "react";

class App extends Compnent {
    
  constructor(props) {
    super(props);
    
    this.state = {
      data: "test"
    }
  }

  getData() {}

  componenteDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
      {this.state.data}
      </div>
    )
  }
}
