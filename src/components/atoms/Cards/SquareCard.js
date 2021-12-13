import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Card from './Card';

export function SquareCard({children, image, isFirst, path = ''}) {
  return (
    <Card image={image} isFirst={isFirst} path={path}>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {children}
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: '#fff',
    position: 'absolute',
    bottom: 10,
    left: 8,
    paddingRight: 8,
    fontWeight: 'bold',
  },
});
