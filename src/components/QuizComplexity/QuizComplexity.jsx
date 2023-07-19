import styles from "./quizComplexity.module.css";
import { ReactComponent as ActiveMushroom } from "../../assets/icons/activeMushroom.svg";
import { ReactComponent as InactiveMushroom } from "../../assets/icons/inActiveMushroom.svg";
import React from "react";

export const QuizComplexity = ({ complexity }) => {
  const mushroomIcons = Array.from({ length: 5 }, (_, index) =>
    index < complexity ? (
      <ActiveMushroom key={index} />
    ) : (
      <InactiveMushroom key={index} />
    )
  );
  return (
    <div className={styles.complexityWrapper}>
      {mushroomIcons.map((icon, index) => (
        <React.Fragment key={index + Date.now()}>{icon}</React.Fragment>
      ))}
    </div>
  );
};
