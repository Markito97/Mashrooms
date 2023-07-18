import { AnswerStatistics } from '../../components/AnswerStatistics/AnswerStatistics';
import { useParams } from 'react-router-dom';
export const QuizStatistic = () => {
  const { category } = useParams();
  return <AnswerStatistics category={category} />;
};
