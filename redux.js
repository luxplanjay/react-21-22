// 1 сделали action creator
const deposit = amount => {
  // возвращаем action
  return {
    type: 'deposit',
    payload: { amount },
  };
};

// 2 - сделали reducer чтобы обрабатывать action
function fundsReducer(state = 0, action) {
  switch (action.type) {
    case 'deposit':
      return state + action.payload.amount;

    default:
      return state;
  }
}

// 3 - сделали store чтобы все зарегистрировать и инициализировать
const store = createStore(fundsReducer);

// 4 - привязали к компоненту и отправляем action
<button onClick={REDUX.dispatch(deposit(100))}></button>;
