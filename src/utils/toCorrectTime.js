export const toCorrectTime = (sec) => {
  return `${Math.floor(sec / 60)} min : ${sec % 60} sec `;
};
