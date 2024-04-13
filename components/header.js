import React, { useState } from 'react';
import { Modal, StyleSheet, Switch, Text, Image, TextInput, View, ScrollView, Pressable, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

import Logo from '../assets/icons/VendrLogo.svg';
import Close from '../assets/icons/X.svg';
import Pencil from '../assets/icons/EditIcons.svg';

const primaryColor = '#3fc0ef';
const disableColor = '#b3b4b5';
const windowWidth = Dimensions.get('window').width;

export default function Header({isSubHeader}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, onChangeTitle] = useState('');
  const [desc, onChangeDesc] = useState('');
  const [price, onChangePrice] = useState('');
  const [isEnabled, setIsEnabled] = useState(true);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [index, setIndex] = useState(2);
  const [selectedImages, setSelectedImage] = useState([null, null, null, null, null, null]);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const pickImageAsync = async (index) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      let images = [...selectedImages];
      images[index] = result.assets[0].uri;
      setSelectedImage(images);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
			<LinearGradient
				colors={['#2BBDF2', '#81DAF9']}	
				style={styles.background}
			>
				<Logo width={windowWidth} height={100} />
			</LinearGradient>
      {
        isSubHeader &&
        <View style={{paddingTop: 15}}>
          <Pressable onPress={() => {
            setModalVisible(true);
          }}>
              <LinearGradient
                  colors={['#35C1F3', '#7CD9F8']}
                  style={styles.button}>
                  <Text style={styles.text}>List an item</Text>
              </LinearGradient>
          </Pressable>
        </View>
      }
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.headerView, styles.shadow]}>
            <Pressable onPress={() => {
              setModalVisible(false);
            }}>
              <Close width={25} height={25} />
            </Pressable>
            <Text style={styles.title}>List an Item</Text>
            <View style={{width: 1}}></View>
          </View>
          <ScrollView>
            {/** Photos Section */}
            <View style={[styles.card, {marginTop: 90}]}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>Photos</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8}}>
                {
                  selectedImages[0] == null &&
                  <View style={styles.photoView}>
                    <Pressable onPress={() => pickImageAsync(0)}>
                      <View style={styles.photoPlus}>
                        <AntDesign name="plus" size={20} color="white" />
                      </View>
                    </Pressable>
                  </View>
                }
                {
                  selectedImages[0] != null &&
                  <View style={[styles.photoView, {borderWidth: 0}]}>
                    <Image source={{uri: selectedImages[0]}} style={{width: (windowWidth - 88) / 3, height: 140, borderRadius: 15}} />
                    <Pressable onPress={() => pickImageAsync(0)}>
                      <View style={[styles.photoPlus, {top: -20}]}>
                        <AntDesign name="plus" size={20} color="white" />
                      </View>
                    </Pressable>
                  </View>
                }

                {
                  selectedImages[1] == null &&
                  <View style={styles.photoView}>
                    <Pressable onPress={() => pickImageAsync(1)}>
                      <View style={styles.photoPlus}>
                        <AntDesign name="plus" size={20} color="white" />
                      </View>
                    </Pressable>
                  </View>
                }
                {
                  selectedImages[1] != null &&
                  <View style={[styles.photoView, {borderWidth: 0}]}>
                    <Image source={{uri: selectedImages[1]}} style={{width: (windowWidth - 88) / 3, height: 140, borderRadius: 15}} />
                    <Pressable onPress={() => pickImageAsync(1)}>
                      <View style={[styles.photoPlus, {top: -20}]}>
                        <AntDesign name="plus" size={20} color="white" />
                      </View>
                    </Pressable>
                  </View>
                }

                {
                  selectedImages[2] == null &&
                  <View style={styles.photoView}>
                    <Pressable onPress={() => pickImageAsync(2)}>
                      <View style={styles.photoPlus}>
                        <AntDesign name="plus" size={20} color="white" />
                      </View>
                    </Pressable>
                  </View>
                }
                {
                  selectedImages[2] != null &&
                  <View style={[styles.photoView, {borderWidth: 0}]}>
                    <Image source={{uri: selectedImages[2]}} style={{width: (windowWidth - 88) / 3, height: 140, borderRadius: 15}} />
                    <Pressable onPress={() => pickImageAsync(2)}>
                      <View style={[styles.photoPlus, {top: -20}]}>
                        <AntDesign name="plus" size={20} color="white" />
                      </View>
                    </Pressable>
                  </View>
                }
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8}}>
                {
                  selectedImages[3] == null &&
                  <View style={styles.photoView}>
                    <Pressable onPress={() => pickImageAsync(3)}>
                      <View style={styles.photoPlus}>
                        <AntDesign name="plus" size={20} color="white" />
                      </View>
                    </Pressable>
                  </View>
                }
                {
                  selectedImages[3] != null &&
                  <View style={[styles.photoView, {borderWidth: 0}]}>
                    <Image source={{uri: selectedImages[3]}} style={{width: (windowWidth - 88) / 3, height: 140, borderRadius: 15}} />
                    <Pressable onPress={() => pickImageAsync(3)}>
                      <View style={[styles.photoPlus, {top: -20}]}>
                        <AntDesign name="plus" size={20} color="white" />
                      </View>
                    </Pressable>
                  </View>
                }

                {
                  selectedImages[4] == null &&
                  <View style={styles.photoView}>
                    <Pressable onPress={() => pickImageAsync(4)}>
                      <View style={styles.photoPlus}>
                        <AntDesign name="plus" size={20} color="white" />
                      </View>
                    </Pressable>
                  </View>
                }
                {
                  selectedImages[4] != null &&
                  <View style={[styles.photoView, {borderWidth: 0}]}>
                    <Image source={{uri: selectedImages[4]}} style={{width: (windowWidth - 88) / 3, height: 140, borderRadius: 15}} />
                    <Pressable onPress={() => pickImageAsync(4)}>
                      <View style={[styles.photoPlus, {top: -20}]}>
                        <AntDesign name="plus" size={20} color="white" />
                      </View>
                    </Pressable>
                  </View>
                }

                {
                  selectedImages[5] == null &&
                  <View style={styles.photoView}>
                    <Pressable onPress={() => pickImageAsync(5)}>
                      <View style={styles.photoPlus}>
                        <AntDesign name="plus" size={20} color="white" />
                      </View>
                    </Pressable>
                  </View>
                }
                {
                  selectedImages[5] != null &&
                  <View style={[styles.photoView, {borderWidth: 0}]}>
                    <Image source={{uri: selectedImages[5]}} style={{width: (windowWidth - 88) / 3, height: 140, borderRadius: 15}} />
                    <Pressable onPress={() => pickImageAsync(5)}>
                      <View style={[styles.photoPlus, {top: -20}]}>
                        <AntDesign name="plus" size={20} color="white" />
                      </View>
                    </Pressable>
                  </View>
                }
              </View>
            </View>
            {/** Title Section */}
            <View style={styles.card}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.title}>Title</Text>
                <Pencil width={30} height={30} />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeTitle}
                  value={title}
                  placeholder='Tap here to add a title'
                  placeholderTextColor={disableColor}
                />
              </View>
            </View>
            {/** Description Section */}
            <View style={styles.card}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.title}>Description</Text>
                <Pencil width={30} height={30} />
              </View>
              <View>
                <TextInput
                  style={[styles.input, {height: 150, textAlignVertical: 'top'}]}
                  onChangeText={onChangeDesc}
                  value={desc}
                  placeholder='Tap here to add a description'
                  placeholderTextColor={disableColor}
                  multiline={true}
                  numberOfLines={4}
                />
              </View>
            </View>
            {/** Searchability Section */}
            <View style={styles.card}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>Searchability</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{color: primaryColor, fontSize: 15}}>Allow Local Pickup</Text>
                <Switch
                  trackColor={{false: disableColor, true: '#81DAF9'}}
                  thumbColor={isEnabled ? primaryColor : '#ebebeb'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: -20}}>
                <Text style={{color: primaryColor, fontSize: 15}}>Allow On All Categories</Text>
                <Switch
                  trackColor={{false: disableColor, true: '#81DAF9'}}
                  thumbColor={isEnabled2 ? primaryColor : '#ebebeb'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch2}
                  value={isEnabled2}
                />
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{color: primaryColor, fontSize: 16, fontWeight: 'bold'}}>Maximum Distance</Text>
                <Text style={{color: disableColor}}>20mi.</Text>
              </View>
              <View>
                <Slider
                  style={{height: 40}}
                  minimumValue={0}
                  maximumValue={100}
                  value={40}
                  thumbTintColor={primaryColor}
                  minimumTrackTintColor={primaryColor}
                  maximumTrackTintColor={disableColor}
                />
              </View>
              <Text style={{color: primaryColor, fontSize: 16, fontWeight: 'bold'}}>Condition</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View>
                  {
                    index == 0 &&
                    <LinearGradient
                      colors={['#35C1F3', '#7CD9F8']}
                      style={[styles.buttons, styles.shadow]}>
                      <Text style={[styles.text, {fontSize: 16}]}>New</Text>
                    </LinearGradient>
                  }
                  {
                    index != 0 &&
                    <Pressable onPress={() => setIndex(0)}>
                      <View style={[styles.buttons, {backgroundColor: '#dbdbdb'}]}>
                        <Text style={[styles.text, {fontSize: 16}]}>New</Text>
                      </View>
                    </Pressable>
                  }
                </View>
                <View>
                  {
                    index == 1 &&
                    <LinearGradient
                      colors={['#35C1F3', '#7CD9F8']}
                      style={[styles.buttons, styles.shadow]}>
                      <Text style={[styles.text, {fontSize: 16}]}>Used</Text>
                    </LinearGradient>
                  }
                  {
                    index != 1 &&
                    <Pressable onPress={() => setIndex(1)}>
                      <View style={[styles.buttons, {backgroundColor: '#dbdbdb'}]}>
                        <Text style={[styles.text, {fontSize: 16}]}>Used</Text>
                      </View>
                    </Pressable>
                  }
                </View>
                <View>
                  {
                    index == 2 &&
                    <LinearGradient
                      colors={['#35C1F3', '#7CD9F8']}
                      style={[styles.buttons, styles.shadow]}>
                      <Text style={[styles.text, {fontSize: 16}]}>Not Specified</Text>
                    </LinearGradient>
                  }
                  {
                    index != 2 &&
                    <Pressable onPress={() => setIndex(2)}>
                      <View style={[styles.buttons, {backgroundColor: '#dbdbdb'}]}>
                        <Text style={[styles.text, {fontSize: 16}]}>Not Specified</Text>
                      </View>
                    </Pressable>
                  }
                </View>
              </View>
            </View>
            {/** Categories Section */}
            <View style={styles.card}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>Categories</Text>
              </View>
              <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                  paddingHorizontal: 8,
                  borderRadius: 10,
                  backgroundColor: '#ebebeb',
              }}>
                <FontAwesome name="search" size={20} color={disableColor} />
                <TextInput
                  style={[styles.input, {paddingHorizontal: 8, flex: 1}]}
                  placeholder='Search category filters'
                  placeholderTextColor={disableColor}
                />
              </View>
            </View>
            {/** Price Section */}
            <View style={styles.card}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.title}>Price</Text>
                <Pencil width={30} height={30} />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangePrice}
                  value={price}
                  placeholder='Tap here to add an adking price'
                  placeholderTextColor={disableColor}
                />
              </View>
            </View>
            {/** Confirm Section */}
            <View style={styles.card}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={styles.title}>Confirm Listing</Text>
                <Text style={{color: primaryColor, fontSize: 16, textDecorationLine: 'underline'}}>Preview</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: 15}}>
                <Pressable onPress={() => {}}>
                    <LinearGradient
                        colors={['#35C1F3', '#7CD9F8']}
                        style={[styles.button, {width: windowWidth * 0.5}]}>
                        <Text style={styles.text}>List item</Text>
                    </LinearGradient>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
			width: '100%',
      height: 100,
			justifyContent: 'flex-end',
			alignItems: 'center'
    },
    button: {
      width: windowWidth * 0.6,
      padding: 8,
      alignItems: 'center',
      borderRadius: 15,
      shadowColor: 'black',
      shadowOpacity: 0.2,
      elevation: 4,
      shadowRadius: 3,
      shadowOffset : { width: -2, height: 4},  
    },
    text: {
      backgroundColor: 'transparent',
      fontSize: 25,
      fontWeight: 'bold',
      color: '#fff',
    },
    modalContainer: {
      backgroundColor: '#EBEBEB',
      alignItems: 'center',
    },
    headerView: {
      position: 'absolute',
      width: windowWidth,
      height: 80,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 10,
      borderBottomWidth: 2,
      borderColor: primaryColor,
      backgroundColor: 'white',
      zIndex: 1
    },
    card: {
      width: windowWidth,
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginVertical: 4,
      borderRadius: 10,
      backgroundColor: 'white',
      elevation: 3,
    },
    photoView: {
      width: (windowWidth - 88) / 3,
      height: 140,
      backgroundColor: '#EAF9FF',
      borderStyle: 'dashed',
      borderRadius: 15,
      borderWidth: 2,
      borderColor: primaryColor,
      elevation: 2
    },
    photoPlus: {
      position: 'absolute',
      right: -10,
      top: 120,
      borderRadius: 100,
      backgroundColor: primaryColor
    },
    input: {
      height: 40,
    },
    title: {
      marginRight: 5,
      fontSize: 25,
      fontWeight: 'bold'
    },
    buttons: {
      width: (windowWidth - 60) / 3,
      padding: 4,
      alignItems: 'center',
      borderRadius: 100,
    },
    shadow: {
      shadowColor: 'black',
      shadowOpacity: 0.2,
      elevation: 4,
      shadowRadius: 3,
      shadowOffset : { width: -2, height: 4},
    },
});