import { useEffect } from "react";

/** Calls onEscape when Escape is pressed, only while isActive is true. */
export const useEscapeKey = (isActive: boolean, onEscape: () => void) => {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onEscape();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isActive, onEscape]);
};
