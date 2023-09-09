'use client'
import { useState } from "react";
import Header from "./components/Header";
import Scene from "./components/Scene";
import { GameProvider, useGameContext } from "./context/GameContext";
const Pacman = () => {
    return ( 
        <div className="pacman-app mt-24">
      <GameProvider>
        <Header />
        <Scene foodSize={60} border={20} topScoreBoard={100} />
      </GameProvider>
    </div>
     );
}
 
export default Pacman;