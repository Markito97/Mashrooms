import { useParams } from "react-router-dom";
import { QuizQuestion } from "../../components/QuizQuestion/QuizQuestion";
import { useEffect, useState } from "react";
import { getQuizById } from "../../config";
import { CircularProgress } from "@mui/material";
import Timer from "../../redux/features/timer/Timer.jsx";
import { Box } from "@mui/material";
import styles from "./quizStart.module.css";
import FullScreenErrorPage from "@/components/FullScreenErrorPage/FullScreenErrorPage.js";

export const QuizStart = () => {
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState("");
  const [hasError, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://2maslenka-quizzes.ru/api/" + "quizzes/" + id);
        if (!res.ok) setError(true);
        const data = await res.json();
        setQuestions(data.questions);
        setCategory(data.category);
      } catch (err) {
        setError(true);
      }
    })();
  }, [id]);

  if (hasError) return <FullScreenErrorPage />;
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
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}></Box>
            <Timer />
          </div>
          <QuizQuestion category={category} questions={questions} />
        </>
      )}
    </>
  );
};
