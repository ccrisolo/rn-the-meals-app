import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CategoryMealScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is the Category Meal Screen</Text>
      <Button
        title="Go to Meal Details"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      />
      <Button 
        title='Go Back'
        onPress={() => {
            props.navigation.goBack();
        }}
         />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
