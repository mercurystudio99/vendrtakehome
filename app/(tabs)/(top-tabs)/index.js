import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';

import color from "../../../constants/color";

const data = [
  { id: 1, title: "PlayStation Remote Player", subtitle: "or best offer", money: 140, chat: 6, request: 18 },
  { id: 2, title: "PlayStation Remote Player", subtitle: "or best offer", money: 140, chat: 6, request: 18 },
  { id: 3, title: "PlayStation Remote Player", subtitle: "or best offer", money: 140, chat: 6, request: 18 },
];

const primaryColor = color.primaryColor;

export default function ActiveScreen() {
  const Item = ({ title, subtitle, money, chat, request, index }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.mainImageView}>
        <Image source={require('../../../assets/PSP.png')} resizeMode="cover" style={styles.mainImage} />
      </View>
      <View style={{justifyContent: 'space-between', alignItems: 'flex-start', marginHorizontal: 15}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{title}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', marginRight: 5}}>${money}</Text>
          <Text style={{fontSize: 16}}>{subtitle}</Text>
        </View>
        <View style={{height: 10}}></View>
        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'center', justifyContent: 'center', marginRight: 40}}>
            <Text style={{color: primaryColor, fontSize: 20, fontWeight: '500'}}>{chat}</Text>
            <Text>Open Chats</Text>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center', marginRight: 40}}>
            <Text style={{color: primaryColor, fontSize: 20, fontWeight: '500'}}>{request}</Text>
            <Text>Message Requests</Text>
          </View>
        </View>
        <View style={{height: 10}}></View>
      </View>
      <View style={[styles.border, styles.tail]}>
        <Entypo name="dots-three-horizontal" size={22} color={primaryColor} />
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item, index }) => (
    <Item title={item.title} subtitle={item.subtitle} money={item.money} chat={item.chat} request={item.request} index={index} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Active Listings</Text>
        <View style={[styles.border, {paddingHorizontal: 20, paddingVertical: 3}]}>
          <Text style={{color: primaryColor, fontWeight: 'bold'}}>Filter</Text>
        </View>
      </View>
      {data && (
        <FlatList
          keyboardShouldPersistTaps="always"
          data={data}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 2
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600'
  },
  border: {
    borderWidth: 2,
    borderRadius: 100,
    borderColor: primaryColor
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 5,
    marginBottom: 20,
    borderRadius: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#b3b4b5',
  },
  mainImageView: {
    width: 85,
    height: 100,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4
  },
  mainImage: {
    width: '100%',
    height: '100%'
  },
  tail: {
    position: 'absolute',
    top: 0,
    right: 10,
  },
});