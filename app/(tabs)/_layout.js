import { Tabs } from 'expo-router';
import { StyleSheet, Text, Platform } from 'react-native';

import Header from '../../components/header';
import Icon from '../../constants/icon';

const HomeSVG = Icon.HomeSVG;
const HomeDisableSVG = Icon.HomeDisableSVG;
const BuyingSVG = Icon.BuyingSVG;
const BuyingDisableSVG = Icon.BuyingDisableSVG;
const SellingSVG = Icon.SellingSVG;
const SellingDisableSVG = Icon.SellingDisableSVG;
const MessagesSVG = Icon.MessagesSVG;
const MessagesDisableSVG = Icon.MessagesDisableSVG;

const os = Platform.OS;

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
      <Tabs.Screen name="index" options={{ header: () => <Header isSubHeader={false}></Header> }} />
      <Tabs.Screen name="buying" options={{ header: () => <Header isSubHeader={false}></Header> }} />
      <Tabs.Screen name="(top-tabs)" options={{ header: () => <Header isSubHeader={true}></Header> }} />
      <Tabs.Screen name="messages" options={{ header: () => <Header isSubHeader={false}></Header> }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    height: os == 'ios'? 100 : 80,
    paddingHorizontal: 30,
    borderTopColor: '#3fc0ef',
    borderTopWidth: 3,
    backgroundColor: 'white'
  },
  item: {
    paddingVertical: os == 'ios'? 5 : 10
  },
  text: {
    fontSize: 12
  },
});