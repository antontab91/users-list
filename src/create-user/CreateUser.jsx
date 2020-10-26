import React, { useState } from 'react';

const CreateUser = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  return (
    <div className="create-user">
      <input className="create-user__input"
        type="text"
        name="value"
      // onChange={this.handleChangeInputValue}
      // value={this.state.value}
      />
      <button className="btn create-task__btn"
      // onClick={() => {
      //   this.handleTaskCreate()
      // }}
      >
        Create</button>
    </div>
  )
}

export default CreateUser;