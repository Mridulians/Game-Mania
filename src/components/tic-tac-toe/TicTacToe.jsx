import Board from "./Board";
import GameOver from "./GameOver";
import "./Tic.css";
import { useState, useEffect } from "react";
import GameState from "./GameState";
import Reset from "./Reset";
import GameOverSound from '../../Sounds/GameOver.wav'
import ClickSound from '../../Sounds/Click.wav'

const PLAYER_X = "x";
const PLAYER_O = "O";
 
const gameOverSound = new Audio(GameOverSound);
gameOverSound.volume = 0.2;
const clickSound =  new Audio(ClickSound);
clickSound.volume = 0.5;


const winningCombo = [
  //Rows
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },

  //columns
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },

  //diagonal
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

const checkWinner = (tiles, setStrikeClass, setGameState) => {
  for (const { combo, strikeClass } of winningCombo) {
    const titleValue1 = tiles[combo[0]];
    const titleValue2 = tiles[combo[1]];
    const titleValue3 = tiles[combo[2]];

    if (
      titleValue1 !== null &&
      titleValue1 === titleValue2 &&
      titleValue2 === titleValue3
    ) {
      setStrikeClass(strikeClass);
      if (titleValue1 === PLAYER_X) {
        setGameState(GameState.playerXWins);
      } else {
        setGameState(GameState.playerOWins);
      }
      return;
    }
  }

  const areAllTilesFilledIn = tiles.every((tile) => tile !== null);
  if (areAllTilesFilledIn) {
    setGameState(GameState.draw);
  }
};

const TicTacToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));

  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);

  const [strikeClass, setStrikeClass] = useState();

  const [gameState, setGameState] = useState(GameState.inProgress);

  //   console.log(gameState)

  const handleTileClick = (item) => {
    if (gameState !== GameState.inProgress) {
      return;
    }

    if (tiles[item] !== null) {
      return;
    }

    const newTiles = [...tiles];
    newTiles[item] = playerTurn;
    setTiles(newTiles);
    if (playerTurn == PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };

  const handleReset = ()=>{
     setGameState(GameState.inProgress);
     setTiles(Array(9).fill(null));
     setPlayerTurn(PLAYER_X)
     setStrikeClass(null)
  }

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState);
  }, [tiles]);


  useEffect(()=>{
    if(tiles.some((tile) => tile !== null)){
        clickSound.play();
    }
  } , [tiles])

  useEffect(()=>{
    if(gameState !== GameState.inProgress){
        gameOverSound.play();
    }
  },[gameState])

  return (
    <div>
      <h1>Tic Tac Toe</h1>

      <Board
        playerTurn={playerTurn}
        tiles={tiles}
        onTileClick={handleTileClick}
        strikeClass={strikeClass}
      />

      <GameOver gameState={gameState} />
      <Reset gameState={gameState} onReset = {handleReset} />
    </div>
  );
};

export default TicTacToe;
