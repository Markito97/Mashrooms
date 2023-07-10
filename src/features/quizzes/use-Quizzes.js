import { useSelector, useDispatch } from 'react-redux';
import { selectAllQuizzes } from './quizzes-slice';
import { loadQuiz } from './quizzes-slice';
import { selectQuizzesInfo } from './quizzes-slice';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

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
