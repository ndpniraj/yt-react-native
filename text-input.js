import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

const App = () => {
	const [textInputValue, setValue] = useState('');
	return (
		<View
			style={{
				marginTop: 40,
			}}
		>
			<TextInput
				placeholder='input some text'
				// placeholderTextColor='red'
				// autoCorrect={false}
				// keyboardType='email-address'
				// secureTextEntry={true}
				// autoCapitalize='characters'
				// multiline={true}
				onChangeText={text => setValue(text)}
				value={textInputValue}
				style={{
					borderBottomWidth: 2,
					borderBottomColor: '#ccc',
					marginHorizontal: 15,
					fontSize: 18,
				}}
			/>
			<Text>{textInputValue}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default App;
