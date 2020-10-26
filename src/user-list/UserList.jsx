import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CreateUser from '../create-user/CreateUser'
import { ROUTES } from '../constants';
import { getUsers } from './actions';
import { selectUsers } from './selectors'; 1
import './userList.scss';


const UserList = () => {
  const [page, setPage] = useState(1);

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

  const usersPerPage = 5;
  const totalUsers = users.length; // общее количество юзеров 
  const firsIndexOnPage = page * usersPerPage; // индекс первого юзера , который показывается на странице 
  const lastIndexOnPage = firsIndexOnPage + usersPerPage; // индекс последнего юзера , который показывается на странице 
  const usersOnPage = users.slice(firsIndexOnPage, lastIndexOnPage); // с какого по какой индекс показываются юзеры на текущей странице
  const isPrevPageAvailable = page === 1;
  const isNextPageAvailable = page === Math.ceil(totalUsers / usersPerPage) - 1;


  return (
    <div className="">
      <CreateUser />
      {
        usersOnPage.map(user => {
          return (
            <Link key={user.id} to={`${ROUTES.USER}${user.id}`}>
              <div className="user">
                <div>{user.name}</div>
                <div>{user.surname}</div>
              </div>
            </Link>
          )
        })
      }
      <div>
        <div>
          <button
            className="btn"
            onClick={goPrev}
            disabled={isPrevPageAvailable}
          >
            {isPrevPageAvailable ? "" : "←"}
          </button>
          <div>page: {page}</div>
          <button
            className="btn"
            onClick={goNext}
            disabled={isNextPageAvailable}
          >
            {isNextPageAvailable ? "" : "→"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserList;