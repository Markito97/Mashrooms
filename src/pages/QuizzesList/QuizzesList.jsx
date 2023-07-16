import { Link, useParams } from "react-router-dom";
import { getTypeOfPage } from "../../utils/getTypeOfPage";
import styles from "./quizzesList.module.css";
import { QuizCard } from "../../features/quizzes/QuizCard";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export const QuizzesList = () => {
  const { type } = useParams();
  const typeOfPage = getTypeOfPage(type);
  return (
    <div className={styles.quizzesPageWrapper}>
      <Link to={`/quizzes`} style={{ marginRight: "auto" }}>
        <Button variant='outlined' sx={{ maxWidth: "fit-content" }}>
          <ArrowBackIcon />
          Назад к выбору теста
        </Button>
      </Link>
      <div className={`${styles.header} ${styles[type]}`}>{typeOfPage}</div>
      <div className={styles.quizCardsContainer}>
        <QuizCard />
      </div>
    </div>
  );
};
