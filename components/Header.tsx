import React, { FC } from "react";
import { Text, View } from "react-native";

interface HeaderProps {
  title: string;
  description: string;
}

const Header: FC<HeaderProps> = ({ title, description }) => (
  <View className="text-center">
    <Text
      className="text-white text-3xl text-center"
      style={{ fontFamily: "MyFont-ExtraBold" }}
    >
      {title}
    </Text>
    <Text
      className="text-white/70 text-base mt-2 text-center"
      style={{ fontFamily: "MyFont-ExtraBold" }}
    >
      {description}
    </Text>
  </View>
);

export default Header;
