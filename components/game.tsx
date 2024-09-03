import * as React from "react";

export interface IGameProps {}

export function Game(props: IGameProps) {
  const boxClass =
    "bg-white h-[18vmin] w-[18vmin] rounded-sm text-[8vmin] text-[#D90429]";
  return (
    <div className="h-[70vh] flex flex-wrap items-center justify-center">
      <div className=" h-[60vmin] w-[60vmin]  flex flex-wrap items-center justify-center gap-[1.5vmin] ">
        <button className={boxClass}></button>
        <button className={boxClass}></button>
        <button className={boxClass}></button>
        <button className={boxClass}></button>
        <button className={boxClass}></button>
        <button className={boxClass}></button>
        <button className={boxClass}></button>
        <button className={boxClass}></button>
        <button className={boxClass}></button>
      </div>
    </div>
  );
}
