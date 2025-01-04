import { LineChart } from "react-native-chart-kit";
import { View, Text, Dimensions } from "react-native";
import { useGetTransactions } from "@/hooks/backend/useGetTransactions";

const { width } = Dimensions.get("window");

const Chart = () => {
  const { transactions, loading } = useGetTransactions();

  const dataGrafik = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: new Array(12).fill(0),
        strokeWidth: 3,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      },
      {
        data: new Array(12).fill(0),
        strokeWidth: 3,
        color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
      },
    ],
  };

  if (!loading && transactions && transactions.length > 0) {
    const pemasukanBulanan = new Array(12).fill(0);
    const pengeluaranBulanan = new Array(12).fill(0);

    transactions.forEach((transaction) => {
      if (transaction.transactionType === "pemasukan") {
        const dateParts = transaction.date.split("/");
        const formattedDate = new Date(
          `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`
        );

        const month = formattedDate.getMonth();
        if (month >= 0 && month <= 11) {
          pemasukanBulanan[month] += parseFloat(transaction.amount);
        }
      } else if (transaction.transactionType === "pengeluaran") {
        const dateParts = transaction.date.split("/");
        const formattedDate = new Date(
          `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`
        );

        const month = formattedDate.getMonth();
        if (month >= 0 && month <= 11) {
          pengeluaranBulanan[month] += parseFloat(transaction.amount);
        }
      }
    });

    dataGrafik.datasets[0].data = pemasukanBulanan;
    dataGrafik.datasets[1].data = pengeluaranBulanan;
  }

  return (
    <View className="mt-8">
      <Text
        className="text-white text-lg mb-4"
        style={{ fontFamily: "MyFont-ExtraBold" }}
      >
        Grafik Pemasukan dan Pengeluaran
      </Text>

      <LineChart
        data={dataGrafik}
        width={width - 32}
        height={220}
        chartConfig={{
          backgroundColor: "#1E2923",
          backgroundGradientFrom: "#08130D",
          backgroundGradientTo: "#1E2923",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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
  );
};

export default Chart;
