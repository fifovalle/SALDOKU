import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Header2 from "@/components/Header2";

export default function Add() {
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("pemasukan");

  const handleSaveTransaction = () => {
    // Logika untuk menyimpan transaksi (bisa dengan Firestore atau lainnya)
    console.log(`Transaksi ${transactionType}: Rp ${amount}`);
  };

  return (
    <View className="flex-1 bg-customBg text-white p-4 pt-16 pb-10">
      {/* Header */}
      <Header2
        name="Naufal FIFA"
        title="Tambah Transaksi"
        budget="Rp 1.000.000"
      />

      {/* Form Input */}
      <View className="mt-8">
        <Text className="text-lg text-white mb-4">Pilih Tipe Transaksi</Text>
        <View className="flex-row justify-between mb-6">
          <TouchableOpacity
            onPress={() => setTransactionType("pemasukan")}
            className={`${
              transactionType === "pemasukan" ? "bg-green-500" : "bg-gray-700"
            } py-2 px-4 rounded-md`}
          >
            <Text className="text-white">Pemasukan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTransactionType("pengeluaran")}
            className={`${
              transactionType === "pengeluaran" ? "bg-red-500" : "bg-gray-700"
            } py-2 px-4 rounded-md`}
          >
            <Text className="text-white">Pengeluaran</Text>
          </TouchableOpacity>
        </View>

        {/* Input Amount */}
        <Text className="text-lg text-white mb-4">Masukkan Jumlah</Text>
        <TextInput
          value={amount}
          onChangeText={setAmount}
          placeholder="Rp 0"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          keyboardType="numeric"
          className="bg-white text-black text-lg p-4 rounded-md"
        />

        {/* Save Button */}
        <TouchableOpacity
          onPress={handleSaveTransaction}
          className="bg-blue-500 py-3 mt-8 rounded-md"
        >
          <Text className="text-white text-center text-xl">
            Simpan Transaksi
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
