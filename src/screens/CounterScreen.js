import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCount(count + 1);
          console.log('Increase', count);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCount(count - 1);
          console.log('Decrease', count);
        }}
      />
      <Text>Current Count: {count}</Text>
    </View>
  );
};
export default CounterScreen;
const styles = StyleSheet.create({});
