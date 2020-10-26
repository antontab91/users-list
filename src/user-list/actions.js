import *as usersGateway from '../users.gateway'


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
    const taskData = {
      name,
      surname,
      desc,
    };

    return usersGateway.createUser(taskData)
      .then(() => {
        return dispatch(getUsers())
      })
  }
}

export const deleteUser = (taskId) => {
  return function (dispatch) {
    return usersGateway.deleteUser(taskId)
      .then(() => {
        return dispatch(getUsers())
      })
  }
}
