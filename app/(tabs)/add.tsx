import React, { useState } from "react";
import Header2 from "@/components/Header2";
import { categories } from "@/constants/categories";
import { Picker } from "@react-native-picker/picker";
import TransactionTypeButton from "@/components/TransactionTypeButton";
import { useSaveTransaction } from "@/hooks/backend/useSaveTransaction";
import { useGetTransactions } from "@/hooks/backend/useGetTransactions";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

export default function Add() {
  const [amount, setAmount] = useState<string>("");
  const [transactionType, setTransactionType] = useState<
    "pemasukan" | "pengeluaran"
  >("pemasukan");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const { formattedTotalSaldo } = useGetTransactions();
  const { saveTransaction, loading } = useSaveTransaction();

  const handleSave = async () => {
    if (amount && selectedCategory) {
      await saveTransaction(amount, transactionType, selectedCategory);
    } else {
      console.error("Please fill in all fields");
    }
  };

  return (
    <View className="flex-1 bg-customBg p-4 pt-16 pb-10">
      <Header2
        name="Naufal FIFA"
        title="Tambah Transaksi"
        budget={formattedTotalSaldo}
      />

      <View className="mt-8 flex-1 justify-center items-center">
        <Text
          className="text-lg text-white mb-4"
          style={{ fontFamily: "MyFont-ExtraBold" }}
        >
          Pilih Tipe Transaksi
        </Text>
        <View className="flex-row justify-between mb-6 w-full">
          <TransactionTypeButton
            type="pemasukan"
            activeType={transactionType}
            onPress={() => setTransactionType("pemasukan")}
          />
          <TransactionTypeButton
            type="pengeluaran"
            activeType={transactionType}
            onPress={() => setTransactionType("pengeluaran")}
          />
        </View>

        {/* Category Picker */}
        <View className="bg-gray-100 rounded-lg shadow-lg w-full">
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            style={{ fontFamily: "MyFont-Regular" }}
          >
            <Picker.Item label="Pilih kategori" value="" />
            {categories[transactionType].map((category, index) => (
              <Picker.Item key={index} label={category} value={category} />
            ))}
          </Picker>
        </View>

        {/* Amount Input */}
        <TextInput
          value={amount}
          onChangeText={setAmount}
          placeholder="Masukkan jumlah uang"
          keyboardType="numeric"
          className="bg-gray-100 text-black text-lg p-4 rounded-lg shadow-lg w-full mt-6"
          style={{ fontFamily: "MyFont-Bold" }}
        />

        {/* Save Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleSave}
          disabled={loading}
          className={`bg-blue-500 py-3 px-6 mt-8 rounded-lg shadow-lg w-full ${
            loading && "opacity-50"
          }`}
        >
          <Text
            className="text-white text-center text-lg"
            style={{ fontFamily: "MyFont-Bold" }}
          >
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              "Simpan Transaksi"
            )}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
