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

  handleClickFeedback = option => {
    const stateKey = option.toLowerCase();
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
    return totalFeedback > 0 && Math.ceil((good / totalFeedback) * 100);
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
                  options={Object.keys(this.state)}
                  onLeaveFeedback={this.handleClickFeedback}
                />
              </div>
            </Section>
            <Section id={SectionId2} title={'Statistics'}>
              {countTotalFeedback > 0 ? (
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
