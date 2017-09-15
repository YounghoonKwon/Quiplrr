import React, { Component } from 'react'

export default class GroupGame extends Component {
  _handleClick = (event) => {
    this.props._checkAnswer(event.target.value)
  }
  _displayAnswerButtons = () => {
    if (this.props.showAnswerButtons) {
      return (
        <div id='correctness-section'>
          <button id='source-field-true' onClick={this._handleClick} value='true' className='button'>Trump</button>
          <button id='source-field-false' onClick={this._handleClick} value='false' className='button'>Trumplrr</button>
        </div>
      )
    }
    return false
  }

  _displayLoading = () => {
    if (this.props.question) {
      return (
        <div id='group-loader'></div>
      )
    }
  }

  render() {
    return (
      <div>
        <div>
          <article className='gameindex'>
            <blockquote className='example-right'>
              <p>{this.props.question}</p>
            </blockquote>
          </article>
        </div>
        {this._displayLoading()}
        <div id='fixedposition'>
          {this._displayAnswerButtons()}
          <div className='group-score'>
            <p id='game-score'>Current Score: {this.props.score}</p>
          </div>
        </div>
      </div>
    )
  }
}
