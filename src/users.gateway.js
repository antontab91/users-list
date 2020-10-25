import axios from 'axios';

// const endpoint = 'http://5f947c3e9ecf720016bfc741.mockapi.io/api/v1/'
const endpoint = "http://77.120.241.80:8911/api";
const baseUrl = `${endpoint}/users`;

const headers = {
  "Content-type": "application/json;charset=utf-8",
}

// const LIM

export const fetchUsers = (page, limit) => {
  return axios((`${baseUrl}?page=${page}&limit=${limit}`))
    .then((response) => {
      if (response.statusText === 'OK') {
        return response.data;
      }
      throw new Error("failed to load users list");
    })
}

export const fetchUser = (userId) => {
  return axios((`http://77.120.241.80:8911/api/user/${userId}`))
    .then((response) => {
      if (response.statusText === 'OK') {
        return response.data;
      }
      throw new Error("failed to load users list");
    })
}

export const createUser = (userData) => {
  return axios(baseUrl, {
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
  return axios(`${baseUrl}/${userId}`, {
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
  return axios(`${baseUrl}/${userId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error('failed to delete user')
    }
  })
}