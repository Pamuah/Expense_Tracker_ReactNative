import React, { createContext } from "react";
import { useInput } from "../Context/InputContext";
import { useState } from "react";

export const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  const { input, Expense, Gained, Income } = useInput();
  const [transactions, setTransactions] = useState([
    {
      id: "1",
      description: "Sample Transaction 1",
      amount: "100",
      type: "expense",
    },
  ]);

  const addTransaction = () => {
    const newTransaction = {
      id: Date.now().toString(), // Unique identifier
      description: input || "", // Use input as description
      amount: Expense,
      type: radio_props[value].value === 0 ? "expense" : "income",
    };

    // Update the transactions list
    setTransactions((prevTransactions) => [
      newTransaction,
      ...prevTransactions,
    ]);
    // console.log(transactions);
  };
  {
    /*let array1 = [];
  let array2 = [];

  let Expenditure = transactions
    .filter((item) => item.type === "expense")
    .map((item) => item.amount)
    .forEach((item) => {
      array1.push(item);
      console.log(item);
    });

  let IncomeFlow = transactions
    .filter((item) => item.type === "income")
    .map((item) => item.amount)
    .forEach((item) => {
      array2.push(parseFloat(item));
    });
  console.log(array1, array2);
  function sum(acc, x) {
    return acc + x;
  }

  const totalIncome = array2.reduce(sum, 0);
  console.log(totalIncome);
*/
  }

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
