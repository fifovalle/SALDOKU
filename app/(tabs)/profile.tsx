import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Header2 from "@/components/Header2";

export default function Profil() {
  return (
    <View className="flex-1 bg-customBg text-white p-4 pt-16 pb-10">
      {/* Header */}
      <Header2 name="Naufal FIFA" title="Profil" budget="Rp 1.000.000" />

      {/* Profile Section */}
      <View className="items-center mt-8 space-y-4">
        {/* Profile Picture */}
        <Image
          source={{ uri: "https://example.com/profile-picture.jpg" }} // Ganti dengan URL foto profil Anda
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            borderWidth: 4,
            borderColor: "#ffffff",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 6,
          }}
        />

        {/* Name and Bio */}
        <View className="text-center">
          <Text className="text-3xl text-white font-semibold">Naufal FIFA</Text>
          <Text className="text-lg text-gray-300 mt-2">Pengguna aktif</Text>
          <Text className="text-lg text-gray-300 mt-2">
            Anggaran: Rp 1.000.000
          </Text>
        </View>
      </View>

      {/* Additional Information */}
      <View className="mt-12 space-y-6">
        {/* Location */}
        <View className="flex-row justify-between items-center">
          <Text className="text-lg text-white font-semibold">Lokasi</Text>
          <Text className="text-lg text-gray-300">Jakarta, Indonesia</Text>
        </View>

        {/* Email */}
        <View className="flex-row justify-between items-center">
          <Text className="text-lg text-white font-semibold">Email</Text>
          <Text className="text-lg text-gray-300">naufal@example.com</Text>
        </View>

        {/* Phone */}
        <View className="flex-row justify-between items-center">
          <Text className="text-lg text-white font-semibold">
            Nomor Telepon
          </Text>
          <Text className="text-lg text-gray-300">+62 812-3456-7890</Text>
        </View>
      </View>

      {/* Footer Information */}
      <View className="mt-8 text-center">
        <Text className="text-sm text-gray-300">
          Terakhir diperbarui: 1 Januari 2025
        </Text>
      </View>

      {/* Action Button */}
      <TouchableOpacity
        onPress={() => console.log("Logout")}
        className="bg-red-500 py-3 mt-8 rounded-md shadow-lg"
      >
        <Text className="text-white text-center text-xl">Keluar</Text>
      </TouchableOpacity>
    </View>
  );
}
