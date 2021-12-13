import {Image, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {TimeLimit} from './TimeLimit';

export function Opinions({opinions: {note, count, tags, timing}}) {
  return (
    <View>
      <Text style={styles.globalopinion}>
        <View
          style={{
            marginRight: 5,
            display: 'flex',
            flexDirection: 'row',
          }}>
          <Image
            style={styles.iconstar}
            source={require('../../assets/icons/ticket.png')}
          />
          <Text>{tags}</Text>
          <TimeLimit />
        </View>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  globalopinion: {
    alignItems: 'center',
    color: 'black',
    marginTop: 6,
  },
  iconstar: {
    width: 15,
    height: 15,
    paddingLeft: 10,
    marginRight: 10,
  },
});
