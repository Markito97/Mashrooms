import { useParams } from 'react-router-dom';
import { useGetJSQuizzesQuery } from '../../redux';
export const QuizzesPage = () => {
  const { type } = useParams();
  const { data } = useGetJSQuizzesQuery(type);
  console.log(data);
  return <div>Page</div>;
};
