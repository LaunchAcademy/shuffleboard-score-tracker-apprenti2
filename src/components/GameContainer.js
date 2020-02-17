import React, { useState } from "react";
import PlayerScore from "./PlayerScore";
import PlayerFormContainer from "./PlayerFormContainer";

const INITIAL_GAME_STATE = {};

const GameContainer = props => {
  const [scores, setScores] = useState(INITIAL_GAME_STATE);

  const addNewPlayer = name => {
    setScores(Object.assign({}, scores, { [name]: 0 }));
  };

  const handleScoreChange = (teamName, scoreDelta) => {
    const newScore = {
      [teamName]: scores[teamName] + scoreDelta
    };

    // newScore[teamName] = scores[teamName] + scoreDelta;
    // setScores({
    //   ...scores,
    //   ...newScore
    // })
    setScores(Object.assign({}, scores, newScore));
  };

  const resetScore = event => {
    event.preventDefault();
    setScores(Object.assign({}, INITIAL_GAME_STATE));
  };

  let playerScoreComponents = [];
  Object.keys(scores).forEach(name => {
    playerScoreComponents.push(
      <PlayerScore
        name={name}
        score={scores[name]}
        handleScoreChange={handleScoreChange}
      />
    );
  });
  return (
    <div>
      <PlayerFormContainer addNewPlayer={addNewPlayer} />
      <h1>Shuffleboard Scores</h1>
      {playerScoreComponents}
      <p className="button-container">
        <button type="submit" onClick={resetScore}>
          Reset
        </button>
      </p>
    </div>
  );
};

export default GameContainer;
