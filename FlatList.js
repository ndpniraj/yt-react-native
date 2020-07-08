import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

const contacts = [
	{ name: 'Eric Fay', contact: '12345' },
	{ name: 'Lia Kuhic', contact: '456325' },
	{ name: 'Edd Dare', contact: '4523998' },
	{ name: 'Ivy Haag', contact: '9965755' },
	{ name: 'Olga Hahn', contact: '0215345' },
	{ name: 'Ramon Rau', contact: '866475' },
	{ name: 'Paul Batz', contact: '6325698' },
	{ name: 'Taya Cole', contact: '6532984' },
	{ name: 'Alana Fay', contact: '5688615' },
	{ name: 'Sharron Lam', contact: '1267987' },
	{ name: 'Mel Calderon', contact: '4265467' },
	{ name: 'Aline Ellison', contact: '2325640' },
	{ name: 'Archie Bartlett', contact: '1254698' },
	{ name: 'Randy Koch', contact: '235684' },
	{ name: 'Helen Robertson', contact: '1236594' },
	{ name: 'Steven Dennis', contact: '1458763' },
	{ name: 'Kent Kirby', contact: '456214' },
	{ name: 'Kathrine Burton', contact: '5665815' },
	{ name: 'Joseph Cummings', contact: '1236952' },
	{ name: 'Johnathon Pollard', contact: '4587624' },
	{ name: 'Earnestine Matthews', contact: '7584556' },
];

const App = () => {
	return (
		<View style={styles.container}>
			<FlatList
				// horizontal
				// showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				data={contacts}
				keyExtractor={contact => contact.name}
				renderItem={({ item }) => {
					return (
						<View style={styles.contactContainer}>
							<Text style={styles.text}>{item.name}</Text>
							<Text style={styles.text}>{item.contact}</Text>
						</View>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
	},
	contactContainer: {
		marginBottom: 20,
		padding: 5,
		borderColor: 'black',
		borderWidth: 2,
	},
	text: {
		fontSize: 24,
	},
});

export default App;
