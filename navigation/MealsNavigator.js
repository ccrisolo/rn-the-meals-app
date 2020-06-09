import React, { createElement } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform, Modal } from "react-native";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator( //goes to the first arg screen which is the Categories Screen
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? Colors.primaryColor : "white",
        },
        headerTintColor: Platform === "android" ? "white" : Colors.primaryColor,
      },
    },
    //nesting below allows to specify property of screen allowing for configuring default properties
    CategoryMeals: {
      screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
      //defaultNavigationOptions will affect navigationOptions here and in another component that uses MealsNavigator
      //adding mode: 'modal' makes the screen slide up from the bottom
      mode: 'modal',
    defaultNavigationOptions: {
      navigationOptions: {
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? Colors.primaryColor : "white",
        },
        headerTintColor: Platform === "android" ? "white" : Colors.primaryColor,
      },
    },
  }
);

export default createAppContainer(MealsNavigator);
