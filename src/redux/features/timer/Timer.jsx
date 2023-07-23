import React from "react";
import { useEffect, useState } from "react";
import styles from "./timer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateTimer } from "./timerSlice";
import { toCorrectTime } from "../../../utils/toCorrectTime";
import { selectStop } from "./timerSlice";
const Timer = () => {
  const isStop = useSelector((state) => selectStop(state));
  const dispatch = useDispatch();
  const [seconds, setSeconds] = useState(0);
  let time = toCorrectTime(seconds);
  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((sec) => sec + 1);
    }, 1000);
    return () => {
      clearInterval(timerId);
      if (isStop) {
        dispatch(updateTimer(seconds));
      }
    };
  });

  return <div className={styles.timerContainer}>{`${time}`}</div>;
};
export default Timer;
