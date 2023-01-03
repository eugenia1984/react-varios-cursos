import React, { Component } from "react";

class App extends Component {
    
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

export default App;
