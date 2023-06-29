import { useParams } from 'react-router-dom';

export const QuizStart = () => {
  const { id } = useParams();
  return <div>QuizStart</div>;
};
