import styles from './QuizQuestion.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Button, Container, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addAnswer } from '../../features/answers/answer-slice';
import { resetToDefault } from '../../features/answers/answer-slice';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Highlight from 'react-highlight';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { useLastQuestion } from './useLastQuestion';

export const QuizQuestion = ({ category, questions }) => {
  console.log('array with questions =>>', questions);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answerColor, setAnswerColor] = useState('white');
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [isDisabled, setDisabled] = useState(false);
  const [isAnswer, setAsnwer] = useState(false);
  const [isLastQuestion, setLastQuestion] = useState(false);
  const handleNextQuestion = (e, questionNumber) => {
    setAsnwer(false);
    setDisabled(false);
    setError(false);
    setHelperText('');
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
    setHelperText('');
    setAnswers([]);
    if (questionNumber + 1 < questions.length) {
      setQuestionNumber(questionNumber + 1);
    }
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
      setHelperText('Выберите вариант ответа!');
      setAnswerColor('red');
      return;
    }
    const isCorrectAnswer = answers.every((answer) =>
      questions[questionNumber].correctAnswer.includes(answer)
    );
    console.log(isCorrectAnswer);
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
      setError(false);
      setHelperText('Nice, it is correct answer!');
      setDisabled(true);
      setAnswerColor('green');
      setAsnwer(true);
    } else {
      setError(true);
      setHelperText('Sorry, wrong answer!');
      setAnswerColor('red');
      setDisabled(true);
      setAsnwer(true);
    }
  };
  if (questions.length === 0) return null;
  if (isLastQuestion) {
    navigate(`/quizStatistic/${id}`);
    return null;
  }
  return (
    <div className={styles.questionBox}>
      <Button
        onClick={() => {
          dispatch(resetToDefault());
          navigate(-1);
        }}
        variant='outlined'
        sx={{ maxWidth: 'fit-content' }}
      >
        <ArrowBackIcon />
        Назад к выбору теста
      </Button>
      <Container sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h1
          className={styles.questionBoxTitle}
        >{`Тест на знание технологии ${category}`}</h1>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            justifyContent: 'space-between',
          }}
        >
          <Box
            minWidth={'100px'}
            minHeight={'200px'}
            border={1}
            borderColor={'#1976d2'}
            marginBottom={'20px'}
            padding={'20px'}
          >
            {questions[questionNumber].question}
          </Box>
          <FormControl error={error} disabled={isDisabled} size='medium'>
            <FormLabel
              id='demo-controlled-radio-buttons-group'
              sx={{ fontSize: '30px', color: 'white' }}
            >
              Варианты ответа:
            </FormLabel>
            <FormGroup>
              {questions[questionNumber].answerOptions.map((answer, index) => {
                return (
                  <FormControlLabel
                    value={index}
                    control={
                      <Checkbox
                        onChange={(e) => handleCheckBox(e, answers)}
                        checked={answers.includes(index)}
                      />
                    }
                    label={<Highlight>{answer}</Highlight>}
                    key={index}
                  />
                );
              })}
            </FormGroup>
            <FormHelperText sx={{ color: `${answerColor}!important` }}>
              {helperText}
            </FormHelperText>
          </FormControl>
          <div className={styles.btnContainer}>
            <Button
              onClick={(e) => handleSkipQuestion(e, questionNumber)}
              variant='outlined'
              disabled={isDisabled}
            >
              Пропустить вопрос
            </Button>
            {isAnswer === true ? (
              <Button
                variant='outlined'
                onClick={(e) => handleNextQuestion(e, questionNumber)}
              >
                Следующий вопрос
              </Button>
            ) : (
              <Button variant='outlined' onClick={(e) => handleAnswer(e)}>
                Ответить
              </Button>
            )}
          </div>
        </Container>
      </Container>
    </div>
  );
};
