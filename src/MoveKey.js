import React from 'react';
import {View, Text} from 'react-native';
import {useState} from 'react';
import GameBtn from './GameBtn';

const MoveKey = () => {
  const [dir, setDir] = useState(0);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 35, marginBottom: 15}}>{dir}</Text>
      <GameBtn
        title="up"
        onPress={() => {
          setDir('up');
        }}
      />
      <GameBtn
        title="down"
        onPress={() => {
          setDir('down');
        }}
      />
      <GameBtn
        title="left"
        onPress={() => {
          setDir('left');
        }}
      />
      <GameBtn
        title="right"
        onPress={() => {
          setDir('right');
        }}
      />
    </View>
  );
};

export default MoveKey;
