import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
export function Rewarded() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dépensez 20€, économisez 5€</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#05944F',
    alignSelf: 'flex-start',
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  img: {
    width: 12,
    height: 15,
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
});
