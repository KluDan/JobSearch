import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMSansRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    DMSansMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMSansBold: require("../assets/fonts/DMSans-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
