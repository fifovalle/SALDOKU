import { useState, useEffect } from "react";
import { rupiahFormat } from "@/constants/rupiahFormat";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Transaction {
  amount: string;
  transactionType: "pemasukan" | "pengeluaran";
  selectedCategory: string;
  date: string;
}

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchTransactions = async () => {
    try {
      const storedTransactions = await AsyncStorage.getItem("transactions");
      if (storedTransactions) {
        setTransactions(JSON.parse(storedTransactions));
      } else {
        setTransactions([]);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateTransactions = async (newTransaction: Transaction) => {
    try {
      const updatedTransactions = [...transactions, newTransaction];
      await AsyncStorage.setItem(
        "transactions",
        JSON.stringify(updatedTransactions)
      );
      setTransactions(updatedTransactions);
    } catch (error) {
      console.error("Error saving transaction:", error);
    }
  };

  useEffect(() => {
    fetchTransactions();

    const intervalId = setInterval(() => {
      fetchTransactions();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [transactions]);

  const sumTotalSaldo = transactions.reduce((total, transaction) => {
    const amount = parseFloat(transaction.amount);

    if (transaction.transactionType === "pemasukan") {
      return total + amount;
    } else if (transaction.transactionType === "pengeluaran") {
      return total - amount;
    }
    return total;
  }, 0);

  const formattedTotalSaldo = rupiahFormat(sumTotalSaldo);

  return {
    transactions,
    loading,
    sumTotalSaldo,
    formattedTotalSaldo,
    updateTransactions,
  };
};
