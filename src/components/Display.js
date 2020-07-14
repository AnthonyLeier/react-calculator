import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default (props) => {
	return (
		<View style={styles.box}>
			<Text style={styles.info} numberOfLines={1}>
				{props.value}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	box: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
		backgroundColor: '#121212', //'rgba(0,0,0,0.6)',
		alignItems: 'flex-end',
	},
	info: {
		fontSize: 60,
		color: '#fff',
	},
});
