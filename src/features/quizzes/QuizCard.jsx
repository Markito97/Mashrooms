import styles from "./quizCard.module.css";
import { QuizComplexity } from "../../components/QuizComplexity/QuizComplexity";
import { useQuizzes } from "./use-Quizzes";
import { CircularProgress } from "@mui/material";
import ModalWindow from "../../components/Modal/ModalWindow";

export const QuizCard = () => {
  const [quizzes, { status, error }] = useQuizzes();

  return (
    <>
      {status === "loading" && <CircularProgress />}
      {error && <h2>Cant fetch data</h2>}
      {quizzes.map((quiz) => {
        return (
          <div className={styles.quizCardContainer} key={quiz._id}>
            <div className={styles.header}>
              <div className={styles.nameOfQuiz}>{quiz.quizzesName}</div>
              <div className={styles.dificultyLvl}>
                Сложность: <QuizComplexity complexity={quiz.difficultyLevel} />
              </div>
            </div>
            <div className={styles.footer}>
              <div className={styles.countOfQuestions}>
                Количество вопросов: {quiz.questions.length}
              </div>
              <ModalWindow quizId={quiz._id} />
            </div>
          </div>
        );
      })}
    </>
  );
};
