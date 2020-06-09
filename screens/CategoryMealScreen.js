import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };
  //matches param in CategoriesScreen.js
  const catId = props.navigation.getParam("categoryId");
  //will give us an array of displayed meals for the selected category
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  //dynamically renders a category title in header
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
