import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
const ColorCounter = ({color, onIncrease, onDecrease}) => {
  console.log(onIncrease);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>{color}</Text>
      <TouchableOpacity onPress={() => onIncrease()}>
        <Text>{`Increase ${color}`}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDecrease()}>
        <Text>{`Decrease ${color}`}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ColorCounter;
