import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Card from './Card';

export function RectangleCard({children, image}) {
  return (
    <Card image={image}>
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
