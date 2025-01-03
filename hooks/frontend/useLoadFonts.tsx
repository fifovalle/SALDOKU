import { useFonts } from "expo-font";

export const useLoadFonts = () => {
  const [fontsLoaded] = useFonts({
    "MyFont-Bold": require("@/assets/fonts/Nunito-Bold.ttf"),
    "MyFont-Black": require("@/assets/fonts/Nunito-Black.ttf"),
    "MyFont-Light": require("@/assets/fonts/Nunito-Light.ttf"),
    "MyFont-Medium": require("@/assets/fonts/Nunito-Medium.ttf"),
    "MyFont-Regular": require("@/assets/fonts/Nunito-Regular.ttf"),
    "MyFont-SemiBold": require("@/assets/fonts/Nunito-SemiBold.ttf"),
    "MyFont-ExtraBold": require("@/assets/fonts/Nunito-ExtraBold.ttf"),
    "MyFont-ExtraLight": require("@/assets/fonts/Nunito-ExtraLight.ttf"),
  });

  return fontsLoaded;
};
