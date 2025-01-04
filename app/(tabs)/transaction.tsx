import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  FlatList,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { rupiahFormat } from "@/constants/rupiahFormat";
import { useGetTransactions } from "@/hooks/backend/useGetTransactions";

export default function Transaction() {
  const [pencarian, setPencarian] = useState("");
  const { transactions, loading } = useGetTransactions();

  const dataTerseleksi = transactions
    .filter((item) =>
      item.selectedCategory.toLowerCase().includes(pencarian.toLowerCase())
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (loading) {
    return (
      <View className="flex-1 bg-customBg p-4">
        <Text
          className="text-white text-lg mb-6 text-center"
          style={{ fontFamily: "MyFont-ExtraBold" }}
        >
          Daftar Transaksi
        </Text>
        <ActivityIndicator size="large" color="#FFA500" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-customBg p-4 pb-20">
      {/* Header */}
      <Text
        className="text-white text-lg mb-6 text-center"
        style={{ fontFamily: "MyFont-ExtraBold" }}
      >
        Daftar Transaksi
      </Text>

      {/* Input Pencarian */}
      <View className="flex-row items-center bg-customBg3 p-3 rounded-lg mb-4 shadow-lg">
        <Ionicons name="search" size={20} color="#888" />
        <TextInput
          placeholder="Cari kategori transaksi..."
          placeholderTextColor="#888"
          className="text-white ml-3 flex-1"
          style={{ fontFamily: "MyFont-Regular" }}
          value={pencarian}
          onChangeText={(text) => setPencarian(text)}
        />
      </View>

      {/* Daftar Transaksi */}
      <FlatList
        data={dataTerseleksi}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View className="bg-customBg3 rounded-lg p-4 mb-4 shadow-md">
            <View className="flex-row justify-between items-center">
              <Text
                className="text-white text-lg"
                style={{ fontFamily: "MyFont-Bold" }}
              >
                {item.selectedCategory}
              </Text>
              <Ionicons
                name="wallet"
                size={24}
                color={`${
                  item.transactionType === "pemasukan" ? "#00ffcc" : "#ff0000"
                }`}
              />
            </View>
            <Text
              className="text-gray-300 text-sm mt-1"
              style={{ fontFamily: "MyFont-Regular" }}
            >
              {item.date}
            </Text>
            <Text
              className="text-white text-sm mt-2"
              style={{ fontFamily: "MyFont-Medium" }}
            >
              {item.transactionType === "pemasukan"
                ? `+ ${rupiahFormat(Number(item.amount))}`
                : `- ${rupiahFormat(Number(item.amount))}`}
            </Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text
            className="text-gray-300 text-center mt-4"
            style={{ fontFamily: "MyFont-Regular" }}
          >
            Tidak ada transaksi ditemukan.
          </Text>
        )}
      />
    </View>
  );
}
