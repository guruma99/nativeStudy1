import React from 'react';
import {Text, TouchableOpacity, Alert} from 'react-native';
import PropTypes from 'prop-types';

const CustomBtn = props => {
  console.log(props);
  return (
    //Text에는 텍스트 글자속성만 넣어주자
    <TouchableOpacity
      style={{
        backgroundColor: '#f194ff',
        padding: '5%',
        borderRadius: 10,
      }}
      onPress={() => props.onPress()}>
      <Text style={{fontSize: 15, color: '#fff', fontWeight: '800'}}>
        {props.children || props.title}
      </Text>
    </TouchableOpacity>
  );
};

CustomBtn.propTypes = {
  title: PropTypes.string.isRequired, //isRequired 는 필수여부 지정
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
CustomBtn.defaultProps = {
  title: '저장',
  name: 'bt',
};

export default CustomBtn;
