import React, { Component } from 'react';
import Bar from "./Bar";

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
    return (
        <div className="bar-container">
            {
                this.state.examParts.map((exam, index) =>
                    <Bar exam={exam} key={index}/>
                )
            }
        </div>
    )
  }

}
 
export default BarContainer;