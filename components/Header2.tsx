import React, { FC } from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Header2Props {
  name: string;
  title: string;
  budget: string;
}

const Header2: FC<Header2Props> = ({ name, title, budget }) => (
  <View className="flex-row justify-between items-center px-1">
    <View>
      <Text
        className="text-xl text-gray-200"
        style={{ fontFamily: "MyFont-ExtraBold" }}
      >
        Halo, {name}!
      </Text>

      <Text
        className="text-2xl text-white"
        style={{ fontFamily: "MyFont-Bold" }}
      >
        {title}
      </Text>
    </View>

    <View className="flex-row items-center">
      <Ionicons name="wallet" size={20} color="white" />
      <Text
        className="text-white ml-2 text-sm"
        style={{ fontFamily: "MyFont-Black" }}
      >
        {budget}
      </Text>
    </View>
  </View>
);

export default Header2;
