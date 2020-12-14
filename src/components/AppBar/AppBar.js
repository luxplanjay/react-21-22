import React from 'react';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import authContext from '../../contexts/auth/context.js';
import styles from './Appbar.module.css';

export default function Appbar() {
  return (
    <authContext.Consumer>
      {({ isLoggedIn, user, onLogIn, onLogOut }) => (
        <header className={styles.header}>
          <Navigation />

          {isLoggedIn ? (
            <UserMenu onLogOut={onLogOut} user={user} />
          ) : (
            <button type="button" onClick={onLogIn}>
              Войти
            </button>
          )}
        </header>
      )}
    </authContext.Consumer>
  );
}
