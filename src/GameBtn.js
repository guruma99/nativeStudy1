import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const GameBtn = props => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={{
        backgroundColor: '#D1FFF3',
        padding: '5%',
        borderRadius: 10,
        margin: 10,
      }}>
      <Text style={{fontSize: 30}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

GameBtn.propTypes = {
  title: PropTypes.string.isRequired, //isRequired 는 필수여부 지정
  onPress: PropTypes.func.isRequired,
};

GameBtn.defaultProps = {
  title: 'move',
};

export default GameBtn;
