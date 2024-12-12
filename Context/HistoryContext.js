import React, { createContext } from "react";
import { useInput } from "../Context/InputContext";
import { useState } from "react";

export const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  const { input, Expense, Gained, Income } = useInput();
  const [transactions, setTransactions] = useState([
    { id: "1", description: "Sample Transaction 1", amount: "100" },
  ]);

  const addTransaction = () => {
    const newTransaction = {
      id: Date.now().toString(), // Unique identifier
      description: input || "", // Use input as description
      amount: Expense,
      date: new Date().toLocaleDateString(),
    };

    // Update the transactions list
    setTransactions((prevTransactions) => [
      newTransaction,
      ...prevTransactions,
    ]);
  };

  var radio_props = [
    { label: "Expense", value: 0 },
    { label: "Income", value: 1 },
  ];

  return (
    <HistoryContext.Provider
      value={{ transactions, addTransaction, value, setValue, radio_props }}
    >
      {children}
    </HistoryContext.Provider>
  );
};
