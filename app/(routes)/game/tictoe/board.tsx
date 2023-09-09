import React from "react";
import "./tic-tac-toe.sass";

type BoardProps = {
	board: Array<Array<string | null>>;
	handleClick: (row: number, col: number) => void;
};

export const Board = ({ board, handleClick }: BoardProps) => {
	return (
		<div className='board flex-col items-center justify-center flex'>
			{board.map((row, rowIndex) => (
				<div key={rowIndex} className='board_row space-x-2'>
					{row.map((cell, cellIndex) => (
						<button
							key={cellIndex}
							className={`cell ${cell ? `cell_${cell.toLowerCase()}` : ""}`}
							onClick={() => handleClick(rowIndex, cellIndex)}
						>
							{cell}
						</button>
					))}
				</div>
			))}
		</div>
	);
};
