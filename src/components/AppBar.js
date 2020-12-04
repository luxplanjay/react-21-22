import React from 'react';
import UserMenu from './UserMenu';
import authContext from '../context/auth-context';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '20px 20px',
    borderBottom: '1px solid #2A363B',
  },
};

function First() {
  return <Second />;
}

function Second() {
  return <UserMenu />;
}

export default function AppBar() {
  return (
    <authContext.Consumer>
      {({ isLoggedIn, onLogIn }) => (
        <header style={styles.header}>
          {isLoggedIn ? (
            <First />
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
