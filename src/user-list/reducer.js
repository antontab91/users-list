import { USERS_RECEIVED, USER_RECEIVED } from './actions'


const initialState = {
  users: []
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_RECEIVED: {
      return {
        ...state,
        users: action.payload.users
      }
    }

    case USER_RECEIVED: {
      const { user } = action.payload;

      if (!user) return state;

      const userIds = state.users.map(user => user.id);
      const index = userIds.indexOf(user.id);

      let newUsers = [...state.users];

      if (index > -1) {
        newUsers = state.users.splice(index, 1);
      }

      return {
        ...state,
        users: [...newUsers, user]
      };
    }



    default: {
      return state
    }
  }
}