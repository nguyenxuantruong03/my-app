"use client";
import { useEffect, useState } from "react";
import "./delivery.css";
const items = [
  "Ốngnhựa",
  "Bóngđèn",
  "Pin",
  "Dâyđiện",
  "Sơn",
  "Ổkhóa",
  "Quạt",
  "Đácắt",
];
import {deliverycolor} from "@/components/color/color"

const intervals = [24, 48, 72, 96]; // Hours for each interval

const ImageDelivery = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [remainingTimes, setRemainingTimes] = useState<number[]>(
    calculateRemainingTimes()
  );
  const [randomItemIndex, setRandomItemIndex] = useState<number>(0);
  const [intervalIndex, setIntervalIndex] = useState<number>(0);

  useEffect(() => {
    setIsMounted(true);

    const intervalId = setInterval(() => {
      // Increment interval index cyclically
      const newIndex = (intervalIndex + 1) % intervals.length;
      setIntervalIndex(newIndex);

      if (newIndex === 0) {
        // If a new interval starts (index is 0), generate a random index that hasn't been used before
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * items.length);
        } while (randomIndex === randomItemIndex);

        setRandomItemIndex(randomIndex);
      }

      // Calculate remaining times for all intervals
      const newRemainingTimes = calculateRemainingTimes();
      setRemainingTimes(newRemainingTimes);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [intervalIndex, randomItemIndex]);

  function calculateRemainingTimes(): number[] {
    const now = new Date();
    const remainingTimes: number[] = [];

    for (const interval of intervals) {
      const midnight = new Date();
      midnight.setHours(interval, 0, 0, 0); // Set the time to the specified interval

      const timeDifference = midnight.getTime() - now.getTime();
      remainingTimes.push(Math.max(0, timeDifference)); // Ensure remaining time is not negative
    }

    return remainingTimes;
  }

  function formatTime(time: number): string {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  if (!isMounted) {
    return null;
  }
  
  return (
    <>
      <div>
          <div className={deliverycolor.bg_rounded__p_mt}>
          <p className="font-medium">Thời gian Sale sau</p>
          <div className="loader ml-3 font-semibold">
            <span className="loader-text">
              {formatTime(remainingTimes[intervalIndex])}
            </span>
            </div>
          </div>
      </div>
      <div>
          <div className={deliverycolor.bg_rounded__p_mt}>
          <p className="font-medium">Sản phẩm Sale</p>
          <div className="loaderproductsale ml-3 font-semibold">
            <span className="loader-text">{items[randomItemIndex]} </span>
          </div>
          </div>
      </div>
      <div>
          <div className={deliverycolor.bg_not_w}>
          <p className="slider-right-animation font-semibold">
            Cửa hàng Trường Đạt . T/g làm việc :6:00-18:00. Sđt: 0352261103 .
            Địa chỉ: 457 Lê Văn Quới , Phường Bình Trị Đông A , Quận Bình Tân ,
            Thành Phố Hồ Chí Minh
          </p>
          </div>
      </div>
    </>
  );
};

export default ImageDelivery;
