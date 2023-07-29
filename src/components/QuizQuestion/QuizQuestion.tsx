import styles from "./QuizQuestion.module.css";
import { useNavigate, useParams } from "react-router-dom";
import React, { FC, useEffect, useState } from "react";
import { Button, Box, useTheme, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addAnswer } from "../../redux/features/answers/answerSlice";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Highlight from "react-highlight";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import { stopTimer } from "../../redux/features/timer/timerSlice";
import { colorTokens } from "@/theme";
import { Answer, QuestionModel } from "@/models/question.model";

interface QuizQuestionProps {
  category: string;
  questions: QuestionModel[];
}

const PAGINATION_STEP = 1;

export const QuizQuestion: FC<QuizQuestionProps> = ({ category, questions }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [error, setError] = useState(false);
  const [isAnswer, setAsnwer] = useState(false);
  const [isLastQuestion, setLastQuestion] = useState(false);
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  useEffect(() => {
    if (isLastQuestion) {
      dispatch(stopTimer());
      navigate(`/quizStatistic/${category}/${id}`);
    }
  }, [isLastQuestion]);

  const checkLastQuestion = (questionNumber: number, length: number): boolean => {
    return questionNumber + 1 === length ? true : false;
  };

  const handleNextQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAsnwer(false);
    setError(false);
    setAnswers([]);
    if (questionNumber + PAGINATION_STEP < questions.length) {
      setQuestionNumber(questionNumber + PAGINATION_STEP);
    }
  };

  const handleSkipQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const answerOptions = questions[questionNumber].answers.map((answer) => {
      answer.userSelect = null;
      return answer;
    });

    dispatch(
      addAnswer({
        number: questionNumber,
        question: questions[questionNumber].question,
        answerOptions: answerOptions,
      })
    );

    const isLastQuestion = checkLastQuestion(questionNumber, questions.length);
    setLastQuestion(isLastQuestion);
    setAsnwer(false);
    setError(false);
    setAnswers([]);
    if (questionNumber + 1 < questions.length) {
      setQuestionNumber(questionNumber + 1);
    }
  };

  const handleCheckBox = (answer: Answer): void => {
    if (answers.some((item) => item === answer.key)) {
      setAnswers((prevAnswers) => prevAnswers.filter((item) => item !== answer.key));
    } else {
      setAnswers([...answers, answer.key]);
    }
  };

  const handleAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const resultAnswer = questions[questionNumber].answers.map((answer) => {
      if (answers.includes(answer.key)) {
        answer.userSelect = true;
        return answer;
      } else {
        answer.userSelect = null;
        return answer;
      }
    });
    const isTrueAnswer = resultAnswer.every(
      (answer) => Boolean(answer.correct) === Boolean(answer.userSelect)
    );
    if (!isTrueAnswer && answers.length) {
      setError(true);
    } else {
      setError(false);
    }
    setAsnwer(true);
    const isLastQuestion = checkLastQuestion(questionNumber, questions.length);
    setLastQuestion(isLastQuestion);
    dispatch(
      addAnswer({
        number: questionNumber,
        question: questions[questionNumber].question,
        answerOptions: questions[questionNumber].answers,
        isTrueAnswer: isTrueAnswer,
      })
    );
  };

  return (
    <div className={styles.questionBox}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography variant="h3" color={colors.third[100]} fontWeight="bold">
          Тест на знание технологии <span className={styles[category]}>{category}</span>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          <Box border={1} borderColor={"#1976d2"} marginBottom={"20px"} padding={"20px"}>
            <Highlight>{questions[questionNumber].question}</Highlight>
          </Box>
          <FormControl error={error} size="medium">
            <FormLabel
              sx={{
                fontSize: "30px",
                color: `${colors.third[100]} !important`,
              }}
            >
              Варианты ответа:
            </FormLabel>
            {questions[questionNumber].answers.map((answer, index) => {
              return (
                <FormGroup key={index}>
                  <FormControlLabel
                    disabled={isAnswer}
                    value={index}
                    control={
                      <Checkbox
                        onChange={(e) => {
                          handleCheckBox(answer);
                        }}
                        checked={answers.some((item) => item === answer.key)}
                        sx={{
                          color: colors.third[100],
                          "&.Mui-checked": {
                            color: colors.third[100],
                          },
                        }}
                      />
                    }
                    label={<Highlight>{answer.value}</Highlight>}
                    key={index}
                  />
                </FormGroup>
              );
            })}

            <FormHelperText sx={{ color: "red", fontSize: "20px" }}>
              {error && "Неправильный ответ!"}
            </FormHelperText>
          </FormControl>
          <div className={styles.btnContainer}>
            <Button
              onClick={(e) => handleSkipQuestion(e)}
              variant="contained"
              sx={{ bgcolor: colors.third[100] }}
              disabled={isAnswer}
            >
              Пропустить вопрос
            </Button>
            {isAnswer === true ? (
              <Button
                variant="contained"
                sx={{ bgcolor: colors.third[100] }}
                onClick={(e) => handleNextQuestion(e)}
              >
                Следующий вопрос
              </Button>
            ) : (
              <Button
                variant="contained"
                sx={{ bgcolor: colors.third[100] }}
                onClick={(e) => handleAnswer(e)}
                disabled={Boolean(!answers.length)}
              >
                Ответить
              </Button>
            )}
          </div>
        </Box>
      </Box>
    </div>
  );
};
