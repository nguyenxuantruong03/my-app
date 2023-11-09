"use client";
// Import the required modules from Next.js
import Container from "@/components/ui/container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export const revalidate =86400
const GamePage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const handleClick2048 = () => {
    router.push("/game/2048");
  };

  const handleClickDino = () => {
    router.push("/game/dino");
  };

  const handleClickMinesweeper = () => {
    router.push("/game/minesweeper");
  };
  const handleClickPacman= () => {
    router.push("/game/pacman");
  };
   const handleClickTictoe= () => {
    router.push("/game/tictoe");
  };
  const handleClickTetris= () => {
    router.push("/game/tetris");
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Container>
      <div className="mt-40"> 
        <h1 className="text-center text-4xl font-bold my-5"> Trò Chơi nhận xu </h1>
      <div className="my-8 space-x-5 flex">
        <Image
          src="/images/2048.png"
          alt=""
          width={100}
          height={100}
          className="cursor-pointer"
          onClick={handleClick2048}
        />

        <Image
          src="/images/khung-long.jpg"
          alt=""
          width={100}
          height={100}
          className="cursor-pointer"
          onClick={handleClickDino}
        />
          <Image
            src="/images/logo-minesweeper.png"
            alt=""
            width={100}
            height={100}
            className="cursor-pointer"
            onClick={handleClickMinesweeper}
          />
          <Image
            src="/images/imagepacman.png"
            alt=""
            width={100}
            height={100}
            className="cursor-pointer"
            onClick={handleClickPacman}
          />
          <Image
            src="/images/tictoe.png"
            alt=""
            width={100}
            height={100}
            className="cursor-pointer"
            onClick={handleClickTictoe}
          />
          <Image
            src="/images/tetris.png"
            alt=""
            width={100}
            height={100}
            className="cursor-pointer"
            onClick={handleClickTetris}
          />
      </div>
      </div>
    </Container>
  );
};

export default GamePage;
