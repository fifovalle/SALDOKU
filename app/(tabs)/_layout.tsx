import { Tabs } from "expo-router";
import OptionsIconTabs from "@/constants/optionsIconTabs";

export default function TataLetakTabs() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#020E0F",
          borderTopWidth: 0,
          height: 50,
          borderRadius: 50,
          position: "absolute",
          bottom: 10,
          width: "95%",
          marginHorizontal: "2.5%",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) =>
            OptionsIconTabs({ focused, icon: "home" }),
          tabBarLabel: "Beranda",
          tabBarLabelStyle: { color: "#fff" },
        }}
      />

      <Tabs.Screen
        name="add"
        options={{
          tabBarIcon: ({ focused }) =>
            OptionsIconTabs({ focused, icon: "add" }),
          tabBarLabel: "Tambah Baru",
          tabBarLabelStyle: { color: "#fff" },
        }}
      />

      <Tabs.Screen
        name="transaction"
        options={{
          tabBarIcon: ({ focused }) =>
            OptionsIconTabs({ focused, icon: "receipt" }),
          tabBarLabel: "Transaksi",
          tabBarLabelStyle: { color: "#fff" },
        }}
      />
    </Tabs>
  );
}
