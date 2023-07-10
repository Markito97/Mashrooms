export const useCorrectAnswer = (userAnswers, correctAnswers) => {
  const result = {
    correct: [],
    incorrect: [],
  };
  if (userAnswers === undefined) {
    result.incorrect = correctAnswers;
    return result;
  } else {
    correctAnswers.forEach((answer) => {
      userAnswers.includes(answer)
        ? result.correct.push(answer)
        : result.incorrect.push(answer);
    });
  }
  return result;
};
