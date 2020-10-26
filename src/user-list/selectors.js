// import { createSelector } from 'reselect';

export const selectUsersState = (state) => state.usersReducer;

export const selectUsers = (state) => selectUsersState(state).users;
// export const selectUsers = createSelector(selectUsersState, (usersState) => usersState.users);
// при использовании createSelector: функция вернет предыдущее значение, если входящие данные не изменились.

export const selectUser = (state, props) => {

  const id = props.id;

  if (!id) return;

  const users = selectUsers(state)

  return users.find((user) => {

    return user.id == id
  });
}