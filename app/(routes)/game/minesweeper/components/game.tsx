"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  GameSettings,
  generateGrid,
  selectBombRevealed,
  selectFlagCount,
  selectGrid,
  selectRevealedCount,
  selectUnflaggedMineCount,
} from "../hooks/gameSlice";
import styles from "./Game.module.css";
import Tile from "./Tile";
import DigitsDisplay from "./DigitsDisplay";
import Smiley from "./Smiley";
import axios from "axios";

type GameProps = {
  settings: GameSettings;
};

function Game({ settings }: GameProps) {
  const dispatch = useAppDispatch();
  const grid = useAppSelector(selectGrid);
  const revealedCount = useAppSelector(selectRevealedCount);
  const unflaggedMineCount = useAppSelector(selectUnflaggedMineCount);
  const flagCount = useAppSelector(selectFlagCount);
  const bombRevealed = useAppSelector(selectBombRevealed);
  const [mouseDownOnTile, setMouseDownOnTile] = useState(false);
  const [timerStarted, setTimerStarted] = useState(-1);
  const [timeToDisplay, setTimeToDisplay] = useState(0);
  const [totalCoins, setTotalCoins] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [canGetCoins, setCanGetCoins] = useState<boolean>(false);

  const handleVisibilityChange = () => {
    if (document.hidden) {
      // Page is hidden, pause the timer
      clearInterval(timerInterval);
    } else {
      // Page is visible again, resume the timer
      startTimer();
    }
  };

  // Function to start the timer
  const startTimer = () => {
    timerInterval = setInterval(() => {
      setTime((prevTime) => prevTime + 1000); // Increment by 1 second
    }, 1000);
  };

  // Initialize the timer interval
  let timerInterval: NodeJS.Timeout;

  useEffect(() => {
    // Add a visibility change event listener
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Load totalCoins from the server using GET request
    axios.get("/api/wheelSpin").then((response) => {
      setTotalCoins(response.data.totalCoins);
    });

    startTimer(); // Start the timer

    return () => {
      // Remove the visibility change event listener and clear the timer
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearInterval(timerInterval);
    };
  }, []);
  useEffect(() => {
    // Check if 10 seconds have passed
    if (time >= 450000) {
      setCanGetCoins(true);
    } else {
      setCanGetCoins(false);
    }
  }, [time]);

  const handleGetCoins = async () => {
    try {
      // Make a POST request to add 100 coins
      await axios.post("/api/wheelSpin", { coin: "100 coins" });

      // Reset the timer to 0 seconds when the "Get Coin" button is clicked
      setTime(0);

      // Update the totalCoins state
      setTotalCoins((prevTotalCoins) => prevTotalCoins + 100);
      if (totalCoins + 100 >= 100) {
        const audio = new Audio("/images/ting-ting.mp3"); // Correct path to your audio file
        audio.play();
      }
    } catch (error) {
      console.error("Error getting coins:", error);
    }
  };
  function restartGame() {
    dispatch(generateGrid(settings));
    setTimeToDisplay(0);
    setTimerStarted(-1);
  }

  useEffect(restartGame, [settings]);

  useEffect(() => {
    if (timerStarted >= 0) {
      const interval = setInterval(() => {
        setTimeToDisplay(Math.floor((Date.now() - timerStarted) / 1000));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timerStarted]);

  useEffect(() => {
    if (revealedCount === 0) setTimerStarted(-1);
    else if (revealedCount > 0 && timerStarted < 0) setTimerStarted(Date.now());
  }, [revealedCount]);

  const win =
    unflaggedMineCount === 0 &&
    flagCount === settings.minesCount &&
    revealedCount + settings.minesCount === settings.height * settings.width;
  const gameEnded = win || bombRevealed;

  useEffect(() => {
    if (gameEnded) {
      setTimerStarted(-1);
    }
  }, [gameEnded]);

  return (
    <>
      <div className="text-center mt-2">
        {canGetCoins ? (
          <button
            onClick={handleGetCoins}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          >
            Nhận 100 xu
          </button>
        ) : (
          <p className="text-red-500 mt-4">
            Vui lòng đợi thêm {Math.ceil((450000 - time) / 1000)} giây để nhận
            xu
          </p>
        )}
        <div className="font-semibold"> Tổng xu của bạn: {totalCoins}</div>
      </div>
      <div className="ml-[380px]">
        <div className={`${styles["game"]} ${styles["outer-border"]}`}>
          <div className={`${styles["game-status"]} ${styles["inner-border"]}`}>
            <DigitsDisplay digits={3} value={settings.minesCount - flagCount} />
            <Smiley
              state={
                gameEnded
                  ? win
                    ? "WIN"
                    : "LOSE"
                  : mouseDownOnTile
                  ? "SCARED"
                  : "NORMAL"
              }
              onClick={restartGame}
            />
            <DigitsDisplay digits={3} value={timeToDisplay} />
          </div>
          <div className={styles["inner-border"]}>
            {grid.map((row, y) => (
              <div key={`row-${y}`} className={styles["row"]}>
                {row.map((tile, x) => (
                  <Tile
                    tile={tile}
                    coordinates={{ x, y }}
                    key={`${y}-${x}`}
                    gameEnded={gameEnded}
                    onMouseDown={(e) =>
                      e.button === 0 && setMouseDownOnTile(true)
                    }
                    onMouseUp={(e) =>
                      e.button === 0 && setMouseDownOnTile(false)
                    }
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
