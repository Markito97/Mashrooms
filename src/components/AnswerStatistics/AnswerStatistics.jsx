import * as React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { getCorrectAnswerPercent } from '../../utils/getCorrectAnswerPercent';
import styles from './answerStatistics.module.css';
import { StatisticsBox } from './StatisticsBox';

export const AnswerStatistics = ({ category }) => {
  const answers = useSelector((state) => state.answers.list);
  console.log(answers);
  const correctAnswerCounter = answers.reduce((acc, answer) => {
    if (answer.isCorrectAnswer) acc++;
    return acc;
  }, 0);
  const correctAnswerPercent = getCorrectAnswerPercent(
    correctAnswerCounter,
    answers.length
  );
  return (
    <>
      <Box>
        <div>Результат теста на знание технологии {category}</div>
        <div>{`Score: ${correctAnswerCounter} of ${answers.length}`}</div>
        <div>{`${correctAnswerPercent} % Correct`}</div>
        <div className={styles.timer}>Time Spent: 1 min 1 sec</div>
        <div className={styles.divider}></div>
      </Box>
      {answers.map((answer) => {
        return (
          <StatisticsBox
            number={answer.number}
            question={answer.question}
            answerOptions={answer.answerOptions}
            description={answer.description}
            isCorrectAnswer={answer.isCorrectAnswer}
          />
        );
      })}
    </>
  );
};
