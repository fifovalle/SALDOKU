import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface OpsiIkonTabsProps {
  focused: boolean;
  icon: any;
  size?: number;
}

const OptionsIconTabs: React.FC<OpsiIkonTabsProps> = ({
  focused,
  icon,
  size = 24,
}) => {
  return (
    <Ionicons
      name={focused ? icon : `${icon}-outline`}
      color={focused ? "#fff" : "#D1EFEE"}
      size={size}
    />
  );
};

export default OptionsIconTabs;
