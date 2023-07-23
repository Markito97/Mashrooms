import styles from "./quizCard.module.css";
import { QuizComplexity } from "../../../components/QuizComplexity/QuizComplexity";
import { useQuizzes } from "./useQuizzes";
import { CircularProgress } from "@mui/material";
import ModalWindow from "../../../components/ModalWindow/ModalWindow";
import { Box, Chip, Stack } from "@mui/material";

export const QuizCard = () => {
  const [quizzes, { status, error }] = useQuizzes();
  return (
    <>
      {status === "loading" && <CircularProgress />}
      {error && <h2>Cant fetch data</h2>}
      {quizzes.map((quiz) => {
        return (
          <Box
            className={styles.quizCardContainer}
            key={quiz._id}
            sx={{ bgcolor: "primary.main" }}
          >
            <div className={styles.header}>
              <div className={styles.nameOfQuiz}>{quiz.quizzesName}</div>
              <div className={styles.dificultyLvl}>
                Сложность: <QuizComplexity complexity={quiz.difficultyLevel} />
              </div>
            </div>
            <Stack direction='row' spacing={1}>
              <Chip label='this' color='info' />
              <Chip label='array' color='info' />
              <Chip label='object' color='info' />
            </Stack>
            <div className={styles.footer}>
              <div className={styles.countOfQuestions}>
                Количество вопросов: {quiz.questions.length}
              </div>
              <ModalWindow quizId={quiz._id} />
            </div>
          </Box>
        );
      })}
    </>
  );
};
