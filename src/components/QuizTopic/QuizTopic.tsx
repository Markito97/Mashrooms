import { Box, styled } from "@mui/material";
import styles from "./QuizTopic.module.css";
import { JavaScript, React, TypeScript, HTML, CSS } from "./codeHighlight.jsx";
export const QuizTopic = (props: any) => {
  return (
    <QuizTopicWrapper>
      <div className={`${styles[props.color]}`}>
        <span className={styles.quizType}>{props.quizType}</span>
        {props.quizType === "JavaScript" ? <JavaScript /> : null}
        {props.quizType === "React" ? <React /> : null}
        {props.quizType === "TypeScript" ? <TypeScript /> : null}
        {props.quizType === "HTML" ? <HTML /> : null}
        {props.quizType === "CSS" ? <CSS /> : null}
      </div>
    </QuizTopicWrapper>
  );
};

const QuizTopicWrapper = styled(Box)(({ theme }) => ({
  padding: "8px",
  textAlign: "center",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  minWidth: "360px",
  minHeight: "260px",
  background: theme.palette.primary.main,
  borderRadius: "4px",
  boxShadow: theme.shadows[4],
}));
