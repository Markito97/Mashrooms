import styles from "./QuizQuestion.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Container, Box, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { addAnswer } from "../../features/answers/answer-slice";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Highlight from "react-highlight";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import { useLastQuestion } from "./useLastQuestion";
import { stopTimer } from "../../features/timer/timer-slice";
import { colorTokens } from "@/theme";

export const QuizQuestion = ({ category, questions }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState(false);
  const [isAnswer, setAsnwer] = useState(false);
  const [isLastQuestion, setLastQuestion] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  useEffect(() => {
    if (isLastQuestion) {
      dispatch(stopTimer());
      navigate(`/quizStatistic/${category}/${id}`);
    }
  }, [isLastQuestion]);

  const handleNextQuestion = (e, questionNumber) => {
    e.preventDefault();
    setAsnwer(false);
    setDisabled(false);
    setError(false);
    setAnswers([]);
    if (questionNumber + 1 < questions.length) {
      setQuestionNumber(questionNumber + 1);
    }
  };
  const handleSkipQuestion = (e, questionNumber) => {
    dispatch(
      addAnswer({
        number: questionNumber,
        question: questions[questionNumber].question,
        answerOptions: questions[questionNumber].answers.map((answer) => {
          answer.userSelect = null;
          return answer;
        }),
      })
    );
    const isLastQuestion = useLastQuestion(questionNumber, questions.length);
    setLastQuestion(isLastQuestion);
    e.preventDefault();
    setAsnwer(false);
    setDisabled(false);
    setError(false);
    setAnswers([]);
    if (questionNumber + 1 < questions.length) {
      setQuestionNumber(questionNumber + 1);
    }
  };

  const handleCheckBox = (event, answer) => {
    if (answers.some((item) => item === answer.key)) {
      setAnswers((prevAnswers) => {
        return prevAnswers.filter((item) => item !== answer.key);
      });
    } else {
      setAnswers([...answers, answer.key]);
    }
  };

  const handleAnswer = (e) => {
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
    const isLastQuestion = useLastQuestion(questionNumber, questions.length);
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
  if (questions.length === 0) return null;
  return (
    <div className={styles.questionBox}>
      <Container sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <h1 className={styles.questionBoxTitle}>
          Тест на знание технологии{" "}
          <span className={styles[category]}>{category}</span>
        </h1>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          <Box
            border={1}
            borderColor={"#1976d2"}
            marginBottom={"20px"}
            padding={"20px"}
          >
            <Highlight>{questions[questionNumber].question}</Highlight>
          </Box>
          <FormControl error={error} size='medium'>
            <FormLabel
              id='demo-controlled-radio-buttons-group'
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
                          handleCheckBox(e, answer, answers);
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
              onClick={(e) => handleSkipQuestion(e, questionNumber)}
              variant='contained'
              sx={{ bgcolor: colors.third[100] }}
              disabled={isAnswer}
            >
              Пропустить вопрос
            </Button>
            {isAnswer === true ? (
              <Button
                variant='contained'
                sx={{ bgcolor: colors.third[100] }}
                onClick={(e) => handleNextQuestion(e, questionNumber)}
              >
                Следующий вопрос
              </Button>
            ) : (
              <Button
                variant='contained'
                sx={{ bgcolor: colors.third[100] }}
                onClick={(e) => handleAnswer(e)}
                disabled={Boolean(!answers.length)}
              >
                Ответить
              </Button>
            )}
          </div>
        </Container>
      </Container>
    </div>
  );
};
