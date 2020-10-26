import axios from 'axios';

const endpoint = 'https://5f96440b11ab98001603a734.mockapi.io/api/v1'
// const endpoint = "http://77.120.241.80:8911/api";
const baseUrl = `${endpoint}/users`;

const headers = {
  "Content-type": "application/json;charset=utf-8",
}

export const fetchUsers = () => {
  return axios((`${baseUrl}`))
    .then((response) => {
      if (response.statusText === 'OK') {
        return response.data;
      }
      throw new Error("failed to load users list");
    })
}

export const fetchUser = (userId) => {
  return axios((`${endpoint}/user/${userId}`))
    .then((response) => {
      if (response.statusText === 'OK') {
        return response.data;
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