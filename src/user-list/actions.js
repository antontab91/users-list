import *as usersGateway from '../users.gateway'
import { selectUsers } from '../user-list/selectors';


export const USERS_RECEIVED = "USERS/USERS_RECEIVED";
export const USER_RECEIVED = "USERS/USER_RECEIVED";

const usersReceived = (users) => {
  return {
    type: USERS_RECEIVED,
    payload: {
      users,
    },
  }
}

const userReceived = (user) => {
  return {
    type: USER_RECEIVED,
    payload: {
      user,
    },
  }
}

export const getUsers = () => {
  return function (dispatch) {
    return usersGateway.fetchUsers()
      .then((users) => {
        dispatch(usersReceived(users))
      })
  }
}

export const getUser = (userId) => {
  return function (dispatch) {
    return usersGateway.fetchUser(userId)
      .then((user) => {
        dispatch(userReceived(user))
      })
  }
}

export const createUser = ({ name, surname, desc }) => {
  return function (dispatch) {
    const userData = {
      name,
      surname,
      desc,
    };

    return usersGateway.createUser(userData)
      .then(() => {
        return dispatch(getUsers())
      })
  }
}

export const deleteUser = (userId) => {
  return function (dispatch) {
    return usersGateway.deleteUser(userId)
      .then(() => {
        return dispatch(getUsers())
      })
  }
}


export const updateUser = (userId) => {
  return function (dispatch, getState) {
    const state = getState();
    const usersList = selectUsers(state);
    const user = usersList.find((user) => {
      return user.id === userId;
    })
    const updatedUser = {
      ...user,
      name: user.name,
      surname: user.surname,
      desc: user.desc,

    }
    console.log(updatedUser)
    return usersGateway.updateUser(userId, updatedUser)
      .then(() => {
        return dispatch(getUsers())
      })
  }
}
