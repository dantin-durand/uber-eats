import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export function Promotion({promo: {radio}}) {
  return (
    <View style={styles.promo}>
      <Text style={styles.text}>-{radio}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  promo: {
    height: 80,
    width: 80,
    backgroundColor: '#fb5058',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fabe00',
  },
  text: {
    color: '#fff',
    fontWeight: '800',
  },
});
