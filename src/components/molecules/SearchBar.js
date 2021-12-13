import React from 'react';
import {TextInput, StyleSheet, View, Image} from 'react-native';

export function SearchBar({style, ...props}) {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require('../../assets/icons/search.png')}
        style={{height: 18, width: 18, zIndex: 1}}
      />
      <TextInput
        style={styles.input}
        onFocus={e => console.log('focuuuus -> ', e)}
        {...props}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            borderLeftWidth: 1,
            borderLeftColor: '#e6e6e6',
            height: 25,
            width: 1,
            marginRight: 10,
          }}
        />
        <Image
          source={require('../../assets/icons/settings.png')}
          style={{
            height: 18,
            width: 16,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '90%',
    height: 45,
    borderRadius: 35,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  input: {
    width: '100%',
    position: 'absolute',
    paddingLeft: 50,
    height: 45,
  },
});
