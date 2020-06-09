import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback} from "react-native";

const CategoryGridTile = (props) => {
    let TouchableComponent = TouchableOpacity;

    //TouchableNativeFeedback gives a ripple effect on android
    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback
    };
  return (
    <TouchableComponent
      style={styles.gridItem}
      onPress={props.onSelect}
    >
      <View style={{...styles.container, ...{backgroundColor: props.color}}}>
        <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
      </View>
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
      },
      container: {
          flex: 1,
          borderRadius: 10,
          shadowColor: 'black',
          shadowOpacity: 0.26,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 10,
          elevation: 3,
          padding: 15,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
      },
      title: {
          fontFamily: 'open-sans-bold',
          fontSize: 22,
          textAlign: 'right',
      }
});

export default CategoryGridTile;
