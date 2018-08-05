import React, { Component } from 'react';

class ColorDisplay extends Component {
    
  render() {
    var color = this.props.color;
    return (
      <div style={{backgroundColor : color, width: "100vh", height: "100vh"}}></div>
    )
  }
}

export default ColorDisplay;
