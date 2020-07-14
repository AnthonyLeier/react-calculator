import React from 'react';
import {StyleSheet, Text, Dimensions, TouchableHighlight} from 'react-native';

export default (props) => {
	const stylesAll = [styles.info];
	if (props.operation) stylesAll.push(styles.operation);
	if (props.double) stylesAll.push(styles.double);
	if (props.triple) stylesAll.push(styles.triple);
	return (
		<TouchableHighlight onPress={() => props.onClick(props.label)}>
			<Text style={stylesAll}>{props.label}</Text>
		</TouchableHighlight>
	);
};

const styles = StyleSheet.create({
	info: {
		fontSize: 40,
		height: Dimensions.get('window').width / 4,
		width: Dimensions.get('window').width / 4,
		padding: 20,
		backgroundColor: '#1E1E1E', //'#f0f0f0',
		color: '#F0F0F0',
		textAlign: 'center',
		borderWidth: 1,
		borderColor: '#3d3d3d', //'#888',
	},
	operation: {
		color: '#BB86FC',
		backgroundColor: '#1E1E1E',
		borderColor: '#3d3d3d',
	},
	double: {
		width: (Dimensions.get('window').width / 4) * 2,
	},
	triple: {
		width: (Dimensions.get('window').width / 4) * 3,
	},
});
