import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { LogBox, useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

SplashScreen.preventAutoHideAsync();

// Oculta el toast de LogBox (la barrita de warnings/errores en desarrollo).
// No tiene efecto en builds de produccion, donde LogBox no se incluye.
LogBox.ignoreAllLogs();

export const unstable_settings = {
  initialRouteName: 'dashboard',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="dashboard" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="technician-detail" />
      </Stack>
    </ThemeProvider>
  );
}
