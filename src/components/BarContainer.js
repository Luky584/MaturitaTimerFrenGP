import React, { Component } from 'react';


class BarContainer extends Component {
 
  componentDidMount() {
      console.log("barcontainer mounted");
  }

  componentWillUnmount() {
    //
  }

  render() {
    const examParts = [
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
    ];

    let totalDuration = 0;
    examParts.map((exam) =>
        totalDuration+=exam.duration
    );
    
    console.log({totalDuration});

    let barParts = examParts.map((exam) =>
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