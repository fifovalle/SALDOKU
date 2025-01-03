import React from "react";
import { View } from "react-native"; // Komponen dasar React Native
import Header from "@/components/Header"; // Komponen untuk menampilkan judul dan deskripsi
import CardImage from "@/components/CardImage"; // Komponen untuk menampilkan gambar
import StartButton from "@/components/StartButton"; // Komponen tombol mulai

export default function Index() {
  const imageSource = require("@/assets/images/cardImage.png"); // Sumber gambar yang digunakan

  return (
    <View className="flex-1 items-center justify-center bg-customBg p-6">
      <Header
        title="Kelola Keuangan Anda Dengan Mudah"
        description="Aplikasi manajemen kartu abadi yang mudah dan efisien."
      />
      <CardImage img={imageSource} />
      <StartButton title="Mulai" />
    </View>
  );
}
