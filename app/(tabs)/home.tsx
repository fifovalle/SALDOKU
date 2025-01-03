import React from "react";
import Header2 from "@/components/Header2";
import { LineChart } from "react-native-chart-kit";
import { View, Text, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function Home() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        data: [200000, 300000, 150000, 500000, 400000],
        strokeWidth: 3,
      },
    ],
  };

  return (
    <View className="flex-1 bg-customBg p-4 pt-16">
      <Header2
        name="Naufal FIFA"
        title="Laporan Keuangan"
        budget="Rp 1.000.000"
      />

      <View className="bg-customBg3 rounded-xl mt-4 p-4 flex-row justify-between items-center shadow-lg">
        <View>
          <Text
            className="text-white text-sm"
            style={{ fontFamily: "MyFont-Bold" }}
          >
            Pemasukan
          </Text>
          <Text
            className="text-white text-2xl"
            style={{ fontFamily: "MyFont-ExtraBold" }}
          >
            Rp 1.000.000
          </Text>
        </View>
      </View>

      <View className="mt-8">
        <Text
          className="text-white text-lg mb-4"
          style={{ fontFamily: "MyFont-ExtraBold" }}
        >
          Grafik Pemasukan
        </Text>

        <LineChart
          data={data}
          width={width - 32}
          height={220}
          chartConfig={{
            backgroundColor: "#1E2923",
            backgroundGradientFrom: "#08130D",
            backgroundGradientTo: "#1E2923",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#FFA726",
            },
            formatYLabel: (value) =>
              value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ""),
          }}
          bezier
        />
      </View>
    </View>
  );
}
