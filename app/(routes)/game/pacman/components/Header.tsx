"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGameContext } from "../context/GameContext";
import { useInterval } from "../hooks/useInterval";
import { GAME_STATUS } from "@/types";
import axios from "axios";
import Scene from "./Scene";

const Header = () => {
  const { points, foodAmount, gameStatus } = useGameContext();
  const [timeElapsed, setTimeElapsed] = React.useState(0);
  const [totalCoins, setTotalCoins] = useState<number>(0);
  useEffect(() => {
    const audio = new Audio("/images/game-over.mp3");
   // Check for game over and calculate totalCoins when the game is over
   if (gameStatus === GAME_STATUS.LOST) {
     // Calculate the newTotalCoins when the game is over
     const newTotalCoins = totalCoins + Math.floor(points / 15);
 
     // Save the new totalCoins to the database
     updateTotalCoinsAndSave(newTotalCoins);
     audio.play();
   }
 }, [points,gameStatus]);
 const updateTotalCoinsAndSave = async (newTotalCoins: number) => {
   try {
     // Save the new totalCoins to the database
     await axios.post("/api/wheelSpin", { coin: `${newTotalCoins} coins` });
 
     // Update the state with the new totalCoins
     setTotalCoins(newTotalCoins);
   } catch (error) {
     console.error("Error saving totalCoins:", error);
   }
 };
  React.useEffect(() => {
    document.addEventListener("restart-game", gameRestarted);
    return () => document.removeEventListener("restart-game", gameRestarted);
  }, []);

  function gameRestarted() {
    setTimeElapsed(0);
  }

  useInterval(() => {
    if (gameStatus === GAME_STATUS.IN_PROGRESS) {
      setTimeElapsed((previuosTime) => {
        return previuosTime + 1;
      });
    }
  }, 1000);

  return (
    <StyledHeader>
      <span className="left title">PACMAN</span>
      <div className="right score">
        <div>
          <strong>Điểm: </strong>
          <span className="points">
            {points} / {foodAmount}
          </span>
        </div>
        <div>
          <strong>Thời gian: </strong>
          <span className="points">{timeElapsed}</span>
        </div>
      </div>
    </StyledHeader>
  );
};
const colors = {
  color2: "rgb(255, 233, 80)",
  color3: "rgb(7, 10, 45)",
};
const StyledHeader = styled.div`
  height: 120px;
  background-color: ${colors.color3};
  color: ${colors.color2};
  display: flex;
  padding-left: 55px;
  padding-right: 55px;
  justify-content: space-between;

  .title {
    font-size: 80px;
    text-align: left;
    margin-top: 10px;
  }

  .score {
    font-size: 34px;
    text-align: right;
    margin-top: 10px;
  }
`;

export default Header;
