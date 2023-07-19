import styles from "./QuizQuestion.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Box,
  useTheme,
  RadioGroup,
  Radio,
} from "@mui/material";
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
  const [answerColor, setAnswerColor] = useState("white");
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [isDisabled, setDisabled] = useState(false);
  const [isAnswer, setAsnwer] = useState(false);
  const [isLastQuestion, setLastQuestion] = useState(false);
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const [radioValue, setValue] = useState(0);

  useEffect(() => {
    if (isLastQuestion) {
      dispatch(stopTimer());
      navigate(`/quizStatistic/${category}/${id}`);
    }
  }, [isLastQuestion]);

  const handleNextQuestion = (e, questionNumber) => {
    setAsnwer(false);
    setDisabled(false);
    setError(false);
    setHelperText("");
    e.preventDefault();
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
        answerOptions: questions[questionNumber].answerOptions,
        correctAnswer: questions[questionNumber].correctAnswer,
        description: questions[questionNumber].description,
        isCorrectAnswer: false,
        isSkipped: true,
      })
    );
    const isLastQuestion = useLastQuestion(questionNumber, questions.length);
    setLastQuestion(isLastQuestion);
    e.preventDefault();
    setAsnwer(false);
    setDisabled(false);
    setError(false);
    setHelperText("");
    setAnswers([]);
    if (questionNumber + 1 < questions.length) {
      setQuestionNumber(questionNumber + 1);
    }
  };
  const handleRadio = (event, prevAnswer) => {
    setValue(event.target.value);
    setAnswers([Number(event.target.value)]);
  };
  const handleCheckBox = (event, prevAnswers) => {
    if (prevAnswers.includes(Number(event.target.value))) {
      setAnswers(
        prevAnswers.filter((answer) => answer !== Number(event.target.value))
      );
    } else {
      setAnswers([...prevAnswers, Number(event.target.value)]);
    }
  };

  const handleAnswer = (e) => {
    const isLastQuestion = useLastQuestion(questionNumber, questions.length);
    setLastQuestion(isLastQuestion);
    e.preventDefault();
    if (answers.length === 0) {
      setError(true);
      setHelperText("Выберите вариант ответа!");
      setAnswerColor("red");
      return;
    }

    const isCorrectAnswer = questions[questionNumber].correctAnswer.every(
      (corrAns) => {
        return (
          answers.includes(corrAns) &&
          questions[questionNumber].correctAnswer.length === answers.length
        );
      }
    );
    dispatch(
      addAnswer({
        number: questionNumber,
        question: questions[questionNumber].question,
        answerOptions: questions[questionNumber].answerOptions,
        correctAnswer: questions[questionNumber].correctAnswer,
        description: questions[questionNumber].description,
        isCorrectAnswer,
        isSkipped: false,
        userAnswers: answers,
      })
    );
    if (isCorrectAnswer && answers.length !== 0) {
      // вынести в отдельный хук?
      setError(false);
      setHelperText("Nice, it is correct answer!");
      setDisabled(true);
      setAnswerColor("green");
      setAsnwer(true);
    } else {
      // пока убрал это, чтоб не было подвестки, что чел ошибся.
      // вынести в отдельный хук?
      // setError(true);
      // setHelperText("Sorry, wrong answer!");
      // setAnswerColor("red");
      setDisabled(true);
      setAsnwer(true);
    }
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
          <FormControl error={error} disabled={isDisabled} size='medium'>
            <FormLabel
              id='demo-controlled-radio-buttons-group'
              sx={{
                fontSize: "30px",
                color: `${colors.third[100]} !important`,
              }}
            >
              Варианты ответа:
            </FormLabel>
            {questions[questionNumber].answerOptions.map((answer, index) => {
              return questions[questionNumber].correctAnswer.length !== 1 ? (
                <FormGroup>
                  <FormControlLabel
                    value={index}
                    control={
                      <Checkbox
                        onChange={(e) => handleCheckBox(e, answers)}
                        checked={answers.includes(index)}
                        sx={{
                          color: colors.third[100],
                          "&.Mui-checked": {
                            color: colors.third[100],
                          },
                        }}
                      />
                    }
                    label={<Highlight>{answer}</Highlight>}
                    key={index}
                  />
                </FormGroup>
              ) : (
                <RadioGroup
                  value={radioValue}
                  onChange={(e) => handleRadio(e)}
                  name='controlled-radio-buttons-group'
                >
                  <FormControlLabel
                    value={index}
                    control={
                      <Radio
                        sx={{
                          color: colors.third[100],
                          "&.Mui-checked": {
                            color: colors.third[100],
                          },
                        }}
                      />
                    }
                    label={<Highlight>{answer}</Highlight>}
                    key={index}
                  />
                </RadioGroup>
              );
            })}

            <FormHelperText
              sx={{ color: `${answerColor}!important`, fontSize: "20px" }}
            >
              {helperText}
            </FormHelperText>
          </FormControl>
          <div className={styles.btnContainer}>
            <Button
              onClick={(e) => handleSkipQuestion(e, questionNumber)}
              disabled={isDisabled}
              variant='contained'
              sx={{ bgcolor: colors.third[100] }}
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
