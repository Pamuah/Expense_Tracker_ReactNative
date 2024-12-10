import React, { createContext } from "react";
import { useInput } from "../Context/InputContext";
import { useState } from "react";

export const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const { input, Expense, Gained, Income } = useInput();
  const [transactions, setTransactions] = useState([
    { id: "1", description: "Sample Transaction 1", amount: "100" },
    { id: "2", description: "Sample Transaction 2", amount: "200" },
  ]);

  const addTransaction = () => {
    const newTransaction = {
      id: Date.now().toString(), // Unique identifier
      description: input || "", // Use input as description
      amount: Expense,
    };

    // Update the transactions list
    setTransactions((prevTransactions) => [
      newTransaction,
      ...prevTransactions,
    ]);
  };

  return (
    <HistoryContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </HistoryContext.Provider>
  );
};
