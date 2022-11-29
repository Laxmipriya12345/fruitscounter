// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onMangoIncrement = () => {
    this.setState(prevState => {
      console.log(`prevState value is ${prevState.count1}`)
      return {count1: prevState.count1 + 1}
    })
  }

  onBananaIncrement = () => {
    this.setState(prevState => {
      console.log(`prevState value is ${prevState.count2}`)
      return {count2: prevState.count2 + 1}
    })
  }

  render() {
    const {count1, count2} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="head">
            Bob ate {count1} mangoes {count2} bananas
          </h1>
          <div className="images">
            <div className="button">
              <img
                className="img"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button
                className="btn1"
                type="button"
                onClick={this.onMangoIncrement}
              >
                Eat Mango
              </button>
            </div>

            <div className="button">
              <img
                className="img"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
              />
              <button
                className="btn1"
                type="button"
                onClick={this.onBananaIncrement}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
