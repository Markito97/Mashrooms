export const useLastQuestion = (questionNumber, length) => {
  return questionNumber + 1 === length ? true : false;
};
