import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import dimension from "../../../constants/dimension";
import color from "../../../constants/color";
  
const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext(Navigator);

const windowWidth = dimension.windowWidth;

export default function TabLayout() {
  return (
      <MaterialTopTabs screenOptions={
        ({ route }) => ({
          tabBarStyle: styles.container,
          tabBarIndicatorStyle: styles.indicator,
          title: ({focused}) => {
            let label;
            if (route.name === 'index') {
              label = 'Active';
            } else if (route.name === 'tasks') {
              label = 'Tasks';
            } else {
              label = 'Previous';
            }
            return <View style={styles.label}>
              <Text style={styles.number}>9</Text>
              <Text style={styles.text}>{label}</Text>
            </View>;
          }
        })  
      }>
        <MaterialTopTabs.Screen name="index" />
        <MaterialTopTabs.Screen name="tasks" />
        <MaterialTopTabs.Screen name="previous" />
      </MaterialTopTabs>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    shadowColor: 'transparent'
  },
  indicator: {
    bottom: 5,
    width: windowWidth / 3 - 90,
    height: 3,
    borderRadius: 100,
    marginLeft: 45,
    backgroundColor: color.primaryColor,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 4,
    shadowRadius: 3,
    shadowOffset : { width: -2, height: 4},
  },
  label: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: color.primaryColor,
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 8
  },
  text: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1
  },
});