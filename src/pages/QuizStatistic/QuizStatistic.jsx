import { AnswerStatistics } from '../../components/AnswerStatistics/AnswerStatistics';
import { useParams } from 'react-router-dom';
export const QuizStatistic = () => {
  const { type } = useParams();
  return <AnswerStatistics category={type} />;
};
