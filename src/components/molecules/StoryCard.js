import React from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import Card from '../atoms/Cards/Card';
import {Opinions} from '../atoms/Opinions';
import {SubTitle} from '../atoms/Texts/SubTitle';
import {TimeLimit} from '../atoms/TimeLimit';
import {Rewarded} from '../atoms/Labels/Rewarded';
import {Promotion} from '../atoms/Labels/Promotion';
import {SharedElement} from 'react-navigation-shared-element';
import {useNavigation} from '@react-navigation/native';

export function StroyCard({story, isFirst}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() => navigation.push('story', {item: story})}>
      <SharedElement id={`item.${story.id}`}>
        <View style={[styles.globalcard]}>
          <ImageBackground
            source={{
              uri: story.image,
            }}
            style={styles.banner}
            resizeMode="cover">
            <View style={styles.description}>
              <Text>Category</Text>
              <Text> Title</Text>
            </View>
          </ImageBackground>
        </View>
      </SharedElement>
      <View>
        <Text>User</Text>
        <Text>Il y a 10.000 ans</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 20,
  },
  // timelimit: {
  //   position: 'absolute',
  //   top: -35,
  //   right: 20,
  // },
  globalcard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginVertical: 10,
    flex: 1,
    width: '90%',
    left: '5%',
    borderRadius: 8,
    alignItems: 'stretch',
  },
  description: {
    padding: 10,
    paddingRight: 0,
    paddingTop: 20,
    width: '100%',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  rewarded: {
    position: 'absolute',
    top: -138,
    left: 10,
  },
  promotion: {
    position: 'absolute',
    top: -138,
    left: 10,
  },
  banner: {
    height: 147,
    width: '100%',
  },
});
