import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
const ListScreen = () => {
  const friends = [
    {id: '1', name: 'Friend #1'},
    {id: '2', name: 'Friend #2'},
    {id: '3', name: 'Friend #3'},
    {id: '4', name: 'Friend #4'},
    {id: '5', name: 'Friend #5'},
    {id: '6', name: 'Friend #6'},
    {id: '7', name: 'Friend #7'},
    {id: '8', name: 'Friend #8'},
  ];
  const renderItem = ({item}) => {
    return <Text>{item.name}</Text>;
  };
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator
      data={friends}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};
export default ListScreen;
const styles = StyleSheet.create({});
