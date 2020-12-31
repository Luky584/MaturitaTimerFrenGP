import React, { Component } from 'react';


class Bar extends Component {
 
  render() {
    let exam = this.props.exam;
    return (  
        <div className="bar" style={{width:(exam.duration*100) + "%"}}>{exam.title}</div>
    )
  }

}
 
export default Bar;