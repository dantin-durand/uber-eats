import React, {useState} from 'react';

import {View, StyleSheet, FlatList} from 'react-native';
import {HeaderAdress} from '../components/organisms/HeaderAdress';

export function HomeLayout({children}) {
  return (
    <View>
      <HeaderAdress />
      <FlatList
        data={[
          {
            id: 2,
            render: <View style={[styles.container]}>{children}</View>,
          },
        ]}
        keyExtractor={component => component.id}
        renderItem={({item}) => item.render}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'red',
    width: '80%',
    height: 40,
    borderRadius: 20,
    transform: [{translateY: -20}],
    paddingHorizontal: 20,
    position: 'absolute',
  },
  container: {
    marginTop: 120,
    backgroundColor: '#fff',
  },
});
