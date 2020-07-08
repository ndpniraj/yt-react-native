import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const App = () => {
	return (
		<View style={styles.container}>
			<Image source={require('./assets/shoe.jpg')} style={styles.image} />
			<View style={styles.content}>
				<Text style={styles.title}>Best Shoes For Excercise.</Text>
				<Text>
					Best Shoes For Excercise. Best Shoes For Excercise. Best Shoes For
					Excercise.
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
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
