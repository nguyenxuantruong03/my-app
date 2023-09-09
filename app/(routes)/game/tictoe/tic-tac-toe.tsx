"use client"
import React, { useEffect, useRef, useState } from "react";
import { Board } from "./board";
import axios from "axios";

type BoardArray = Array<Array<string | null>>;

const makeComputerMove = (board: BoardArray): [number, number] => {
	const emptyCells: [number, number][] = [];
	board.forEach((row, rowIndex) => {
		row.forEach((cell, cellIndex) => {
			if (!cell) {
				emptyCells.push([rowIndex, cellIndex]);
			}
		});
	});

	const randomIndex = Math.floor(Math.random() * emptyCells.length);
	return emptyCells[randomIndex];
};

const checkWinner = (board: BoardArray): string | null => {
	const lines = [
		//Rows
		[board[0][0], board[0][1], board[0][2]],
		[board[1][0], board[1][1], board[1][2]],
		[board[2][0], board[2][1], board[2][2]],
		//columns
		[board[0][0], board[1][0], board[2][0]],
		[board[0][1], board[1][1], board[2][1]],
		[board[0][2], board[1][2], board[2][2]],

		//Diagonals
		[board[0][0], board[1][1], board[2][2]],
		[board[0][2], board[1][1], board[2][0]],
	];
	for (const line of lines) {
		if (line[0] && line[0] === line[1] && line[1] === line[2]) {
			return line[0];
		}
	}
	return null;
};

export const TicTacToe = () => {
	const initialBoard = Array.from({ length: 9 }, () =>
		Array.from({ length: 9 }, () => null)
	);
	const [board, setBoard] = useState<BoardArray>(initialBoard);
	const [player, setPlayer] = useState<string>("X");
	const [winner, setWinner] = useState<string | null>(null);
	const [isNoWinner, setIsNoWinner] = useState<boolean>(false);
	const [totalCoins, setTotalCoins] = useState<number>(0);

	useEffect(() => {
		if (winner) {
		  // Calculate the newTotalCoins when the game is over
		  const newTotalCoins = totalCoins 
		  // Save the new totalCoins to the database and update the state
		  updateTotalCoinsAndSave(newTotalCoins, winner);
		}
	  }, [winner]);
	  
	const updateTotalCoinsAndSave = async (newTotalCoins: number, winner: string | null) => {
		try {
		  let reward = 0;
	  
		  // Calculate the reward based on the winner
		  if (winner === "X") {
			reward = 15; // Player wins, reward +25 coins
			const winAudio = new Audio("/images/win.mp3");
			winAudio.play();
		  } else if (winner === "O") {
			const gameoverAudio = new Audio("/images/game-over.mp3")
			gameoverAudio.play();
			reward = 5; // AI wins, reward +10 coins
		  }
	  
		  // Add the reward to the newTotalCoins
		  newTotalCoins += reward;
	  
		  // Save the new totalCoins to the database
		  await axios.post("/api/wheelSpin", { coin: `${newTotalCoins} coins` });
	  
		  // Update the state with the new totalCoins
		  setTotalCoins(newTotalCoins);
		} catch (error) {
		  console.error("Error saving totalCoins:", error);
		}
	  };
	  const playClickSound = () => {
		const audio = new Audio("/images/click.mp3");
		audio.play();
	  };

	const handleOnClick = (row: number, col: number) => {
		if (board[row][col] || winner) {
			return;
		}
		playClickSound()
		

		const updatedPlayerBoard = board.map((newRow, rowIndex) =>
			newRow.map((cell, cellIndex) =>
				rowIndex === row && cellIndex === col ? player : cell
			)
		);
		setBoard(updatedPlayerBoard);
		const newWinner = checkWinner(updatedPlayerBoard);
		setWinner(newWinner);
		setPlayer("X");

		// No Winner
		const hasNullValue = updatedPlayerBoard.some((row) =>
			row.some((cell) => cell === null)
		);

		if (!winner && !hasNullValue) {
			setIsNoWinner(true);
			return;
		}
		// Computer's move
		if (!newWinner) {
			//
			const [computerRow, computerCol] = makeComputerMove(updatedPlayerBoard);
			const updatedComputerBoard = updatedPlayerBoard.map((newRow, rowIndex) =>
				newRow.map((cell, cellIndex) =>
					rowIndex === computerRow && cellIndex === computerCol ? "O" : cell
				)
			);

			setTimeout(() => {
				setBoard(updatedComputerBoard);
				setWinner(checkWinner(updatedComputerBoard));
			}, 200); // delay
		}
	};

	const restartGame = () => {
		setBoard(initialBoard);
		setPlayer("X");
		setWinner(null);
		setIsNoWinner(false);
	};

	return (
		<div className="game text-center">
		  <h1 className="text-6xl font-bold mb-4 text-center">Tic-Tac-Toe</h1>
		  <Board board={board} handleClick={handleOnClick} />
		  {winner && <p className="text-2xl my-2 text-red-500 font-semibold">{winner === "X" ? "You Win" : "AI Wins"}</p>}
		  {isNoWinner && <p className="text-2xl">No one wins</p>}
		  <button
			className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 "
			type="button"
			onClick={() => restartGame()}
		  >
			Start new Game
		  </button>
		</div>
	  );
	};
