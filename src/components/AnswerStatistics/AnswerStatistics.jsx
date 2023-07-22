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
import { colorTokens } from "@/theme";
import { useTheme } from "@mui/material";

export const AnswerStatistics = ({ category }) => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const answers = useSelector((state) => state.answers.list);
  console.log("answers in AnswerStatistics =>", answers);

  const correctAnswerCounter = answers.reduce((acc, answer) => {
    if (answer.isTrueAnswer) acc++;
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
        <div>Результат теста на знание технологии {category}</div>
        <div>{`Score: ${correctAnswerCounter} of ${answers.length}`}</div>
        <div>{`${correctAnswerPercent} % Correct`}</div>
        <div className={styles.timer}>{`Time Spent: ${time}`}</div>
        <div className={styles.divider}></div>
      </Box>
      {answers.map((answer, index) => {
        return <StatisticsBox answer={answer} key={index} />;
      })}
    </>
  );
};
