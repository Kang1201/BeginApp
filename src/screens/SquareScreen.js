import React, {useReducer, useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import ColorCounter from '../components/ColorCounter';
const COLOR = 15;
const reducer = (state, action) => {
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : {...state, red: state.red + action.payload};
    case 'change_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : {...state, blue: state.blue + action.payload};
    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : {...state, green: state.green + action.payload};
    default:
      state;
  }
};
export default function SquareScreen() {
  //   const [red, setRed] = useState(0);
  //   const [blue, setBlue] = useState(0);
  //   const [green, setGreen] = useState(0);
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const {red, blue, green} = state;
  console.log(state);

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_red', payload: COLOR})}
        onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR})}
      />
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_blue', payload: COLOR})}
        onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR})}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_green', payload: COLOR})}
        onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR})}
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}></View>
    </View>
  );
  //   console.log(red);
}
const styles = StyleSheet.create({});
