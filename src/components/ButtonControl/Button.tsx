import { FC, ReactNode } from "react";
import styles from "./button.module.css";

export const Button: FC<{ children: ReactNode }> = ({ children }) => {
  return <button className={styles.buttonControl}>{children}</button>;
};
