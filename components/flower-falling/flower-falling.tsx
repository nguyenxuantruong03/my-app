"use client"
import "./flower-falling.css"
import React, { useEffect, useState } from 'react';
import gsap, { Sine, Linear } from 'gsap';

const FlowerFalling: React.FC = () => {
  const [containerWidth, setContainerWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const updateContainerWidth = () => {
      setContainerWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateContainerWidth);

    return () => {
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, []);

  useEffect(() => {
    const total = 15;
    const h = window.innerHeight;

    const warp = document.getElementById('container');

    const animm = (elm: HTMLElement, background: string) => {
      gsap.to(elm, { duration: R(6, 15), y: h + 100, ease: Linear.easeNone, repeat: -1, delay: -15 });
      gsap.to(elm, { duration: R(4, 8), x: '+=100', rotationZ: R(0, 180), repeat: -1, yoyo: true, ease: Sine.easeInOut });
      gsap.to(elm, { duration: R(2, 8), rotationX: R(0, 360), rotationY: R(0, 360), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -5 });
    };

    const createDot = (background: string) => {
      const Div = document.createElement('div');
      gsap.set(Div, { attr: { class: 'dot' }, x: R(0, containerWidth), y: R(-200, -150), z: R(-200, 200) });
      Div.style.background = `url(${background})`;
      Div.style.backgroundSize = '100% 100%';
      warp?.appendChild(Div);
      animm(Div, background);
    };

    for (let i = 0; i < total; i++) {
      createDot('/images/hoa-mai1.png'); // First background
      createDot('/images/hoa-mai2.png'); // Second background
    }

    function R(min: number, max: number) {
      return min + Math.random() * (max - min);
    }
  }, [containerWidth]);

  return <div id="container"></div>;
};

export default FlowerFalling;
