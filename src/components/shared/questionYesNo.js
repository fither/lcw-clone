import React, { Component } from 'react'
import '../../style/shared/questionYesNo.css';

export default class QuestionYesNo extends Component {
  shakeQuestionBox() {
    let questionBox = document.querySelector('.question-box');
    const questionBoxAnimationClass = 'box-animated';
    if (!questionBox.classList.contains(questionBoxAnimationClass)) {
      questionBox.classList.add(questionBoxAnimationClass);
      setTimeout(() => {
        questionBox.classList.remove(questionBoxAnimationClass);
      }, 250);
    }
  }

  responseHandler(response) {
    this.props.result(response);
  }

  render() {
    return (
      <div className="question-wrapper">
        <div
          className="question-wrapper-background"
          onClick={this.shakeQuestionBox}
        ></div>
        <div className="question-box">
          <div className="question-title">
            {this.props.title || 'Başlık'}
            <button
              type="button"
              className="question-box-exit"
              onClick={() => this.responseHandler('exit')}
            >X</button>
          </div>
          <div className="question-describe">
            {this.props.desc || 'Açıklama'}
          </div>
          <div className="question-actions">
            <button
              type="button"
              className="question-button answer-no"
              onClick={() => this.responseHandler('no')}
            >Hayır</button>

            <button
              type="button"
              className="question-button answer-yes"
              onClick={() => this.responseHandler('yes')}
            >Evet</button>
          </div>
        </div>
      </div>
    )
  }
}
