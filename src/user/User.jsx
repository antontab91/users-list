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
            {/* <div className="user-page__name">{user.name}</div>
            <div className="user-page__surname">{user.surname}</div> */}

            <form className="create-user"
            // onSubmit={handleFormSubmit}
            >
              <h1 className="create-user__title">{`Please update this user (id: ${userId} ^_^) `}</h1>
              <div className="create-user__form-control">
                <label className="create-user__label"
                  htmlFor="name">First Name </label>
                <input className="create-user__input"
                  type="text"
                  name="name"
                // onChange={handleChangeInputValue}
                // value={newUser.name}
                />
              </div>
              <div className="create-user__form-control">
                <label className="create-user__label"
                  htmlFor="surname">Last Name </label>
                <input className="create-user__input"
                  type="text"
                  name="surname"
                // onChange={handleChangeInputValue}
                // value={newUser.surname}
                />
              </div>
              <div className="create-user__form-control">
                <label className="create-user__label"
                  htmlFor="desc">Description </label>
                <input className="create-user__input"
                  type="text"
                  name="desc"
                // onChange={handleChangeInputValue}
                // value={newUser.desc}
                />
              </div>
              <div className="create-user__form-control">

                <button className="btn create-user__btn"
                >
                  Create
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