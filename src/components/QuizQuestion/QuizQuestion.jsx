import styles from './QuizQuestion.module.css';
// import { Button } from '../ButtonControl/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Highlight from 'react-highlight';
export const QuizQuestion = ({ category, questions }) => {
  console.log('array with questions =>>', questions);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answerColor, setAnswerColor] = useState('white');
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [isDisabled, setDisabled] = useState(false);

  const handleNextQuestion = (e, questionNumber) => {
    setDisabled(false);
    setError(false);
    setHelperText('');
    e.preventDefault();
    setValue('');
    if (questionNumber + 1 < questions.length) {
      setQuestionNumber(questionNumber + 1);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleAnswer = (e) => {
    e.preventDefault();
    if (Number(value) === questions[questionNumber].correctAnswer) {
      setError(false);
      setHelperText('Nice, it is correct answer!');
      setDisabled(true);
      setAnswerColor('green');
    } else {
      setError(true);
      setHelperText('Sorry, wrong answer!');
      setAnswerColor('red');
      setDisabled(true);
    }
  };
  if (questions.length === 0) return null;
  return (
    <div className={styles.questionBox}>
      <Link to={`/quizzes/${category}`}>
        <ArrowBackIcon /> Назад к выбору теста
      </Link>
      <h1
        className={styles.questionBoxTitle}
      >{`Тест на знание технологии ${category}`}</h1>
      <div>
        <div>тут будет прогресс барр</div>
        <div className={styles.questionText}>
          {questions[questionNumber].question}
        </div>
        <FormControl error={error} disabled={isDisabled} size='medium'>
          <FormLabel
            id='demo-controlled-radio-buttons-group'
            sx={{ fontSize: '30px', color: 'white' }}
          >
            Варианты ответа:
          </FormLabel>
          <RadioGroup
            aria-labelledby='demo-controlled-radio-buttons-group'
            name='controlled-radio-buttons-group'
            value={value}
            onChange={handleChange}
          >
            {questions[questionNumber].answerOptions.map((answer, index) => {
              const answerCode = <Highlight>{answer}</Highlight>;
              return (
                <FormControlLabel
                  value={index}
                  control={<Radio />}
                  label={answerCode}
                  key={index}
                />
              );
            })}
          </RadioGroup>
          <FormHelperText sx={{ color: `${answerColor}!important` }}>
            {helperText}
          </FormHelperText>
        </FormControl>
        <div className={styles.btnContainer}>
          <Button
            onClick={(e) => handleNextQuestion(e, questionNumber)}
            variant='outlined'
            disabled={isDisabled}
          >
            Пропустить вопрос
          </Button>
          <Button
            variant='outlined'
            onClick={(e) => handleNextQuestion(e, questionNumber)}
          >
            Следующий вопрос
          </Button>
          <Button
            variant='outlined'
            onClick={(e) => handleAnswer(e)}
            disabled={isDisabled}
          >
            Ответить
          </Button>
        </div>
      </div>
    </div>
  );
};
