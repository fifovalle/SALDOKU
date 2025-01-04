import React, { FC } from "react";
import { View, Text } from "react-native";

interface InfoItemProps {
  label: string;
  value: string;
}

const InfoItem: FC<InfoItemProps> = ({ label, value }) => (
  <View className="flex-row justify-between items-center">
    <Text
      className="text-lg text-white"
      style={{ fontFamily: "MyFont-ExtraBold" }}
    >
      {label}
    </Text>
    <Text
      className="text-lg text-white/70"
      style={{ fontFamily: "MyFont-Bold" }}
    >
      {value}
    </Text>
  </View>
);

export default InfoItem;
