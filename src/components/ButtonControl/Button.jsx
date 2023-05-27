import styles from './button.module.css';
export const Button = (props) => {
  return <button className={styles.buttonControl}>{props.text}</button>;
};
