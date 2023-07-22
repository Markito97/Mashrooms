export const getTypeOfPage = (type) => {
  switch (type) {
    case "JS":
      return "JavaScript";
    case "HTML":
      return "HTML";
    case "React":
      return "React";
    case "TS":
      return "TypeScript";
    case "CSS":
      return "CSS";
  }
};
