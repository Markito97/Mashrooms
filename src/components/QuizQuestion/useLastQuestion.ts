export const useLastQuestion = (questionNumber: number, length: number): boolean => {
  return questionNumber + 1 === length ? true : false;
};
