import dynamic from 'next/dynamic'
import Container from "@/components/ui/container";
// import Game from "./components/game";
import { AlertTriangle } from "lucide-react";

const GameNossr = dynamic(() => import("./components/game"), {
  ssr: false,
});
const Page = () => {
  return (
    <Container>
    <div className="mt-32 mb-12 ">
    <p className="text-7xl text-center mb-10">Minesweeper</p>
        <div className="absolute left-36"> 
      <div className="w-20 h-10 bg-amber-300 rounded-md flex items-center text-sm px-2 mx-auto my-1 font-semibold">Lưu ý<AlertTriangle className=" ml-1 h-5 w-5" /> </div>
      <div className="font-semibold w-48 rounded p-1 mx-auto bg-opacity-50 bg-gray-300 "> Để có một trải nghiệm tốt <p className="text-red-500 text-center">&#39;Click vào mặt cười&#39; </p> để bắt đầu trò chơi hoặc làm mới.</div>
      </div>
        <GameNossr settings={{ height: 16, width: 16, minesCount: 40 }} />
    </div>
    </Container>
  );
};

export default Page;
