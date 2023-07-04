import styles from './answerStatistics.module.css';
import Highlight from 'react-highlight';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const StatisticsBox = ({
  number,
  question,
  answerOptions,
  description,
  isCorrectAnswer,
}) => {
  return (
    <div className={styles.statisticBox}>
      <h1>{`Вопрос ${number + 1} :`}</h1>
      <p>{question}</p>
      <ul>
        {answerOptions.map((answer, index) => {
          return (
            <li key={index}>
              <Highlight color='red'>{answer}</Highlight>
            </li>
          );
        })}
      </ul>
      <Accordion>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              aria-controls='panel1a-content'
              id='panel1a-header'
              sx={{ color: '#1976d2' }}
            />
          }
          sx={{ backgroundColor: '#282c34', border: '1px solid #1976d2' }}
        >
          <Typography color={'white'}>Пачиму так?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{description}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
