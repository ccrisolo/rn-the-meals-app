import React from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Platform } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from '../constants/Colors';


const CategoriesScreen = (props) => {
  const renderGridItems = (itemData) => {
    return (
      <TouchableOpacity
      style={styles.gridItem}
       onPress={() => {
        props.navigation.navigate({routeName: 'CategoryMeals'})
      }}>
      <View style={styles.gridItem}>
        <Text>{itemData.item.title}</Text>
      </View>
      </TouchableOpacity>
    );
  };

  return (
    //create a grid with FlatList
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItems}
      numColumns={2}
    />
  );
};


//configures header styling for navigation
CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
  },
  headerTintColor: Platform === 'android' ? 'white' : Colors.primaryColor,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
