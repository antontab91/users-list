import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../user-list/actions';
import './CreateUser.scss';


const CreateUser = () => {
  const [newUser, setUser] = useState({
    name: "",
    surname: "",
    desc: "",
  });

  const dispatch = useDispatch();

  const handleChangeInputValue = (e) => {
    const { name, value } = e.target;
    setUser({
      ...newUser,
      [name]: value,
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newUser.name !== "" && newUser.surname !== "" && newUser.desc !== "") {

      dispatch(createUser(newUser))
      setUser({
        name: "",
        surname: "",
        desc: "",
      })
    }

    return null;
  }

  return (

    <form className="create-user"
      onSubmit={handleFormSubmit}
    >
      <h1 className="create-user__title">Please create user</h1>
      <div className="create-user__form-control">
        <label className="create-user__label"
          htmlFor="name">First Name </label>
        <input className="create-user__input"
          type="text"
          name="name"
          onChange={handleChangeInputValue}
          value={newUser.name}
        />
      </div>
      <div className="create-user__form-control">
        <label className="create-user__label"
          htmlFor="surname">Last Name </label>
        <input className="create-user__input"
          type="text"
          name="surname"
          onChange={handleChangeInputValue}
          value={newUser.surname}
        />
      </div>
      <div className="create-user__form-control">
        <label className="create-user__label"
          htmlFor="desc">Description </label>
        <input className="create-user__input"
          type="text"
          name="desc"
          onChange={handleChangeInputValue}
          value={newUser.desc}
        />
      </div>
      <div className="create-user__form-control">

        <button className="btn create-user__btn"
        >
          Create
      </button>
      </div>
    </form>

  )
}

export default CreateUser;