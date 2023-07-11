import { useState } from 'react';
import styles from './timer.module.css';
import { useSelector } from 'react-redux';
import { selectTimer } from '../../features/timer/timer-slice';
import { toCorrectTime } from '../../utils/toCorrectTime';
export const Timer = () => {
  const sec = useSelector((state) => state.timer.timer);
  let time = toCorrectTime(sec);
  return <div className={styles.timerContainer}>{`${time}`}</div>;
};
