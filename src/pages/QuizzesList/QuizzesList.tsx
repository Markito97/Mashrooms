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
  console.log(typeOfPage);

  return (
    <div className={styles.quizzesPageWrapper}>
      <Link to={`/quizzes`} style={{ marginRight: "auto" }}>
        <Button
          variant='contained'
          sx={{ bgcolor: colors.third[100] }}
          startIcon={<ArrowBackIcon />}
        >
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
