// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timer: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  updateTime = () => {
    this.setState(prevState => ({
      timer: prevState.timer + 1,
    }))
  }

  onStartTimer = () => {
    this.timerID = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {timer} = this.state
    const seconds = Math.floor(timer % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timer} = this.state
    const minutes = Math.floor(timer / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  onStopTimer = () => {
    clearInterval(this.timerID)
    this.setState({isTimerRunning: false})
  }

  onResetTimer = () => {
    clearInterval(this.timerID)
    this.setState({timer: 0, isTimerRunning: false})
  }

  render() {
    const {isTimerRunning} = this.state
    const timer = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="bg-container">
        <div className="stopwatch-container">
          <h1 className="heading"> Stopwatch </h1>
          <div className="timer-container">
            <div className="timer-sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-image"
              />
              <p className="timer-heading"> Timer </p>
            </div>
            <h1 className="timing-count"> {timer} </h1>
            <div className="buttons-container">
              <button
                className="start-button"
                type="button"
                onClick={this.onStartTimer}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                className="stop-button"
                type="button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                className="reset-button"
                type="button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
