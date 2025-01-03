import "@/global.css";
import React from "react";
import "react-native-reanimated";
import { Stack } from "expo-router";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { View, ActivityIndicator } from "react-native";
import { useLoadFonts } from "@/hooks/frontend/useLoadFonts";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-customBg">
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="#08363B" />
      {/* Menonaktifkan header di seluruh halaman */}
      <Stack screenOptions={{ headerShown: false }} />
    </GestureHandlerRootView>
  );
}
