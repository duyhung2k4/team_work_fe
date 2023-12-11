import { useEffect, useState } from "react";

export type SizeScreen = "xs" | "sm" | "md" | "lg" | "xl" | "el"

export interface AppScreen {
  width: number,
  height: number,
  size: SizeScreen
}
export const useScreen = (): AppScreen => {
  const [screen, setScreen] = useState<AppScreen>({ 
    width: window.innerWidth, 
    height: window.innerHeight,
    size: getSize(window.innerWidth)
  });

  const handleResize = () => {
    const newScreen: AppScreen = {
      width: window.innerWidth, 
      height: window.innerHeight,
      size: getSize(window.innerWidth)
    }

    setScreen(newScreen);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);
  
  return screen
}

const getSize = (size: number): SizeScreen => {
  if(size > 1800) {
    return "el";
  }

  if(size <= 1800 && size > 1400) {
    return "xl";
  }

  if(size <= 1400 && size > 1200) {
    return "lg";
  }

  if(size <= 1200 && size > 900) {
    return "md";
  }

  if(size <= 900 && size > 600) {
    return "sm"
  }

  return "xs";
}