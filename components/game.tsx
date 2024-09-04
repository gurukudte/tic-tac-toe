"use client";
import * as React from "react";
import { useState } from "react";

export interface IGameProps {}

export function Game(props: IGameProps) {
  const [isPlayerO, setIsPlayerO] = useState(false);
  const [positionArray, setPositionArray] = useState<string[]>(
    Array(9).fill("")
  );
  const [winnerMessage, setWinnerMessage] = useState("Tic-Tac-Tow Game");
  const [gameOver, setGameOver] = useState(false);
  const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const handleClick = (event: any, position: number) => {
    const prevArray = [...positionArray];
    if (isPlayerO) {
      setIsPlayerO(false);
      prevArray[position] = isPlayerO ? "O" : "X";
    } else {
      setIsPlayerO(true);
      prevArray[position] = isPlayerO ? "O" : "X";
    }
    event.target.disabled = true;
    setPositionArray(prevArray);
    checkWinner(prevArray);
  };

  const checkWinner = (array: string[]) => {
    for (let pattern of winPatterns) {
      let pos1Val = array[pattern[0]];
      let pos2Val = array[pattern[1]];
      let pos3Val = array[pattern[2]];
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          setWinnerMessage(pos1Val + " Wins");
          setGameOver(true);
          return true;
        }
      }
    }
  };

  const handleReset = () => {
    setIsPlayerO(false);
    setPositionArray(Array(9).fill(""));
    setGameOver(false);
    setWinnerMessage("Tic-Tac-Tow Game");
  };
  return (
    <div className="h-[70vh] flex flex-col items-center justify-top mt-14 gap-5">
      <h2 className="h-1/3 text-3xl">{winnerMessage}</h2>
      <div className=" h-[60vmin] w-[60vmin]  flex flex-wrap items-center justify-center gap-[1.5vmin] mt-10 ">
        {positionArray?.map((value, index) => {
          return (
            <Button
              value={value}
              handleClick={handleClick}
              index={index}
              disabled={gameOver}
              key={"position" + index}
            />
          );
        })}
      </div>
      <div>
        <button
          className="bg-sky-600 py-2 px-5 mt-10 rounded-md"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export interface IButtonProps {
  handleClick: (event: any, position: number) => void;
  index: number;
  value: string;
  disabled: boolean;
}

const Button = ({ handleClick, index, value, disabled }: IButtonProps) => {
  return (
    <button
      key={"position" + index}
      className="bg-white h-[18vmin] w-[18vmin] rounded-sm text-[8vmin] text-[#D90429]"
      onClick={(event) => handleClick(event, index)}
      disabled={disabled}
    >
      {value}
    </button>
  );
};
