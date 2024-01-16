import { useCallback } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () =>{
    const [fontsLoaded, fontError] = useFonts({
    
        "DMRegular":require('../assets/fonts/DMSans-Regular.ttf'),
        "DMBold":require('../assets/fonts/DMSans-Bold.ttf'),
        "DMMedium":require('../assets/fonts/DMSans-Medium.ttf')
        
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
    return <Stack onLayout={onLayoutRootView}/>
}
export default Layout;