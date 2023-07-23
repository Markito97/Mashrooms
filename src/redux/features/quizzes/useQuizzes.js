import { useSelector, useDispatch } from "react-redux";
import { selectAllQuizzes } from "./quizzesSlice";
import { loadQuiz } from "./quizzesSlice";
import { selectQuizzesInfo } from "./quizzesSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const useQuizzes = () => {
  const { type } = useParams();
  const dispatch = useDispatch();
  const quizzes = useSelector(selectAllQuizzes);
  const { status, error, qty } = useSelector(selectQuizzesInfo);

  useEffect(() => {
    dispatch(loadQuiz(type));
  }, []);
  return [quizzes, { status, error, qty }];
};
