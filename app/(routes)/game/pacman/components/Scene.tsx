'use client'
import React, { useState } from "react";
import Pacman from "./Pacman";
import Ghost from "./Ghost";
import Food from "./Food";
import styled from "styled-components";
import { useGameContext } from "../context/GameContext";
import { DIFFICULTY, Difficulty,COLOR,GAME_STATUS } from "@/types";
import { Volume2 } from 'lucide-react';

type SceneProps = {
  foodSize: number;
  border: number;
  topScoreBoard: number;
};

const pacmanSize = 60;
const pacmanVelocity = 30;
const ghostSize = 60;
const topScoreBoardHeight = 100;

const generateFoodMatrix = (props: SceneProps, amountOfFood: number) => {
  let currentTop = 0;
  let currentLeft = 0;
  const foods = [];
  const fallbackContainerWidth = 400; // Replace with your desired width
  if (typeof window !== "undefined") {
    // Your code that depends on the window object
    for (let i = 0; i <= amountOfFood; i++) {
      if (currentLeft + props.foodSize >= window.innerWidth - props.border) {
        currentTop += props.foodSize;
        currentLeft = 0;
      }
      if (
        currentTop + props.foodSize >=
        window.innerHeight - props.border - props.topScoreBoard
      ) {
        break;
      }
      const position = { left: currentLeft, top: currentTop };
      currentLeft = currentLeft + props.foodSize;
      foods.push(
        <Food
          pacmanSize={pacmanSize}
          hidden={false}
          name={"food" + i}
          $position={position}
          key={i}
        />
      );
    }
  } else {
    // Handle non-browser environment (e.g., SSR or testing)
    // Provide alternative values or behavior here
    // For example:
    const fallbackFoodSize = 40;
    const fallbackPosition = { left: 0, top: 0 };
    for (let i = 0; i <= amountOfFood; i++) {
      foods.push(
        <Food
          pacmanSize={pacmanSize}
          hidden={false}
          name={"food" + i}
          $position={fallbackPosition}
          key={i}
        />
      );
      fallbackPosition.left += fallbackFoodSize;
      if (fallbackPosition.left + fallbackFoodSize >= fallbackContainerWidth) {
        fallbackPosition.left = 0;
        fallbackPosition.top += fallbackFoodSize;
      }
    }
  }
  
  return foods;
};
let audio: HTMLAudioElement | undefined;


audio = new Audio("/images/pacman.mp3");

