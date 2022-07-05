import { Component } from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptions } from 'components/Feedback';
import { Statistics } from 'components/Statistics';
import { Section } from 'components/Section';
import { Container } from 'components/Feedback/FeedbackOptions.styled';

export class App extends Component {
  // static propTypes = {
  //   // Statistics: {
  //   //   good: PropTypes.number.isRequired,
  //   //   neutral: PropTypes.number.isRequired,
  //   //   bad: PropTypes.number.isRequired,
  //   //   total: PropTypes.number.isRequired,
  //   //   positivePercentage: PropTypes.number.isRequired,
  //   // },
  //   // Section: {
  //   //   title: PropTypes.string.isRequired,
  //   //   children: PropTypes.node.isRequired,
  //   // },
  //   // Notification: { message: PropTypes.string.isRequired },
  //   // FeedbackOptions: {
  //   //   options: PropTypes.arrayOf(PropTypes.string).isRequired,
  //   //   onLeaveFeedback: PropTypes.func.isRequired,
  //   // },
  // };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleButton = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    let total = Object.values(this.state).reduce((acc, feedback) => {
      return acc + feedback;
    }, 0);
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
    const options = Object.keys(this.state);
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.hendleButton}
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
