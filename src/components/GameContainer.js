import React, { useState } from "react";
import PlayerScore from "./PlayerScore";

const INITIAL_GAME_STATE = {
  Red: 0,
  Blue: 0
};

const GameContainer = props => {
  const [scores, setScores] = useState(INITIAL_GAME_STATE);

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
        key={name}
        name={name}
        score={scores[name]}
        handleScoreChange={handleScoreChange}
      />
    );
  });
  return (
    <div>
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
