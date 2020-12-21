import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      exact
      to="/"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Главная
    </NavLink>

    <NavLink
      to="/authors"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Авторы
    </NavLink>

    <NavLink
      to="/books"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Книги
    </NavLink>
  </nav>
);

export default Navigation;
