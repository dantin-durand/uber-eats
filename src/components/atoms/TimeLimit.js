import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

export function TimeLimit() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>• 20 - 25 min</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: 'grey',
  },
  card: {
    borderRadius: 30,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
});
