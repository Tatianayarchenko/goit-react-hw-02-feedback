import { ButtonsItem, ButtonsList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  options: { good, neutral, bad },
  onLeaveFeedback: { hendleGood, hendleNeutral, hendleBad },
}) => (
  <ButtonsList>
    <ButtonsItem>
      <button onClick={hendleGood}>{good}</button>
    </ButtonsItem>
    <ButtonsItem>
      <button onClick={hendleNeutral}>{neutral}</button>
    </ButtonsItem>
    <ButtonsItem>
      <button onClick={hendleBad}>{bad}</button>
    </ButtonsItem>
  </ButtonsList>
);
