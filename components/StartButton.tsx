import React, { FC } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

interface StartButtonProps {
  title: string;
}

const StartButton: FC<StartButtonProps> = ({ title }) => {
  const router = useRouter();
  const offsetX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offsetX.value }],
  }));

  const swipeGesture = Gesture.Pan()
    .onUpdate((event) => {
      offsetX.value = event.translationX;
    })
    .onEnd(() => {
      if (offsetX.value > 50) {
        offsetX.value = withTiming(150, { duration: 300 });
      }
    });

  return (
    <GestureDetector gesture={swipeGesture}>
      <View className="w-full flex-row bg-customBg2 justify-between items-center mt-8 rounded-full overflow-hidden">
        {/* Tombol dengan animasi */}
        <Animated.View style={animatedStyle}>
          <Text className="text-white bg-customBg p-6 px-20 rounded-full text-lg font-semibold shadow-md">
            {title}
          </Text>
        </Animated.View>

        {/* Ikon panah */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.replace("/(tabs)/home")}
          className="p-4 rounded-full"
        >
          <Ionicons name="arrow-forward" size={30} color="#08363B" />
        </TouchableOpacity>
      </View>
    </GestureDetector>
  );
};

export default StartButton;
