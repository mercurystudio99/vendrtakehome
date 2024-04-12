import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import Logo from '../assets/icons/VendrLogo.svg';

const primaryColor = '#3fc0ef';
const windowWidth = Dimensions.get('window').width;

export default function Header() {
  return (
    <View style={styles.container}>
			<LinearGradient
				colors={['#2BBDF2', '#81DAF9']}	
				style={styles.background}
			>
				<Logo width={windowWidth} height={100} />
			</LinearGradient>
			<View style={{paddingVertical: 15}}>
				<Pressable>
						<LinearGradient
								colors={['#35C1F3', '#7CD9F8']}
								style={styles.button}>
								<Text style={styles.text}>List an item</Text>
						</LinearGradient>
				</Pressable>
			</View>
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
});