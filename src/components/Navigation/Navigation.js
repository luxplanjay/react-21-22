import NavigationItem from "../NavigationItem/NavigationItem";
import styles from "./Navigation.module.css";

export default function Navigation({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <NavigationItem key={item.text} {...item} />
      ))}
    </ul>
  );
}
