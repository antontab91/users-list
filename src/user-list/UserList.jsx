import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CreateUser from '../create-user/CreateUser'
import { ROUTES } from '../constants';
import { getUsers, deleteUser } from './actions';
import { selectUsers } from './selectors'; 1
import './userList.scss';


const UserList = () => {
  const [page, setPage] = useState(0);

  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(page))
  }, [dispatch, page]);

  const goPrev = () => {
    setPage(page - 1)
  };

  const goNext = () => {
    setPage(page + 1)
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId))
  }

  const usersPerPage = 5;
  const totalUsers = users.length; // общее количество юзеров 
  const firsIndexOnPage = page * usersPerPage; // индекс первого юзера , который показывается на странице 
  const lastIndexOnPage = firsIndexOnPage + usersPerPage; // индекс последнего юзера , который показывается на странице 
  const usersOnPage = users.slice(firsIndexOnPage, lastIndexOnPage); // с какого по какой индекс показываются юзеры на текущей странице
  const isPrevPageAvailable = page === 0;
  const isNextPageAvailable = page === Math.ceil(totalUsers / usersPerPage) - 1;


  return (
    <>
      <CreateUser />
      <div className="all-users">
        {
          usersOnPage.map(user => {
            return (
              <Link key={user.id} to={`${ROUTES.USER}${user.id}`}>
                <div className="user">
                  <div className="user__data">
                    <div className="user__name">{user.name}</div>
                    <div className="user__surname">{user.surname}</div>
                  </div>
                  <div onClick={(e) => {
                    e.preventDefault()
                    handleDeleteUser(user.id)
                  }} className="user__delete-btn">
                    delete
                </div>
                </div>
              </Link>
            )
          })
        }

      </div>

      <div className="nav-btns">
        <button
          className="btn"
          onClick={goPrev}
          disabled={isPrevPageAvailable}
        >
          {isPrevPageAvailable ? "" : "← prev"}
        </button>
        <div className="cur">page: {page + 1}</div>
        <button
          className="btn"
          onClick={goNext}
          disabled={isNextPageAvailable}
        >
          {isNextPageAvailable ? "" : "next→"}
        </button>
      </div>
    </>
  )
}

export default UserList;