const Scene = (props: SceneProps) => {
  const {
    setFoodAmount,
    restartGame,
    setDifficulty,
    setGameStatus,
    foodAmount,
    gameStatus,
    difficulty,
  } = useGameContext();

  const [ghostVelocity, setGhostVelocity] = React.useState(20);
  const [volume, setVolume] = useState(50);
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(event.target.value, 10); // Parse the input value to an integer
    setVolume(newVolume);
    if (audio) {
      // Step 3: Set the audio volume
      audio.volume = newVolume / 100; // Convert volume to a value between 0 and 1
    }
  };
  React.useEffect(() => {
    const handleKeyDown = (event:any) => {
      // Check if the pressed key is an arrow key
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        // Prevent the default scrolling behavior
        event.preventDefault();
  
        // Handle your custom logic for arrow key presses here
        // For example, you can move a character or trigger an action.
      }
    };
  
    // Attach the event listener to the window
    window.addEventListener('keydown', handleKeyDown);
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty dependency array means this effect runs once on component mount
  
  React.useEffect(() => {
    if (difficulty === DIFFICULTY.EASY) {
      setGhostVelocity(100);
    }
    if (difficulty === DIFFICULTY.MEDIUM) {
      setGhostVelocity(150);
    }
    if (difficulty === DIFFICULTY.ADVANCED) {
      setGhostVelocity(200);
    }
  }, [difficulty]);

  React.useEffect(() => {
    if (gameStatus === GAME_STATUS.IN_PROGRESS && audio) {
      audio.play();
    } else if (audio) {
      // Stop audio when the game is over or paused
      audio.pause();
      audio.currentTime = 0; // Reset audio to the beginning
    }
  }, [gameStatus]);


  React.useEffect(() => {
    const amountOfFood =
      Math.floor((window.innerWidth - props.border) / props.foodSize) *
      Math.floor(
        (window.innerHeight - props.border - props.topScoreBoard) /
          props.foodSize
      );

    setFoodAmount(amountOfFood);
  }, []);

  return (
    <StyledScene>
      {gameStatus !== GAME_STATUS.IN_PROGRESS &&
        gameStatus !== GAME_STATUS.PAUSED && (
          <OverlayContent>
            {gameStatus === GAME_STATUS.WON ? (
              <CenterContainer>
                <div>
                  <strong>Congratulations :)</strong>
                </div>
                <StyledButton onClick={() => restartGame()}>
                  Play again
                </StyledButton>
              </CenterContainer>
            ) : (
              <CenterContainer>
                <div>
                  <strong>GAME OVER :(</strong>
                  <div>Xu đã được cộng nếu chưa thấy bạn có thể F5 lại.</div>
                </div>
                <StyledButton onClick={() => restartGame()}>
                  Try Again
                </StyledButton>
              </CenterContainer>
            )}
          </OverlayContent>
        )}
        <div className="absolute z-50 -top-[1.5rem] flex">
        <label htmlFor="volume"><Volume2 className="w-5 h-5 text-gray-500 font-semibold"/></label>
        <input
          type="range"
          id="volume"
          name="volume"
          min="1"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
      {gameStatus === GAME_STATUS.PAUSED && (
        <OverlayContent>
          <CenterContainer>
            <div>
              <span>Chế Độ</span>
            </div>
            <div>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as Difficulty)}
              >
                <option value={DIFFICULTY.EASY}>Dễ</option>
                <option value={DIFFICULTY.MEDIUM}>Trung bình</option>
                <option value={DIFFICULTY.ADVANCED}>Khó</option>
              </select>
            </div>

            <StyledButton
              onClick={() => setGameStatus(GAME_STATUS.IN_PROGRESS)}
            >
              Play!
            </StyledButton>
          </CenterContainer>
        </OverlayContent>
      )}
      {generateFoodMatrix(props, foodAmount)}
      <Pacman
        velocity={pacmanVelocity}
        size={pacmanSize}
        border={20}
        topScoreBoard={topScoreBoardHeight}
        name="pacman"
        color={colors.color2}
      ></Pacman>
      <Ghost
        velocity={ghostVelocity}
        size={ghostSize}
        border={20}
        topScoreBoard={topScoreBoardHeight}
        color={COLOR.RED}
        name="ghost1"
      ></Ghost>
      <Ghost
        velocity={ghostVelocity}
        size={ghostSize}
        border={20}
        topScoreBoard={topScoreBoardHeight}
        color={COLOR.GREEN}
        name="ghost2"
      ></Ghost>
      {difficulty !== DIFFICULTY.EASY && (
        <Ghost
          velocity={ghostVelocity}
          size={ghostSize}
          border={20}
          topScoreBoard={topScoreBoardHeight}
          color={COLOR.BLUE}
          name="ghost3"
        ></Ghost>
      )}
      {difficulty === DIFFICULTY.ADVANCED && (
        <Ghost
          velocity={ghostVelocity}
          size={ghostSize}
          border={20}
          topScoreBoard={topScoreBoardHeight}
          color={COLOR.ORANGE}
          name="ghost4"
        ></Ghost>
      )}
    </StyledScene>
  );
};
const colors = {
  color1: "black",
  color2: "rgb(255, 233, 80)",
  color3: "rgb(7, 10, 45)",
};
const CenterContainer = styled.div`
  position: absolute;
  margin: 0 auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 20;
  background-color: ${colors.color2};
  color: ${colors.color3};
  padding: 30px;
  button {
    cursor: pointer;
  }
`;

const OverlayContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  font-size: 35px;
`;

const StyledScene = styled.div`
position:relative;
  --container-width: 100%;
  height: calc(100vh - 120px);
  width: calc(var(--container-width));
  background-color: ${colors.color1};
  position: relative;
  border: 10px ${colors.color3} solid;

`;

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 24px;
  margin-top: 10px;
  background-color: ${colors.color1};
  color: ${colors.color2};
  border: 1px ${colors.color3} solid;
  cursor: pointer;

  :hover {
    background-color: ${colors.color2};
    color: ${colors.color1};
  }
`;

export default Scene;
