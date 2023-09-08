declare module 'react-chrome-dino' {
    import React from 'react';
  
    interface ChromeDinoGameProps {
      // Define the props here based on the component's expected props
      // For example:
      width?: number;
      height?: number;
      onRestart?: () => void;
      // Add more props as needed
    }
  
    const ChromeDinoGame: React.FC<ChromeDinoGameProps>;
  
    export default ChromeDinoGame;
  }
  

type Meta={
    id: string,
    title: string,
    date:string,
    tags: string[]
    image: string;
}

type BlogPost={
    meta: Meta,
    content: ReactElement<any, string | JSXElementConstructor<any>>,
}

