import { useState } from "react";

export const useDice = () => {
  const [dice, setDice] = useState(0);
  const [diceResult, setDiceResult] = useState(0);
  const [numberOfThrows, setNumberOfThrows] = useState(1);

  const diceThrow = () => {
    let accumuled = 0;
    // for (let i = 0; i < numberOfThrows -1; i++) {
    let rollsToDo = numberOfThrows;
    do {
      rollsToDo--;
      const roll = Math.floor(Math.random() * dice);
      const rollCorrected = roll +1;
      accumuled += rollCorrected;
      
      setDiceResult(accumuled);
    } while (rollsToDo > 0);
  };

  return {
    setDice,
    setNumberOfThrows,
    diceThrow,
    diceResult,
  };
};
