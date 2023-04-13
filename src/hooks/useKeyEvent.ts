import { useState, useEffect } from "react";

const useKeyEventListener = () => {
  const [currentKey, setCurrentKey] = useState<string>("");

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
  };
};

export default useKeyEventListener;
