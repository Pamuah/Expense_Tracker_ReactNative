import React from "react";
import { createContext, useState, useContext } from "react";

const InputContext = createContext();

export const InputProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [Expense, setExpense] = useState("");
  const [Income, setIncome] = useState("");
  const [Gained, setGained] = useState("");

  return (
    <InputContext.Provider
      value={{
        input,
        setInput,
        Expense,
        setExpense,
        Income,
        setIncome,
        Gained,
        setGained,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};

export const useInput = () => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error("useInput must be used within an InputProvider");
  }
  return context; // This gives you { input, setInput }
};
