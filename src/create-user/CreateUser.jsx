import React, { useState } from 'react';

const CreateUser = () => {
  const [newUser, setUser] = useState({
    name: "",
    surname: "",
    desc: "",
  });

  const handleChangeInputValue = (e) => {
    const { name, value } = e.target;
    setUser({
      ...newUser,
      [name]: value,
    })
  }

  return (
    <div className="create-user">
      <form
      // onSubmit = {}
      >
        <input className="create-user__input"
          type="text"
          name="name"
          onChange={handleChangeInputValue}
          value={newUser.name}
        />
        <input className="create-user__input"
          type="text"
          name="surname"
          onChange={handleChangeInputValue}
          value={newUser.surname}
        />
        <input className="create-user__input"
          type="text"
          name="desc"
          onChange={handleChangeInputValue}
          value={newUser.desc}
        />
        <button className="btn create-task__btn"
        // onClick={() => {
        //   handleNewUserCreate()
        // }}
        >
          Create
      </button>
      </form>
    </div>
  )
}

export default CreateUser;