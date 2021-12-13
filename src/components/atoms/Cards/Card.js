import React from 'react';

import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {useNavigation} from '@react-navigation/native';

const Card = ({
  height = 90,
  width = 90,
  image = '',
  isFirst = false,
  path = '',
  children,
  ...props
}) => {
  return (
    <View
      {...props}
      style={[
        styles.card,
        {height: height, width: width, marginLeft: isFirst ? 10 : 0},
      ]}>
      <ImageBackground
        source={{
          uri: image,
        }}
        resizeMode="cover"
        style={[styles.image, {height: height, width: width}]}>
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    marginHorizontal: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
});

export default Card;
