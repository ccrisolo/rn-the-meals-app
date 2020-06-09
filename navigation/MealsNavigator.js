import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform, Modal } from "react-native";
import Colors from "../constants/Colors";
import FavoriteScreen from "../screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";

const MealsNavigator = createStackNavigator(
  //goes to the first arg screen which is the Categories
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
    mode: "modal",
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

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    //pass info on the different screens you want the tabs to load
    //set up tab identifier e.g. Meals and set to MealsNavigator so you can navigate btwn screens
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavoriteScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  }
);

//remove MealsNavigator as argument and pass MealsFavTabNavigator since it contains MealsNavigator
export default createAppContainer(MealsFavTabNavigator);
