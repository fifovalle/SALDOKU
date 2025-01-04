import React from "react";
import { View, Text } from "react-native";

interface CardSaldoProps {
  ammount: string;
}

const CardSaldo = ({ ammount }: CardSaldoProps) => (
  <View className="bg-customBg3 rounded-xl mt-10 p-4 shadow-lg">
    {/* Header Card */}
    <View className="flex-row justify-between items-center">
      <Text
        className="text-white text-lg"
        style={{ fontFamily: "MyFont-Bold" }}
      >
        Saldo Anda
      </Text>
      <Text
        className="text-gray-300 text-xs"
        style={{ fontFamily: "MyFont-Bold" }}
      >
        Kartu Abadi
      </Text>
    </View>

    {/* Card Number */}
    <View className="mt-6">
      <Text
        className="text-white text-xl tracking-widest"
        style={{ fontFamily: "MyFont-Medium" }}
      >
        {ammount}
      </Text>
    </View>

    {/* Footer Card */}
    <View className="flex-row justify-between items-center mt-8">
      <View>
        <Text
          className="text-gray-300 text-xs"
          style={{ fontFamily: "MyFont-Bold" }}
        >
          NAMA PEMILIK
        </Text>
        <Text
          className="text-white text-sm"
          style={{ fontFamily: "MyFont-ExtraBold" }}
        >
          Naufal FIFA
        </Text>
      </View>
      <View>
        <Text
          className="text-gray-300 text-xs"
          style={{ fontFamily: "MyFont-Bold" }}
        >
          TANGGAL KADALUARSA
        </Text>
        <Text
          className="text-white text-sm"
          style={{ fontFamily: "MyFont-ExtraBold" }}
        >
          12/28
        </Text>
      </View>
    </View>
  </View>
);

export default CardSaldo;
