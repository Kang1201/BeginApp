import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import ImageDetail from '../components/ImageDetail';
const ImageScreen = props => {
  return (
    <View>
      <ImageDetail
        title={'beach'}
        imageSoure={require('../assets/images/beach.jpg')}
      />
      <ImageDetail
        title={'moutain'}
        imageSoure={require('../assets/images/mountain.jpg')}
      />
    </View>
  );
};
export default ImageScreen;
const styles = StyleSheet.create({});
