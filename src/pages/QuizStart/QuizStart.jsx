import { Link, useNavigate, useParams } from "react-router-dom";
import { QuizQuestion } from "../../components/QuizQuestion/QuizQuestion";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getQuizById } from "../../config";
import { CircularProgress } from "@mui/material";
import Timer from "../../features/timer/Timer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button } from "@mui/material";
import styles from "./quizStart.module.css";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
export const QuizStart = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState("");
  const [hasError, setError] = useState(false);
  const { id } = useParams();
  // интересный момент с работой catch
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(getQuizById(id));
        if (!res.ok) setError(true);
        const data = await res.json();
        console.log(data);
        setQuestions(data.questions);
        setCategory(data.category);
      } catch (err) {
        setError(true);
      }
    })();
  }, [id]);

  if (hasError) {
    return <ErrorBoundary />;
  }
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
            >
              <Link to={`/quizzes/${category}`}>
                <Button
                  onClick={() => {
                    dispatch(resetToDefault());
                    navigate();
                  }}
                  variant='outlined'
                  sx={{ maxWidth: "fit-content" }}
                >
                  <ArrowBackIcon />
                  Назад к выбору теста
                </Button>
              </Link>
            </Box>
            <Timer />
          </div>
          <QuizQuestion category={category} questions={questions} />
        </>
      )}
    </>
  );
};
