import { StatisticList } from 'components/Feedback/FeedbackOptions.styled';
import { Notification } from 'components/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    {total > 0 ? (
      <StatisticList>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </StatisticList>
    ) : (
      <Notification message="There is no feedback"></Notification>
    )}
  </div>
);

// export class FeedbackOptions extends Component {
//   static propTypes = {
//     //
//   };

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   hendleGood = () => {
//     this.setState(prevState => ({
//       good: prevState.good + 1,
//     }));
//   };

//   hendleNeutral = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1,
//     }));
//   };

//   hendleBad = () => {
//     this.setState(prevState => ({
//       bad: prevState.bad + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     let total = 0;
//     total = this.state.good + this.state.neutral + this.state.bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = total => {
//     let goodPercentage = 0;
//     goodPercentage = Math.round((this.state.good * 100) / total);
//     return goodPercentage;
//   };

//   render() {
//     let total = this.countTotalFeedback();
//     let goodPercentage = this.countPositiveFeedbackPercentage(total);

//     return (
//       <div>
//         <h1>Please leave feedback</h1>
//         <button onClick={this.hendleGood}>Good</button>
//         <button onClick={this.hendleNeutral}>Neutral</button>
//         <button onClick={this.hendleBad}>Bad</button>
//         <div>
//           {/* <Statistics total={total} goodPercentage={goodPercentage} /> */}
//           {/* <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={total}
//             positivePercentage={goodPercentage}
//           ></Statistics> */}
//           {/* <h2>Statistics</h2>
//           {total > 0 ? (
//             <ul>
//               <li>Good: {this.state.good}</li>
//               <li>Neutral: {this.state.neutral}</li>
//               <li>Bad: {this.state.bad}</li>
//               <li>Total: {total}</li>
//               <li>Positive feedback: {goodPercentage}%</li>
//             </ul>
//           ) : (
//             <p>There is no feedback</p>
//           )} */}
//         </div>
//       </div>
//     );
//   }
// }
