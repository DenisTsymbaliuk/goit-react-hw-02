export default function Feedback({
  onFeedbackSelect,
  positiveFeedback,
  totalFeedback,
}) {
  return (
    <>
      <p>Good {onFeedbackSelect.good}</p>
      <p>Neutral {onFeedbackSelect.neutral}</p>
      <p>Bad {onFeedbackSelect.bad}</p>
      <p>total {totalFeedback}</p>
      <p>Positive {positiveFeedback}%</p>
    </>
  );
}
