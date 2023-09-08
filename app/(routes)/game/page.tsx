"use client";
// Import the required modules from Next.js
import Container from "@/components/ui/container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./minesweeper/hooks/store";

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Container>
      <div className="mt-40 space-x-5 flex">
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
        <Provider store={store}>
          <Image
            src="/images/logo-minesweeper.png"
            alt=""
            width={100}
            height={100}
            className="cursor-pointer"
            onClick={handleClickMinesweeper}
          />
        </Provider>
      </div>
    </Container>
  );
};

export default GamePage;
