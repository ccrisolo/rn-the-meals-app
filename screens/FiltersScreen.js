import React, { useState }from "react";
import { Text, View, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from '../constants/Colors';

const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);

  return (
    <View style={styles.screen}>
      <Text>Available Filters / Restrictions</Text>
      <View style={styles.filterContainer}>
        <Text>Gluten-free</Text>
        <Switch 
          //trackColor adds custom color to switch background track
          trackColor={{true: Colors.primaryColor}}
          //thumbColor add custom color to switch button
          thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
          value={isGlutenFree}
          onValueChange={newValue => setIsGlutenFree(newValue)}/>
      </View>
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
});

export default FiltersScreen;
