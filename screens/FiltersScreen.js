import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const FiltersScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>This is the Filter Screen</Text>
        </View>
    );
};

FiltersScreen.navigationOptions = {
    headerTitle: 'Filter Meals'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FiltersScreen;