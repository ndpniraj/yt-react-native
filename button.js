import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Constants from 'expo-constants';

const App = () => {
	return (
		<View style={styles.container}>
			<Button
				title='My First Button'
				onPress={() => {
					console.log('I am tapped');
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight,
	},
});

export default App;
