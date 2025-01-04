import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";

interface Props {
  type: "pemasukan" | "pengeluaran";
  activeType: "pemasukan" | "pengeluaran";
  onPress: () => void;
}

const TransactionTypeButton: React.FC<Props> = ({
  type,
  activeType,
  onPress,
}) => {
  const isActive = type === activeType;
  const backgroundColor = isActive
    ? type === "pemasukan"
      ? "bg-green-500"
      : "bg-red-500"
    : "bg-gray-700";

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-1 flex-row items-center justify-center py-3 mx-1 rounded-lg ${backgroundColor} shadow-lg`}
    >
      <Ionicons
        name={type === "pemasukan" ? "arrow-down-circle" : "arrow-up-circle"}
        size={24}
        color="white"
        className="mr-2"
      />
      <Text
        className="text-white text-base"
        style={{ fontFamily: "MyFont-Bold" }}
      >
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </Text>
    </TouchableOpacity>
  );
};

export default TransactionTypeButton;
