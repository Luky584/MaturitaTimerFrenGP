import React,  { Component } from 'react';

class ProgressBar extends Component {

  render() {
    let left = this.props.left;
    if (left>99.6) left = 99.6;
    return (
            <div className="progressbar" style={{left:(left) + "%"}}></div>
    )
  }

}
 
export default ProgressBar;