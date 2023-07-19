import styles from "./quizCard.module.css";
import { Button } from "@mui/material";
import { QuizComplexity } from "../../components/QuizComplexity/QuizComplexity";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useQuizzes } from "./use-Quizzes";
import { useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import ModalWindow from "../../components/Modal/ModalWindow";
import { resetToDefault } from "./quizzes-slice";
import { Skeleton } from "@mui/material";
export const QuizCard = () => {
  const [quizzes, { status, error, qty }] = useQuizzes();
  const dispatch = useDispatch();
  return (
    <>
      {status === "loading" && (
        <Skeleton variant='rounded' width={"100%"} height={"235px"} />
      )}
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
