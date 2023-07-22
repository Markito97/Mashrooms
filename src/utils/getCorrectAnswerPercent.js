export const getCorrectAnswerPercent = (correct, all) => {
  if (!correct && !all) return 0;
  return Math.floor((correct / all) * 100);
};
