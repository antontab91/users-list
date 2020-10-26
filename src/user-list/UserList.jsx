import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CreateUser from '../create-user/CreateUser'
import { ROUTES } from '../constants';
import { getUsers } from './actions';
import { selectUsers } from './selectors'; 1
import './userList.scss';

const AVAILABLE_LIMITS = [5, 10, 20];

const UserList = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(AVAILABLE_LIMITS[0]);

  const changeLimit = useCallback((event) => {
    const currLimit = +event.target.dataset.limit;

    setLimit(currLimit)
  }, [])

  const changePage = useCallback((event) => {
    const currPage = +event.target.dataset.page;

    setPage(currPage)
  }, [])

  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(page, limit))
  }, [dispatch, page, limit]);

  const isNextPageAvailable = users.length === limit

  return (
    <div className="">
      <CreateUser />
      {
        users.map(user => {
          return (
            <Link key={user.id} to={`${ROUTES.USER}${user.id}`}>
              <div className="user">
                {/* <div>{user.firstName}</div>
                <div>{user.lastName}</div> */}
                <div>{user.name}</div>
                <div>{user.surname}</div>
              </div>
            </Link>
          )
        })
      }
      <div>
        <div>
          <div onClick={changePage} data-page={page > 1 ? page - 1 : 1}>prev</div>
          <div>page: {page}</div>
          <div onClick={changePage} data-page={isNextPageAvailable ? page + 1 : page}>next</div>
        </div>
        <div>
          <div>{limit}</div>
          {
            AVAILABLE_LIMITS.map(item => <div key={item} onClick={changeLimit} data-limit={item}>{item}</div>)
          }
        </div>

      </div>
    </div>
  )
}

export default UserList;