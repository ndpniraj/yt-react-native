import React from 'react';
import { View } from 'react-native';

const App = () => {
	return (
		<View
			style={{
				backgroundColor: 'red',
				marginTop: 40,
				flex: 1,
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'flex-start',
			}}
		>
			<View
				style={{
					backgroundColor: 'blue',
					width: 100,
					height: 100,
					alignSelf: 'flex-end',
				}}
			></View>
			<View
				style={{
					backgroundColor: 'gray',
					width: 100,
					height: 100,
					alignSelf: 'center',
				}}
			></View>
			<View
				style={{
					backgroundColor: 'yellow',
					width: 100,
					height: 100,
					alignSelf: 'flex-end',
				}}
			></View>
		</View>
	);
};

export default App;
