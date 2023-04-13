import { Component } from 'react';
import { SectionId1, SectionId2 } from './Utils/shortid';
import '../App.css';

import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickFeedback = event => {
    event.preventDefault();
    const btnName = event.target.textContent.toLowerCase();
    const stateKey = btnName;
    this.setState(prevState => {
      return {
        [stateKey]: prevState[stateKey] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const { good } = this.state;

    let result = 0;

    result =
      totalFeedback > 0 ? Math.ceil((good / totalFeedback) * 100) : result;

    return `${result}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = this.countTotalFeedback();
    const countPositivePercent = this.countPositiveFeedbackPercentage();

    return (
      <>
        <div className="container">
          <div className="wrapper">
            <Section id={SectionId1} title={'Please leave feedback'}>
              <div className="feedbackBtns">
                <FeedbackOptions
                  options={['Good', 'Neutral', 'Bad']}
                  onLeaveFeedback={this.handleClickFeedback}
                />
              </div>
            </Section>
            <Section id={SectionId2} title={'Statistics'}>
              {good > 0 || neutral > 0 || bad > 0 ? (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={countTotalFeedback}
                  positivePercentage={countPositivePercent}
                />
              ) : (
                <Notification message="There is no feedback" />
              )}
            </Section>
          </div>
        </div>
      </>
    );
  }
}

export default App;
