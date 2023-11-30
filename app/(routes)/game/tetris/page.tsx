import React from "react";
import { TetrisProvider } from "./hooks/useTetris";
import Tetris from "./components/Tetris/Tetris";
import { AlertTriangle } from "lucide-react";
export const revalidate = 86400;

const TetrisPage = () => {
  return (
    <div className="relative">
            <div className="absolute xl:left-16 2xl:left-36 top-60"> 
      <div className="w-20 h-10 bg-amber-300 rounded-md flex items-center text-sm px-2 mx-auto my-1 font-semibold">Lưu ý<AlertTriangle className=" ml-1 h-5 w-5" /> </div>
      <div className="font-semibold w-48 rounded p-1 mx-auto bg-opacity-50 bg-gray-300 "> Để trải nghiệm tốt xem bảng điều khiên để di chuyển khối theo hướng.</div>
            </div>
    <div className="mt-24 max-w-4xl mx-auto bg-black my-4">
    <TetrisProvider>
      <Tetris />
    </TetrisProvider>
    </div>
    </div>
  );
};



export default TetrisPage;