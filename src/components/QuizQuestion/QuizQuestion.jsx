import styles from './QuizQuestion.module.css';
import { Button } from '../ButtonControl/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export const QuizQuestion = ({ category, questions }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  console.log('array with questions =>>', questions);

  const handleNextQuestion = (e, questionNumber) => {
    e.preventDefault();
    if (questionNumber + 1 < questions.length) {
      setQuestionNumber(questionNumber + 1);
    }
  };

  const handleAnswer = (e) => {
    e.preventDefault();
    console.log('handleAnswer');
  };
  if (questions.length === 0) return null;
  return (
    <div className={styles.questionBox}>
      <Link to={`/quizzes/${category}`}>Назад к выбору теста</Link>
      <h1
        className={styles.questionBoxTitle}
      >{`Тест на знание технологии${category}`}</h1>
      <div>
        <div>тут будет прогресс барр</div>
        <form>
          <div className={styles.questionText}>
            {questions[questionNumber].question}
          </div>
          <ul className={styles.answerBox}>
            {questions[questionNumber].answerOptions.map((answer, index) => {
              return <li key={index}>{answer}</li>;
            })}
          </ul>
          <div className={styles.questionButtons}>
            <Button
              text={'Пропустить вопрос'}
              onclick={(e) => handleNextQuestion(e, questionNumber)}
            ></Button>
            <Button text={'Ответить'} onclick={(e) => handleAnswer(e)}></Button>
          </div>
        </form>
      </div>
    </div>
  );
};
