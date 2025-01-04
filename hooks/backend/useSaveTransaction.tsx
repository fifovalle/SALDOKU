import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Transaction {
  amount: string;
  transactionType: "pemasukan" | "pengeluaran";
  selectedCategory: string;
  date: string;
}

export const useSaveTransaction = () => {
  const [loading, setLoading] = useState(false);

  const saveTransaction = async (
    amount: string,
    transactionType: "pemasukan" | "pengeluaran",
    selectedCategory: string
  ) => {
    const date = new Date();
    const formattedDate = `${String(date.getDate()).padStart(2, "0")}/${String(
      date.getMonth() + 1
    ).padStart(2, "0")}/${date.getFullYear()}`;

    const transaction: Transaction = {
      amount,
      transactionType,
      selectedCategory,
      date: formattedDate,
    };

    setLoading(true);
    try {
      const existingTransactions = await AsyncStorage.getItem("transactions");
      const transactions = existingTransactions
        ? JSON.parse(existingTransactions)
        : [];
      transactions.push(transaction);
      await AsyncStorage.setItem("transactions", JSON.stringify(transactions));
    } catch (error) {
      console.error("Error saving transaction:", error);
    } finally {
      setLoading(false);
    }
  };

  return { saveTransaction, loading };
};
