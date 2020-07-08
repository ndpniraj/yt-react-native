import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const App = () => {
	return (
		<View style={styles.container}>
			<Image source={require('./assets/shoe.jpg')} style={styles.image} />
			<Text style={styles.title}>Some Title</Text>
			<Text style={styles.content}>
				There are a lot more ways to customize text style. Check out the Text
				component reference for a complete list.
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
		backgroundColor: '#ff0000',
		marginHorizontal: 10,
		borderWidth: 5,
		borderColor: 'black',
		padding: 10,
	},
	image: {
		height: 300,
		width: '100%',
	},
	title: {
		fontSize: 20,
		color: '#fff',
		fontWeight: 'bold',
		padding: 5,
	},
	content: {
		fontSize: 16,
		color: 'white',
		paddingHorizontal: 5,
		paddingBottom: 5,
	},
});

export default App;
