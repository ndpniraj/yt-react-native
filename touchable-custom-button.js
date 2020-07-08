import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import Constants from 'expo-constants';

const App = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => {
					console.log('I am tapped');
				}}
				style={styles.buttonContainer}
			>
				<Text style={styles.buttonText}>Custom Button</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => {
					console.log('I am tapped');
				}}
				style={styles.buttonContainer2}
			>
				<Text style={styles.buttonText2}>Custom Button</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => {
					console.log('I am tapped');
				}}
				style={styles.buttonContainer3}
			>
				<Text style={styles.buttonText3}>Custom Button</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => {
					console.log('I am tapped');
				}}
				style={styles.buttonContainer4}
			>
				<Text style={styles.buttonText4}>Custom Button</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => {
					console.log('I am tapped');
				}}
				style={styles.buttonContainer5}
			>
				<Text style={styles.buttonText5}>Custom</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.cardContainer}
				onPress={() => {
					console.log('card is tapped');
				}}
			>
				<Image source={require('./assets/shoe.jpg')} style={styles.image} />
				<View style={styles.content}>
					<Text style={styles.title}>Best Shoes For Excercise.</Text>
					<Text>
						Best Shoes For Excercise. Best Shoes For Excercise. Best Shoes For
						Excercise.
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight,
	},
	buttonContainer: {
		marginVertical: 20,
		height: 40,
		marginHorizontal: 10,
		backgroundColor: '#5d57ff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		textTransform: 'uppercase',
		color: '#fff',
		fontSize: 18,
	},
	buttonContainer2: {
		marginVertical: 20,
		height: 40,
		marginHorizontal: 10,
		backgroundColor: '#5d57ff',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
	},
	buttonText2: {
		textTransform: 'uppercase',
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	buttonContainer3: {
		marginVertical: 20,
		height: 50,
		marginHorizontal: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		borderWidth: 4,
		borderColor: '#5d57ff',
	},
	buttonText3: {
		textTransform: 'uppercase',
		color: '#5d57ff',
		fontSize: 16,
	},
	buttonContainer4: {
		marginVertical: 20,
		height: 50,
		marginHorizontal: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		backgroundColor: '#5d57ff',
	},
	buttonText4: {
		textTransform: 'uppercase',
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	buttonContainer5: {
		marginVertical: 20,
		height: 120,
		width: 120,
		marginHorizontal: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 60,
		backgroundColor: '#5d57ff',
	},
	buttonText5: {
		textTransform: 'uppercase',
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	cardContainer: {
		height: 100,
		width: '100%',
		flexDirection: 'row',
		padding: 5,
	},
	image: {
		height: '100%',
		flex: 0.35,
	},
	content: {
		flex: 0.65,
		paddingHorizontal: 5,
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 5,
	},
});

export default App;
