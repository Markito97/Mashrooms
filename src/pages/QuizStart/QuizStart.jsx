import { useParams } from 'react-router-dom';
import { useGetQuizeQuery } from '../../redux/quizzesApi';
export const QuizStart = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetQuizeQuery(id);
  console.log(data);
  return <div>QuizStart</div>;
};
