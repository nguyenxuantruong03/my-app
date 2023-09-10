"use client"
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import { AlertTriangle, ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import "./style.css"
import axios from "axios";

const IndexPage = () => {
  const [board, setBoard] = useState<number[][] | null>(null);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [gameState, setGameState] = useState("initial");
  const gameContainerRef = useRef<HTMLDivElement | null>(null);
  const [totalCoins, setTotalCoins] = useState<number>(0);
  

  useEffect(() => {
     const audio = new Audio("/images/game-over.mp3");
    // Check for game over and calculate totalCoins when the game is over
    if (gameOver) {
      // Calculate the newTotalCoins when the game is over
      const newTotalCoins = totalCoins + Math.floor(score / 100);
  
      // Save the new totalCoins to the database
      updateTotalCoinsAndSave(newTotalCoins);
      audio.play();
      setMessage(
        `Game OVER! Tổng xu bạn nhận: ${Math.floor(score / 100)} xu. Tổng điểm ${score}`
      );
    }
  }, [gameOver, score]);
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
  
      
  // Create board with two random coordinate numbers
  const initBoard = () => {
    let newBoard = Array.from({ length: 4 }, () => Array(4).fill(0));
    newBoard = placeRandom(placeRandom(newBoard));
    setBoard(newBoard);
    setScore(0);
    setGameOver(false);
    setMessage(null);
    setGameState("playing"); 
  };
  
  // Get all blank coordinates from board
  const getBlankCoordinates = (currentBoard: number[][]) => {
    const blankCoordinates: [number, number][] = [];

    for (let r = 0; r < currentBoard.length; r++) {
      for (let c = 0; c < currentBoard[r].length; c++) {
        if (currentBoard[r][c] === 0) {
          blankCoordinates.push([r, c]);
        }
      }
    }

    return blankCoordinates;
  };

  // Grab random start number
  const randomStartingNumber = () => {
    const startingNumbers = [2, 4];
    return startingNumbers[Math.floor(Math.random() * startingNumbers.length)];
  };

  // Place random starting number on an empty coordinate
  const placeRandom = (currentBoard: number[][]) => {
    const blankCoordinates = getBlankCoordinates(currentBoard);
    const randomCoordinate =
      blankCoordinates[Math.floor(Math.random() * blankCoordinates.length)];
    const randomNumber = randomStartingNumber();

    const newBoard = [...currentBoard];
    newBoard[randomCoordinate[0]][randomCoordinate[1]] = randomNumber;
    return newBoard;
  };

  // Compares two boards to check for movement
  const boardMoved = (original: number[][], updated: number[][]) => {
    return JSON.stringify(updated) !== JSON.stringify(original);
  };

  
  // Moves board depending on direction and checks for game over
  const move = (direction: "up" | "right" | "down" | "left") => {
    if (board) {
      if (!gameOver) {
        let movedBoard: { board: number[][]; score: number } | number[][] = [];
        switch (direction) {
          case "up":
            movedBoard = moveUp(board);
            break;
          case "right":
            movedBoard = moveRight(board);
            break;
          case "down":
            movedBoard = moveDown(board);
            break;
          case "left":
            movedBoard = moveLeft(board);
            break;
          default:
            movedBoard = board;
        }

        if (Array.isArray(movedBoard)) {
          // Handle case where movedBoard is number[][]
          // It's up to you how you want to handle this case.
        } else {
          // Handle case where movedBoard is { board: number[][]; score: number }
          if (boardMoved(board, movedBoard.board)) {
            const boardWithRandom = placeRandom(movedBoard.board);

            if (checkForGameOver(boardWithRandom)) {
              setBoard(boardWithRandom);
              setGameOver(true);
            } else {
              setBoard(boardWithRandom);
              setScore(score + movedBoard.score);
            }
          }
        }
      } else {
        setMessage("Game over. Please start a new game.");
      }
    }
  };

  

  // Move functions (moveUp, moveRight, moveDown, moveLeft)
  const moveUp = (inputBoard: number[][]) => {
    let rotatedRight = rotateRight(inputBoard);
    let board = [];
    let score = 0;

    // Shift all numbers to the right
    for (let r = 0; r < rotatedRight.length; r++) {
      let row = [];
      for (let c = 0; c < rotatedRight[r].length; c++) {
        let current = rotatedRight[r][c];
        current === 0 ? row.unshift(current) : row.push(current);
      }
      board.push(row);
    }

    // Combine numbers and shift to right
    for (let r = 0; r < board.length; r++) {
      for (let c = board[r].length - 1; c >= 0; c--) {
        if (board[r][c] > 0 && board[r][c] === board[r][c - 1]) {
          board[r][c] = board[r][c] * 2;
          board[r][c - 1] = 0;
          score += board[r][c];
        } else if (board[r][c] === 0 && board[r][c - 1] > 0) {
          board[r][c] = board[r][c - 1];
          board[r][c - 1] = 0;
        }
      }
    }

    // Rotate board back upright
    board = rotateLeft(board);

    return { board, score };
  };

  const moveRight = (inputBoard: number[][]) => {
    let board = [];
    let score = 0;

    // Shift all numbers to the right
    for (let r = 0; r < inputBoard.length; r++) {
      let row = [];
      for (let c = 0; c < inputBoard[r].length; c++) {
        let current = inputBoard[r][c];
        current === 0 ? row.unshift(current) : row.push(current);
      }
      board.push(row);
    }

    // Combine numbers and shift to right
    for (let r = 0; r < board.length; r++) {
      for (let c = board[r].length - 1; c >= 0; c--) {
        if (board[r][c] > 0 && board[r][c] === board[r][c - 1]) {
          board[r][c] = board[r][c] * 2;
          board[r][c - 1] = 0;
          score += board[r][c];
        } else if (board[r][c] === 0 && board[r][c - 1] > 0) {
          board[r][c] = board[r][c - 1];
          board[r][c - 1] = 0;
        }
      }
    }

    return { board, score };
  };

  const moveDown = (inputBoard: number[][]) => {
    let rotatedRight = rotateRight(inputBoard);
    let board = [];
    let score = 0;

    // Shift all numbers to the left
    for (let r = 0; r < rotatedRight.length; r++) {
      let row = [];
      for (let c = rotatedRight[r].length - 1; c >= 0; c--) {
        let current = rotatedRight[r][c];
        current === 0 ? row.push(current) : row.unshift(current);
      }
      board.push(row);
    }

    // Combine numbers and shift to left
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board.length; c++) {
        if (board[r][c] > 0 && board[r][c] === board[r][c + 1]) {
          board[r][c] = board[r][c] * 2;
          board[r][c + 1] = 0;
          score += board[r][c];
        } else if (board[r][c] === 0 && board[r][c + 1] > 0) {
          board[r][c] = board[r][c + 1];
          board[r][c + 1] = 0;
        }
      }
    }

    // Rotate board back upright
    board = rotateLeft(board);

    return { board, score };
  };

  const moveLeft = (inputBoard: number[][]) => {
    let board = [];
    let score = 0;

    // Shift all numbers to the left
    for (let r = 0; r < inputBoard.length; r++) {
      let row = [];
      for (let c = inputBoard[r].length - 1; c >= 0; c--) {
        let current = inputBoard[r][c];
        current === 0 ? row.push(current) : row.unshift(current);
      }
      board.push(row);
    }

    // Combine numbers and shift to left
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board.length; c++) {
        if (board[r][c] > 0 && board[r][c] === board[r][c + 1]) {
          board[r][c] = board[r][c] * 2;
          board[r][c + 1] = 0;
          score += board[r][c];
        } else if (board[r][c] === 0 && board[r][c + 1] > 0) {
          board[r][c] = board[r][c + 1];
          board[r][c + 1] = 0;
        }
      }
    }

    return { board, score };
  };

  // Rotate functions (rotateRight, rotateLeft)
  const rotateRight = (matrix: number[][]) => {
    let result = [];

    for (let c = 0; c < matrix.length; c++) {
      let row = [];
      for (let r = matrix.length - 1; r >= 0; r--) {
        row.push(matrix[r][c]);
      }
      result.push(row);
    }

    return result;
  };

  const rotateLeft = (matrix: number[][]) => {
    let result = [];

    for (let c = matrix.length - 1; c >= 0; c--) {
      let row = [];
      for (let r = matrix.length - 1; r >= 0; r--) {
        row.unshift(matrix[r][c]);
      }
      result.push(row);
    }

    return result;
  };

  // Check to see if there are any moves left
  const checkForGameOver = (currentBoard: number[][]) => {
    const moves = [
      boardMoved(currentBoard, moveUp(currentBoard).board),
      boardMoved(currentBoard, moveRight(currentBoard).board),
      boardMoved(currentBoard, moveDown(currentBoard).board),
      boardMoved(currentBoard, moveLeft(currentBoard).board),
    ];

    return !moves.includes(true);
  };

  useEffect(() => {
    const gameContainer = document.getElementById("game-container");
    if (gameContainer) {
      gameContainer.focus();
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      const nKey = "n";
      const upArrow = "ArrowUp";
      const rightArrow = "ArrowRight";
      const downArrow = "ArrowDown";
      const leftArrow = "ArrowLeft";
    
      if (board) {
        if (!gameOver) {
          if (e.key === upArrow) {
            move("up");
          } else if (e.key === rightArrow) {
            move("right");
          } else if (e.key === downArrow) {
            move("down");
          } else if (e.key === leftArrow) {
            move("left");
          }
        }
      }
    };
    

    document.addEventListener("keydown", handleKeyDown);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    
  },);

   useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === "n" || e.key === "N") {
        startNewGame();
      }
    };

    document.addEventListener("keydown", handleGlobalKeyDown);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleGlobalKeyDown);
    };
  });

  
  const startNewGame = () => {
    initBoard();
    setGameState("playing");
    // Focus the game container element
    if (gameContainerRef.current) {
      gameContainerRef.current.focus();
    }
  };

  
  
  return (
    <Container>
    <div className="text-center mt-40 mb-20 relative" id="game-container" ref={gameContainerRef}>
      <h1 className="text-5xl font-bold my-8">2048</h1>
      <div className="absolute"> 
      <div className="w-20 h-10 bg-amber-300 rounded-md flex items-center text-sm px-2 mx-auto my-1 font-semibold">Lưu ý<AlertTriangle className=" ml-1 h-5 w-5" /> </div>
      <div className="font-semibold w-48 rounded p-1 mx-auto bg-opacity-50 bg-gray-300 ">Sử dụng các nút hoặc mũi tên <p className=" flex ml-10"><ArrowUp /> <ArrowDown /> <ArrowLeft /> <ArrowRight /> </p> để điều khiển hoặc ấn các nút có sẵn. Nhấn <p className="text-red-500">&#39;N&#39; </p> để bắt đầu trò chơi hoặc làm mới.</div>
      </div>
      <div className="my-8">
      <Button
  className="p-2 bg-gray-800 text-blue-500 rounded no-outline"
  onClick={() => {
    if (gameState === "initial") {
      initBoard();
    } else {
      startNewGame();
    }
  }}
>
  {gameState === "initial" ? "Play Game" : "New Game"}
</Button>
      </div>

      <div className="my-4 space-x-4">
        <Button
          className="p-2 px-6 bg-gray-800 text-blue-500 rounded"
          onClick={() => move("up")}
        >
          <ArrowUp />
        </Button>
        <Button
          className="p-2 px-6 bg-gray-800 text-blue-500 rounded"
          onClick={() => move("down")}
        >
           <ArrowDown />
        </Button>
        <Button
          className="p-2 px-6 bg-gray-800 text-blue-500 rounded"
          onClick={() => move("left")}
        >
          <ArrowLeft />
        </Button>
        <Button
          className="p-2 px-6 bg-gray-800 text-blue-500 rounded"
          onClick={() => move("right")}
        >
          <ArrowRight />
        </Button>
      </div>

      <div className="my-4  text-lg font-bold flex ml-[580px]">Tổng điểm: {score}</div>
      <div className="mx-auto w-[450px]">
        <table className="w-full">
          {board?.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>
                  <div
                    className={`w-28 h-28 bg-gray-800 rounded m-auto pt-10 ${
                      cell === 0 ? "" : `cell-${cell}`
                    }`}
                  >
                      {cell !== 0 && cell}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </table>
      </div>

      {message && <p className="text-lg text-red-500 font-bold">{message}</p>}
    </div>
    </Container>
  );
};

export default IndexPage;
