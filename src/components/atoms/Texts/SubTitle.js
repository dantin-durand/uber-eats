import React from 'react';

import {StyleSheet, Text} from 'react-native';

export function SubTitle({children, style, ...props}) {
  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#2e3333',
    fontWeight: '700',
  },
});
