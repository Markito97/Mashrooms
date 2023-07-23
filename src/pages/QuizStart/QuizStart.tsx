import { Link, useNavigate, useParams } from "react-router-dom";
import { QuizQuestion } from "../../components/QuizQuestion/QuizQuestion";
import { useEffect, useState } from "react";
import { getQuizById } from "../../config";
import { CircularProgress } from "@mui/material";
import Timer from "../../redux/features/timer/Timer.jsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, useTheme } from "@mui/material";
import styles from "./quizStart.module.css";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { colorTokens } from "@/theme";
import { useDispatch } from "react-redux";
import { resetToDefault } from "../../redux/features/quizzes/quizzesSlice.js";

export const QuizStart = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState("");
  const [hasError, setError] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(getQuizById(id));
        if (!res.ok) setError(true);
        const data = await res.json();
        setQuestions(data.questions);
        setCategory(data.category);
      } catch (err) {
        setError(true);
      }
    })();
  }, [id]);

  if (hasError) return <ErrorBoundary />;
  return (
    <>
      {!questions.length && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CircularProgress size={100} />
        </div>
      )}
      {Boolean(questions.length) && (
        <>
          <div className={styles.topPart}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            ></Box>
            <Timer />
          </div>
          <QuizQuestion category={category} questions={questions} />
        </>
      )}
    </>
  );
};
