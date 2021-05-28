/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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

      <TouchableOpacity onPress={() => navigation.navigate('CounterScreen')}>
        <Text style={styles.text}>Go to Counter Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SquareScreen')}>
        <Text style={styles.text}>Go to Square Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
        <Text style={styles.text}>Go to Search Demo</Text>
      </TouchableOpacity>
      {hi}
      <Icon name="home" size={30} color="#900" />
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
