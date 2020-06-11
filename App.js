import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealsNavigator from "./navigation/MealsNavigator";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./store/reducers/meals";
import { Provider } from "react-redux";

enableScreens();

//combine all created reducers using combineReducers
//add in the various states you want to monitor (e.g. meals) and assign appropriate reducer (e.g. mealsReducer)
const rootReducer = combineReducers({
  meals: mealsReducer,
});

//create a redux store
const store = createStore(rootReducer);

//loads fonts before render
const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  //sets state of const
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    //Provider lets mealsNavigator interact with Redux store and
    //any component in our application
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
