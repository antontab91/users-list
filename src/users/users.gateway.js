const baseUrl = "http://77.120.241.80:8911/api/users";
const headers = {
  "Content-type": "application/json;charset=utf-8",
}

export const fetchUsersList = () => {
  return fetch((baseUrl))
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("failed to load users list");
    })
}

export const createUser = (userData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers,
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('failed to create user');
      }
    })
}

export const updateUser = (userId, userData) => {
  return fetch(`${baseUrl}/${userId}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('failed to update user');
      }
    })
}

export const deleteUser = (userId) => {
  return fetch(`${baseUrl}/${userId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error('failed to delete user')
    }
  })
}


// console.log(fetchUsersList())