export interface QuestionModel {
  _id: string;
  question: string;
  answers: Answer[];
}

export interface Answer {
  correct: boolean;
  key: string;
  value: string;
  userSelect?: null | boolean;
}
