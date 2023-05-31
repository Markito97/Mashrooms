import styles from './complexityOfQuiz.module.css';
import { ReactComponent as ActiveMushroom } from '../../assets/icons/activeMushroom.svg';
import { ReactComponent as InactiveMushroom } from '../../assets/icons/inactiveMushroom.svg';
import React from 'react';

export const ComplexityOfQuiz = (props) => {
  const mushroomIcons = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= props.complexity) {
      mushroomIcons.push(<ActiveMushroom />);
    } else {
      mushroomIcons.push(<InactiveMushroom />);
    }
  }
  return (
    <div className={styles.complexityWrapper}>
      {mushroomIcons.map((icon, index) => (
        <React.Fragment key={index + Date.now()}>{icon}</React.Fragment>
      ))}
    </div>
  );
};
