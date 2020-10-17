import React from 'react';
import 'react-native-gesture-handler';

import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import { useFonts } from 'expo-font';

import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  })

  if (!fontsLoaded) return null;

  return (
    <Routes />
  );
}