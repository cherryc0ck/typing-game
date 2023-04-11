import { useState, useEffect } from "react";

const useKeyEventListener = () => {
  const [currentKey, setCurrentKey] = useState<string>("");
  const [isEn, setIsEn] = useState<boolean>(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Shift") {
        e.location === 1
          ? setCurrentKey("LeftShift")
          : setCurrentKey("RightShift");
        return;
      }
      setCurrentKey(e.key);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return {
    currentKey,
    isEn,
  };
};

export default useKeyEventListener;
