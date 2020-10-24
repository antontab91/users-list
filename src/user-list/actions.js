import { fetchUsers, fetchUser } from '../users.gateway'


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

export const getUsers = (page, limit) => {
  return function (dispatch) {
    return fetchUsers(page, limit)
      .then((users) => {
        dispatch(usersReceived(users))
      })
  }
}


export const getUser = (userId) => {
  return function (dispatch) {
    return fetchUser(userId)
      .then((user) => {
        dispatch(userReceived(user))
      })
  }
}