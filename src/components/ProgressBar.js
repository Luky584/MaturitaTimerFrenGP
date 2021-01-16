import React,  { Component } from 'react';

class ProgressBar extends Component {

  render() {
    return (
            <div className="progressbar" style={{left:(this.props.left) + "%"}}>ProgressBar</div>
    )
  }

}
 
export default ProgressBar;