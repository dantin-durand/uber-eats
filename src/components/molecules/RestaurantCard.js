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

export function RestaurantCard({restaurant}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() => navigation.push('Restaurant', {item: restaurant})}>
      <View style={[styles.globalcard]}>
        <SharedElement id={`item.${restaurant.id}`}>
          <ImageBackground
            source={{
              uri: restaurant.image,
            }}
            style={styles.banner}
            resizeMode="cover"
          />
        </SharedElement>
        <View style={styles.description}>
          {restaurant.isRewarded && (
            <View style={styles.rewarded}>
              <Rewarded />
            </View>
          )}
          {restaurant.promotion && (
            <View
              style={[
                styles.promotion,
                {
                  transform: [{rotate: '-16deg'}],
                },
              ]}>
              <Promotion promo={restaurant.promotion} />
            </View>
          )}

          <SubTitle>{restaurant.name}</SubTitle>
          <Text style={styles.note}>{restaurant.opinions.note}</Text>
          <Opinions opinions={restaurant.opinions} />
          {restaurant.promotion && (
            <Text style={{color: '#fb5058', marginTop: 10}}>
              <Image
                source={require('../../assets/icons/promotion.png')}
                style={{height: 14, width: 14}}
              />{' '}
              {restaurant.promotion.comment}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  globalcard: {
    backgroundColor: 'white',
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
    paddingTop: 10,
    width: '100%',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  rewarded: {
    position: 'absolute',
    top: -138,
    left: 0,
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
  note: {
    height: 30,
    width: 30,
    fontSize: 12,
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#dbdbd9',
    borderRadius: 15,
    overflow: 'hidden',
    textAlign: 'center',
    paddingTop: 7,
  },
});
