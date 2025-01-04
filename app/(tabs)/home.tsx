import React from "react";
import { View } from "react-native";
import Chart from "@/components/Chart";
import Header2 from "@/components/Header2";
import CardSaldo from "@/components/CardSaldo";
import { useGetTransactions } from "@/hooks/backend/useGetTransactions";

export default function Home() {
  const { formattedTotalSaldo } = useGetTransactions();

  return (
    <View className="flex-1 bg-customBg px-4 pt-16">
      <Header2
        name="Naufal FIFA"
        title="Laporan Keuangan"
        budget={formattedTotalSaldo}
      />
      <CardSaldo ammount={formattedTotalSaldo} />
      <Chart />
    </View>
  );
}
