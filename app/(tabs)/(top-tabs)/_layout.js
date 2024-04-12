import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
  
const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext(Navigator);

export default function TabLayout() {
  return (
      <MaterialTopTabs screenOptions={
        ({ route }) => ({
          tabBarStyle: styles.container,
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
  label: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: '#3fc0ef',
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