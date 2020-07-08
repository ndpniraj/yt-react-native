import React from 'react';
import { View } from 'react-native';

const App = () => {
	return (
		<View
			style={{
				marginTop: 40,
				flex: 1,
				backgroundColor: '#ccc',
			}}
		>
			<View
				style={{
					height: 100,
					width: 100,
					backgroundColor: 'red',
					position: 'absolute',
					bottom: 0,
					right: 0,
				}}
			/>
		</View>
	);
};

export default App;
