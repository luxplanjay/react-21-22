import styles from './PageHeading.module.css';

export default function PageHeading({ text }) {
  return <h1 className={styles.title}>{text}</h1>;
}
