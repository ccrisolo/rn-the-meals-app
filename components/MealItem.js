import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View styel={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}></View>
          <Text>{props.duration}min</Text>
          <Text>{props.complexity}</Text>
          <Text>{props.affordability}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 10,
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end", //brings title to bottom
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: 'center',
  },
});

export default MealItem;
