import React, {useState} from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Paragraph} from '../atoms/Texts/Paragraph';
import {SubTitle} from '../atoms/Texts/SubTitle';
import {SearchBar} from '../molecules/SearchBar';

export function HeaderAdress() {
  const [deliveryType, setDeliveryType] = useState('delivery');
  return (
    <>
      <View style={[styles.container]}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            marginHorizontal: 15,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setDeliveryType('delivery')}
            style={[
              styles.btn,
              deliveryType === 'delivery' ? styles.btnselected : null,
            ]}>
            <Text
              style={[
                deliveryType === 'delivery'
                  ? styles.whiteColor
                  : styles.blackColor,
              ]}>
              Livraison
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDeliveryType('toTakeAway')}
            style={[
              styles.btn,
              deliveryType === 'toTakeAway' ? styles.btnselected : null,
            ]}>
            <Text
              style={[
                deliveryType === 'toTakeAway'
                  ? styles.whiteColor
                  : styles.blackColor,
              ]}>
              À emporter
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <View style={styles.adress}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 2,
              }}>
              <Text
                style={[styles.blackColor, styles.adressString]}
                numberOfLines={1}
                ellipsizeMode="tail">
                Maintenant • 18 Rue Legendre
              </Text>
              <Image
                source={require('../../assets/icons/arrow-down.png')}
                style={{height: 8, width: 13, marginLeft: 5}}
              />
            </View>
          </View>
          <View style={styles.profile}>
            <Image
              source={require('../../assets/icons/filter.png')}
              style={{height: 25, width: 25}}
            />
          </View>
        </View>
      </View>
      {/* <View
        style={{
          width: '100%',
          alignItems: 'center',
          transform: [{translateY: -20}],
          zIndex: 1,
        }}>
        <SearchBar placeholder="Plats, restaurants ou types de cuisine" />
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: 130,
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
  },
  info: {
    flexDirection: 'row',
    width: '100%',
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  adress: {
    width: '70%',
  },
  adressString: {
    justifyContent: 'center',
    display: 'flex',
  },
  whiteColor: {
    color: '#fff',
  },
  blackColor: {
    color: '#000',
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    transform: [{translateX: -30}],
    position: 'absolute',
    right: 0,
  },
  btn: {
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 8,
  },
  btnselected: {
    backgroundColor: '#000',
  },
});
