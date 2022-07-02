import { Component } from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptions } from 'components/Feedback';
import { Statistics } from 'components/Statistics';
import { Section } from 'components/Section';
import { Container } from 'components/Feedback/FeedbackOptions.styled';

export class App extends Component {
  static propTypes = {
    Statistics: {
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
      positivePercentage: PropTypes.number.isRequired,
    },
    Section: {
      title: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
    },
    Notification: { message: PropTypes.string.isRequired },
    FeedbackOptions: {
      options: PropTypes.objectOf(PropTypes.string).isRequired,
      onLeaveFeedback: PropTypes.object.isRequired,
    },
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    console.log('клик по good');
  };

  hendleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    console.log('клик по neutral');
  };

  hendleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    console.log('клик по bad');
  };

  countTotalFeedback = () => {
    let total = 0;
    total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let goodPercentage = 0;
    goodPercentage = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    return goodPercentage;
  };

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{
              good: 'Good',
              neutral: 'Neutral',
              bad: 'Bad',
            }}
            onLeaveFeedback={{
              hendleGood: this.hendleGood,
              hendleNeutral: this.hendleNeutral,
              hendleBad: this.hendleBad,
            }}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </Container>
    );
  }
}
