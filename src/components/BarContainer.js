import React, { Component } from 'react';


class BarContainer extends Component {
 
    constructor(props) {
    super(props);
    this.state = {
        examParts: [
            {
                title: "Introduction",
                duration: 0.5,
            },
            {
                title: "P1 Questions",
                duration: 3,
            },
            {
                title: "P2 Task1",
                duration: 2,
            },
            {
                title: "P2 Task2",
                duration: 2,
            },
            {
                title: "P3 TOPIC",
                duration: 5,
            },
            {
                title: "P4 TEXT",
                duration: 3,
            },
        ]
    };
    }

  componentDidMount() {
      console.log("barcontainer mounted");
  }

  componentWillUnmount() {
    //
  }

  render() {
    let totalDuration = 0;
    this.state.examParts.map((exam) =>
        totalDuration+=exam.duration
    );

    let barParts = this.state.examParts.map((exam) =>
        <div className="bar" style={{width:(exam.duration/totalDuration)*100 + "%"}}>{exam.title}</div> 
    );

    return (
        <div className="bar-container">
            {barParts}
        </div>
    )
  }

}
 
export default BarContainer;