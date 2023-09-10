import Header from "./components/Header";
// import Scene from "./components/Scene";
import { GameProvider } from "./context/GameContext";
import dynamic from 'next/dynamic'

const SceneNossr = dynamic(() => import("./components/Scene"), {
  ssr: false,
});
const Pacman = () => {
    return ( 
        <div className="pacman-app mt-24">
      <GameProvider>
        <Header />
        <SceneNossr foodSize={60} border={20} topScoreBoard={100} />
      </GameProvider>
    </div>
     );
}
 
export default Pacman;