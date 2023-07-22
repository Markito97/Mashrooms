export const useCorrectAnswer = (answer) => {
  const correct = answer.correct;
  const userSelect = answer.userSelect;
  if (correct === true && userSelect === null) {
    return "test";
  }
  if (correct === true && userSelect === true) {
    return "correctAnswer";
  }
  if (
    (correct === true && userSelect === false) ||
    (correct === false && userSelect === true)
  ) {
    return "inCorrectAnswer";
  }
};
