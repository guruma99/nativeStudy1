import React from 'react';
import {Text, View, Button} from 'react-native';
import CustomBtn from './CustomBtn';
import PressHit from './PressHit';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 35, marginBottom: 15}}>버튼테스트</Text>
      <PressHit />
      {/* <CustomBtn title="move" />
      <CustomBtn title="Action">second btn</CustomBtn>
      <CustomBtn /> */}
    </View>
  );
};

export default App;
