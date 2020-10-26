import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { ROUTES } from '../constants';
import { selectUser } from '../user-list/selectors';
import { getUser } from '../user-list/actions';
import './user.scss';

const User = (props) => {
  const dispatch = useDispatch();

  const userId = props.match.params.id;

  const user = useSelector((state) => {
    return selectUser(state, { id: userId })
  });


  const isUserExist = !!user;

  useEffect(() => {
    if (isUserExist) return;

    dispatch(getUser(userId));

  }, [dispatch, userId, isUserExist])


  return (
    <div>
      <Link className="back_to_list" to={ROUTES.USER_LIST}>Back to list</Link>
      {
        user
          ?
          <div className="user-page">
            <div className="user-page__name">{user.name}</div>
            <div className="user-page__surname">{user.surname}</div>
          </div>
          : <div className="loading">Loading</div>
      }
    </div>
  )
}

export default User;