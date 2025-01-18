export default function Options({
  onFeedbackSelect,
  onResetFeedback,
  totalFeedback,
}) {
  return (
    <>
      <button onClick={() => onFeedbackSelect("good")}>Good</button>
      <button onClick={() => onFeedbackSelect("neutral")}>Neutral</button>
      <button onClick={() => onFeedbackSelect("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={onResetFeedback}>Reset</button>}
    </>
  );
}
