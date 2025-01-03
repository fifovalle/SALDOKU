import React from "react";
import { useRouter } from "expo-router";
import Header from "@/components/Header"; // Komponen Header untuk judul dan deskripsi
import { Ionicons } from "@expo/vector-icons"; // Ikon Google
import CardImage from "@/components/CardImage"; // Komponen untuk menampilkan gambar
import { View, Text, TouchableOpacity } from "react-native"; // Komponen dasar React Native

export default function Login() {
  const router = useRouter();
  const imageSource = require("@/assets/images/loginImage.png"); // Sumber gambar login

  return (
    <View className="flex-1 items-center justify-center bg-customBg p-6">
      <Header
        title="Login"
        description="Silahkan login untuk mengakses fitur manajemen kartu abadi."
      />
      <CardImage img={imageSource} />

      {/* Tombol login dengan Google */}
      <TouchableOpacity
        onPress={() => router.push("/(tabs)/home")}
        activeOpacity={0.8}
        className="w-full flex-row justify-center items-center mt-8 bg-customBg2 rounded-full"
      >
        <Ionicons name="logo-google" size={24} color="black" />
        <Text
          className="text-customBg p-4 rounded-full text-lg"
          style={{ fontFamily: "MyFont-ExtraBold" }}
        >
          Login dengan Google
        </Text>
      </TouchableOpacity>
    </View>
  );
}
