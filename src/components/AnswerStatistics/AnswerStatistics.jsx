import * as React from "react";
import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCorrectAnswerPercent } from "../../utils/getCorrectAnswerPercent";
import styles from "./answerStatistics.module.css";
import { StatisticsBox } from "./StatisticsBox";
import { Link, useNavigate, useParams } from "react-router-dom";
import { resetToDefault } from "../../features/answers/answer-slice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { selectTimer, resetTimer } from "../../features/timer/timer-slice";
import { toCorrectTime } from "../../utils/toCorrectTime";
export const AnswerStatistics = ({ category }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const answers = useSelector((state) => state.answers.list);
  const correctAnswerCounter = answers.reduce((acc, answer) => {
    if (answer.isCorrectAnswer) acc++;
    return acc;
  }, 0);
  const correctAnswerPercent = getCorrectAnswerPercent(
    correctAnswerCounter,
    answers.length
  );
  const sec = useSelector((state) => selectTimer(state));
  const time = toCorrectTime(sec);
  useEffect(() => {
    return () => {
      dispatch(resetTimer());
    };
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <Button
          onClick={() => {
            dispatch(resetToDefault());
            navigate(-2);
          }}
          variant='outlined'
          sx={{ maxWidth: "fit-content" }}
        >
          {" "}
          <ArrowBackIcon />
          Назад к выбору теста
        </Button>
        <div>Результат теста на знание технологии {category}</div>
        <div>{`Score: ${correctAnswerCounter} of ${answers.length}`}</div>
        <div>{`${correctAnswerPercent} % Correct`}</div>
        <div className={styles.timer}>{`Time Spent: ${time}`}</div>
        <div className={styles.divider}></div>
      </Box>
      {answers.map((answer, index) => {
        return (
          <StatisticsBox
            number={answer.number}
            question={answer.question}
            answerOptions={answer.answerOptions}
            description={answer.description}
            key={index}
            userAnswers={answer.userAnswers}
            correctAnswer={answer.correctAnswer}
          />
        );
      })}
    </>
  );
};
