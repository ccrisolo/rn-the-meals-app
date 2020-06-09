import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealsNavigator from './navigation/MealsNavigator';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { enableScreens } from 'react-native-screens';

//loads fonts before render
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

enableScreens();

export default function App() {
  //sets state of const
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return(
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      />
    );
  };

  return (
    <MealsNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
