import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
const ImageDetail = props => {
  const {title, imageSoure} = props;
  return (
    <View>
      <Image source={imageSoure} />
      <Text>{title}</Text>
    </View>
  );
};
export default ImageDetail;
const styles = StyleSheet.create({});
