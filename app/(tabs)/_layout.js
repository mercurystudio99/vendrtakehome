import { Tabs } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

import Header from '../../components/header';

import HomeSVG from '../../assets/icons/Home.svg';
import HomeDisableSVG from '../../assets/icons/Home_Inactive.svg';
import BuyingSVG from '../../assets/icons/Buying.svg';
import BuyingDisableSVG from '../../assets/icons/Buying_Inactive.svg';
import SellingSVG from '../../assets/icons/Sellings.svg';
import SellingDisableSVG from '../../assets/icons/Sellings_Inactive.svg';
import MessagesSVG from '../../assets/icons/Messages.svg';
import MessagesDisableSVG from '../../assets/icons/Messages_Inactive.svg';

export default function TabLayout() {
  return (
    <Tabs screenOptions={
      ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          let iconSize = 40;
          if (route.name === 'index') {
            icon = focused
              ? <HomeSVG width={iconSize} height={iconSize} />
              : <HomeDisableSVG width={iconSize} height={iconSize} />;
          } else if (route.name === 'buying') {
            icon = focused
              ? <BuyingSVG width={iconSize} height={iconSize} />
              : <BuyingDisableSVG width={iconSize} height={iconSize} />;
          } else if (route.name === 'messages') {
            icon = focused
              ? <MessagesSVG width={iconSize} height={iconSize} />
              : <MessagesDisableSVG width={iconSize} height={iconSize} />;
          } else {
            icon = focused
              ? <SellingSVG width={iconSize} height={iconSize} />
              : <SellingDisableSVG width={iconSize} height={iconSize} />;
          }
          return icon;
        },
        tabBarStyle: styles.container,
        tabBarItemStyle: styles.item,
        title: ({focused}) => {
          let label;
          let color = focused? '#3fc0ef' : '#b3b4b5';
          if (route.name === 'index') {
            label = 'Home';
          } else if (route.name === 'buying') {
            label = 'Buying';
          } else if (route.name === 'messages') {
            label = 'Messages';
          } else {
            label = 'Selling';
          }
          return <Text style={[styles.text, {color: color}]}>{label}</Text>;
        }
      })
    }>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="buying" />
      <Tabs.Screen name="(top-tabs)" options={{ header: () => <Header></Header> }} />
      <Tabs.Screen name="messages" />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal: 30,
    borderTopColor: '#3fc0ef',
    borderTopWidth: 3,
  },
  item: {
    paddingVertical: 10
  },
  text: {
    fontSize: 12
  },
});