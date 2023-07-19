import { Box, styled } from "@mui/material";
import styles from "./QuizTopic.module.css";

export const QuizTopic = (props: any) => {
  return (
    <QuizTopicWrapper>
      <div className={`${styles.quizType} ${styles[props.color]}`}>
        {props.quizType}
      </div>
      <div className={styles.quizCode}>{props.quizCode}</div>
    </QuizTopicWrapper>
  );
};

const QuizTopicWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "400px",
  background: theme.palette.primary.main,
  padding: "180px",
  borderRadius: "4px",
  boxShadow: theme.shadows[4],
}));
