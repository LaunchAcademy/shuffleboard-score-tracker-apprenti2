import React, { useState } from "react";
const PlayerFormContainer = props => {
  const [name, setName] = useState("");

  const handleChange = event => {
    setName(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("The name is " + name);
    props.addNewPlayer(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="playerName"
        value={name}
        onChange={handleChange}
      />
      <input type="submit" value="Add Player" />
    </form>
  );
};

export default PlayerFormContainer;
