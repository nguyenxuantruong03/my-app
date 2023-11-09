"use client"
// @ts-ignore
import ChromeDinoGame from 'react-chrome-dino';

import { useEffect, useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import axios from 'axios';
export const revalidate = 86400;

const DinoPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [time, setTime] = useState<number>(0);
  const [totalCoins, setTotalCoins] = useState<number>(0);
  const [canGetCoins, setCanGetCoins] = useState<boolean>(false);
  // Function to handle page visibility change
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
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Load totalCoins from the server using GET request
    axios.get("/api/wheelSpin").then((response) => {
      setTotalCoins(response.data.totalCoins);
    });

    setIsMounted(true);
    startTimer(); // Start the timer

    return () => {
      // Remove the visibility change event listener and clear the timer
      document.removeEventListener('visibilitychange', handleVisibilityChange);
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
        const audio = new Audio('/images/ting-ting.mp3'); // Correct path to your audio file
        audio.play();
      }
    } catch (error) {
      console.error("Error getting coins:", error);
    }
  };

  if (!isMounted) {
    return null;
  }
  

  return (
    <div className='mt-40 mb-20 relative'>
      <p className="text-7xl text-center">DiNO</p>
        <div className="absolute left-36"> 
      <div className="w-20 h-10 bg-amber-300 rounded-md flex items-center text-sm px-2 mx-auto my-1 font-semibold">Lưu ý<AlertTriangle className=" ml-1 h-5 w-5" /> </div>
      <div className="font-semibold w-48 rounded p-1 mx-auto bg-opacity-50 bg-gray-300 "> Để trải nghiệm tốt nhấn <p className="text-red-500 text-center">&#39;Space&#39; </p> để bắt đầu trò chơi hoặc làm mới.</div>
      </div>
<div className="text-center mt-2">
{canGetCoins ? (
          <button onClick={handleGetCoins} className="bg-green-500 text-white px-4 py-2 rounded mt-4">
            Nhận 100 xu
          </button>
        ) : (
          <p className="text-red-500 mt-4">Vui lòng đợi thêm {Math.ceil((450000 - time) / 1000)} giây để nhận xu</p>
        )}
        <div className='font-semibold'> Tổng xu của bạn: {totalCoins}</div>
</div>
        

      <ChromeDinoGame />
    </div>
  );
};

export default DinoPage;