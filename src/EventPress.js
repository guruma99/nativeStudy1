import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
const EventPress = () => {
  const _onPressIN = () => console.log('press In');
  const _onPressOut = () => console.log('press Out');
  const _onPress = () => console.log('press');
  const _onLongPress = () => console.log('Long Press');

  return (
    <TouchableOpacity
      style={{backgorundColor: 'pink', padding: 15, margin: 10}}
      onPressIN={_onPressIN}
      onPressOut={_onPressOut}
      onPress={_onPress}
      onLongPress={_onLongPress}>
      <Text style={{fontSize: 35}}>터치미</Text>
    </TouchableOpacity>
  );
};

export default EventPress;
