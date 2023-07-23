import { Link } from "react-router-dom";
import styles from "./quizes.module.css";
import { QuizTopic } from "../../components/QuizTopic/QuizTopic";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetToDefault } from "../../redux/features/quizzes/quizzesSlice";

const Quizzes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetToDefault());
    };
  }, []);

  return (
    <div className={styles.quizesWrapper}>
      {quizes.map((quiz, index) => (
        <Link to={quiz.path} key={index}>
          <QuizTopic quizType={quiz.quizType} color={quiz.color} />
        </Link>
      ))}
    </div>
  );
};
export { Quizzes };

const quizes = [
  { path: "/quizzes/JS", color: "yelow", quizType: "JavaScript" },
  { path: "/quizzes/React", color: "white-blue", quizType: "React" },
  { path: "/quizzes/TS", color: "blue", quizType: "TypeScript" },
  { path: "/quizzes/HTML", color: "html", quizType: "HTML" },
  { path: "/quizzes/CSS", color: "css", quizType: "CSS" },
];
