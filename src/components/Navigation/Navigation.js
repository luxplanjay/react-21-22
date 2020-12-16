import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/skip-first-render"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Пропуск первого рендера
    </NavLink>

    <NavLink
      to="/pokemon"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Покемоны с хуками
    </NavLink>

    <NavLink
      to="/counter"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      useReducer
    </NavLink>

    <NavLink
      to="/notes"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      useMemo
    </NavLink>
  </nav>
);

export default memo(Navigation);
