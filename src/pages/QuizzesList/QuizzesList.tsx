import { Link, useParams } from "react-router-dom";
import { getTypeOfPage } from "../../utils/getTypeOfPage";
import styles from "./quizzesList.module.css";
import { QuizCard } from "../../features/quizzes/QuizCard";
import { Button, useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { colorTokens } from "@/theme";

export const QuizzesList = () => {
  const { type } = useParams();
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const typeOfPage = getTypeOfPage(type);

  return (
    <div className={styles.quizzesPageWrapper}>
      <div className={`${styles.header} ${styles[type]}`}>{typeOfPage}</div>
      <div className={styles.quizCardsContainer}>
        <QuizCard />
      </div>
    </div>
  );
};
