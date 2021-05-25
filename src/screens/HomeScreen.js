/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
const HomeScreens = ({navigation}) => {
  const hi = <Text>say hi!</Text>;
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => navigation.navigate()}>
        <Text style={styles.text}>Go to components Demo</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => navigation.navigate('ListScreen')}>
        <Text style={styles.text}>Go to List Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ImageScreen')}>
        <Text style={styles.text}>Go to Image Demo</Text>
      </TouchableOpacity>
      {hi}
    </View>
  );
};
export default HomeScreens;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
  },
});
