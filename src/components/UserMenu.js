import React, { useContext } from 'react';
import authContext from '../context/auth-context';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginTop: 0,
    marginBottom: 0,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const { onLogOut, user } = useContext(authContext);

  return (
    <div style={styles.container}>
      <img
        src={user.avatar}
        alt=""
        width="32"
        height="32"
        style={styles.avatar}
      />
      <p style={styles.name}>Добро пожаловать, {user.name}</p>
      <button type="button" onClick={onLogOut}>
        Выйти
      </button>
    </div>
  );
}
