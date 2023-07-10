export const getCorrectAnswerPercent = (correct, all) => {
  if (!correct && !all) return 0;
  return (correct / all) * 100;
};
