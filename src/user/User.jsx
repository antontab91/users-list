import React, { useState, useEffect } from 'react';
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
  const [stateUser, updateStateUser] = useState(user);

  const isUserExist = !!user;

  useEffect(() => {
    if (isUserExist) return;

    dispatch(getUser(userId));

  }, [dispatch, userId, isUserExist])


  const handleChangeInputValue = (e) => {
    const { name, value } = e.target;
    updateStateUser({
      ...stateUser,
      [name]: value,
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('dsd');
    dispatch(createUser(newUser))
  }

  return (
    <div>
      <Link className="back_to_list" to={ROUTES.USER_LIST}>Back to list</Link>
      {
        user
          ?
          <div className="user-page">

            <form className="create-user"
              onSubmit={handleFormSubmit}
            >
              <h1 className="create-user__title">{`Please update this user (id: ${userId} ^_^) `}</h1>
              <div className="create-user__form-control">

                <input className="create-user__input"
                  type="text"
                  name="name"
                  onChange={handleChangeInputValue}
                  value={stateUser.name}
                />
              </div>
              <div className="create-user__form-control">

                <input className="create-user__input"
                  type="text"
                  name="surname"
                  onChange={handleChangeInputValue}
                  value={stateUser.surname}
                />
              </div>
              <div className="create-user__form-control">

                <input className="create-user__input"
                  type="text"
                  name="desc"
                  onChange={handleChangeInputValue}
                  value={stateUser.desc}
                />
              </div>
              <div className="create-user__form-control">

                <button className="btn create-user__btn"
                >
                  Update
                </button>
              </div>
            </form>


          </div>
          : <div className="loading">Update</div>
      }
    </div>
  )
}

export default User;