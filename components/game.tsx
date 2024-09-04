"use client";
import * as React from "react";
import { useState } from "react";

export interface IGameProps {}

export function Game(props: IGameProps) {
  const [isPlayerO, setIsPlayerO] = useState(false);
  const [positionArray, setPositionArray] = useState<string[]>(
    Array(9).fill("")
  );
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
    if (isPlayerO) {
      setIsPlayerO(false);
      event.target.innerHTML = "O";
    } else {
      setIsPlayerO(true);
      event.target.innerHTML = "X";
    }
    event.target.disabled = true;
    const prevArray = [...positionArray];
    prevArray[position] = isPlayerO ? "O" : "X";
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
          console.log("winner is " + pos1Val);
          return true;
        }
      }
    }
  };

  return (
    <div className="h-[70vh] flex flex-wrap items-center justify-center">
      <div className=" h-[60vmin] w-[60vmin]  flex flex-wrap items-center justify-center gap-[1.5vmin] ">
        {positionArray.map((_, index) => {
          return (
            <Button
              handleClick={handleClick}
              index={index}
              key={"position" + index}
            />
          );
        })}
      </div>
    </div>
  );
}
export interface IButtonProps {
  handleClick: (event: any, position: number) => void;
  index: number;
}

const Button = ({ handleClick, index }: IButtonProps) => {
  return (
    <button
      key={"position" + index}
      className="bg-white h-[18vmin] w-[18vmin] rounded-sm text-[8vmin] text-[#D90429]"
      onClick={(event) => handleClick(event, index)}
    ></button>
  );
};
