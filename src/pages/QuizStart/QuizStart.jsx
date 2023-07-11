import { useParams } from 'react-router-dom';
import { QuizQuestion } from '../../components/QuizQuestion/QuizQuestion';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getQuizById } from '../../config';
import { CircularProgress } from '@mui/material';
export const QuizStart = () => {
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState('');
  const [hasError, setError] = useState(false);
  const { id } = useParams();
  // интересный момент с работой catch
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(getQuizById(id));
        if (!res.ok) setError(true);
        const data = await res.json();
        console.log(data);
        setQuestions(data.questions);
        setCategory(data.category);
      } catch (err) {
        setError(true);
      }
    })();
  }, [id]);

  if (hasError) {
    return <h2>An Error Occured</h2>;
  }
  return (
    <>
      {!questions.length && (
        <h2>
          <CircularProgress size={100} />
        </h2>
      )}
      <QuizQuestion category={category} questions={questions} />
    </>
  );
};
