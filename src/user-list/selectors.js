// import { createSelector } from 'reselect';

export const selectUsersState = (state) => state.usersReducer;

export const selectUsers = (state) => selectUsersState(state).users;
// export const selectUsers = createSelector(selectUsersState, (usersState) => usersState.users);
// при использовании createSelector: функция вернем предыдущее значение, если входящие данные не изменились.
// function sum(params) {
//   console.log('калькуляция');

//   return params
// }

// const a = sum(1); 
// // log: калькуляция;
// const b = sum(1); 
// // log - отсутсвует;
// const b = sum(2); 
// // log: калькуляция;


export const selectUser = (state, props) => {
  console.log(state, props);
  const id = props.id;

  if (!id) return;

  const users = selectUsers(state)
  console.log(users);

  return users.find((user) => {
    console.log(user, id);
    return user.id == id
  });
}