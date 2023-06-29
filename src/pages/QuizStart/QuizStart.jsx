import { useParams } from 'react-router-dom';
import { QuizQuestion } from '../../components/QuizQuestion/QuizQuestion';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getQuizById } from '../../config';
export const QuizStart = () => {
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState('');
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetch(getQuizById(id));
      const data = await res.json();
      setQuestions(data.questions);
      setCategory(data.category);
    })();
  }, []);
  return (
    <>
      {!questions.length && <h2>Loading....</h2>}
      <QuizQuestion category={category} questions={questions} />
    </>
  );
};
