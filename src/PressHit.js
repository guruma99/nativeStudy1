import React from 'react';
import {useState} from 'react';
import {View, Text} from 'react-native';
import CustomBtn from './CustomBtn';

const PressHit = () => {
  const [hit, setHit] = useState(0);
  const [like, setLike] = useState(0);
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 30, margin: 10}}>{hit}</Text>
      <CustomBtn title="+" onPress={() => setHit(hit + 1)} />
      <CustomBtn title="-" onPress={() => setHit(hit - 1)} />

      <CustomBtn
        title={like == 0 ? '좋아요' : '싫어요'}
        onPress={() => setLike(!like)}
      />
    </View>
  );
};

export default PressHit;
