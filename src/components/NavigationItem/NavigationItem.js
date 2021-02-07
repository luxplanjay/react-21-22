import { NavLink } from "react-router-dom";
import styles from "./NavigationItem.module.css";

export default function NavigationItem({ to, text, icon }) {
  return (
    <li>
      <NavLink to={to} className={styles.item} activeClassName={styles.active}>
        {icon} {text}
      </NavLink>
    </li>
  );
}
