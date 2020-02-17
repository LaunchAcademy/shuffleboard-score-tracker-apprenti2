import React from "react";

const PlayerScore = props => {
  const handleClick = event => {
    event.preventDefault();
    if (event.currentTarget.value === "+") {
      props.handleScoreChange(props.name, 1);
    } else {
      if (props.score > 0) {
        props.handleScoreChange(props.name, -1);
      }
    }
  };
  return (
    <div className="player-score">
      <h2>{props.name}</h2>
      <h3>
        <button type="submit" value="-" onClick={handleClick}>
          -
        </button>
        {props.score}
        <button type="submit" value="+" onClick={handleClick}>
          +
        </button>
      </h3>
    </div>
  );
};
export default PlayerScore;
