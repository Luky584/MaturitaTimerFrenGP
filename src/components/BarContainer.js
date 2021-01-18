import React, { Component } from 'react';
import Bar from "./Bar";
import ProgressBar from "./ProgressBar";

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
        ],
        timerOn: false,
        timerStart: 0,
        timerTime: 0,
    };
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };

  componentDidMount() {
      console.log("barcontainer mounted");
  }

  componentWillUnmount() {
    //
  }

  render() {
    const { timerTime } = this.state;
    let totalExamTime = 0;
    this.state.examParts.map((exam) => totalExamTime+= exam.duration); // calculate total exam duration

    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);

    let percentPassed = (timerTime/600)/totalExamTime;

    let minutesLeft = Math.floor((totalExamTime*60*1000-timerTime)/60/1000);
    let secondsLeft = ("0" + (Math.floor((totalExamTime*60*1000-timerTime) / 1000) % 60)).slice(-2);
    let centiSecondsLeft = ("0" + (Math.floor((totalExamTime*60*1000-timerTime) / 10) % 100)).slice(-2);
    return (
        <>
        <div className="bar-container">
            {
                this.state.examParts.map((exam, index) =>
                    <Bar exam={exam} key={index}/>
                )
            }
            <ProgressBar left={percentPassed}></ProgressBar>
        </div>

        <div className="timer-display">
          {minutesLeft} : {secondsLeft} : {centiSecondsLeft}
        </div>

        
        {this.state.timerOn === false && this.state.timerTime === 0 && (
          <button onClick={this.startTimer}>Start</button>
        )}
        {this.state.timerOn === true && (
          <button onClick={this.stopTimer}>Stop</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.startTimer}>Resume</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.resetTimer}>Reset</button>
        )}
        </>
    )
  }

}
 
export default BarContainer;