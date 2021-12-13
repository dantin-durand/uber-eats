import React from 'react';

import {Button, StyleSheet, Text, View, ImageBackground} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {DefaultLayout} from '../layouts/default';
import {SubTitle} from '../components/atoms/Texts/SubTitle';
Restaurant.sharedElements = (route, otherRoute, showing) => {
  console.log('route -> ', route);
  const {id} = route.params;
  return [`item.${id}`];
};

function Restaurant(props) {
  console.log('props -> ', props.route.params);
  const {item} = props.route.params;
  return (
    <DefaultLayout>
      <View style={styles.sectionCategories}>
        <SharedElement id={`item.${item.id}`}>
          <ImageBackground
            source={{
              uri: item.image,
            }}
            resizeMode="cover"
            style={{height: 200, width: '100%'}}
          />
        </SharedElement>
        <View style={styles.container}>
          <SubTitle>{item.name}</SubTitle>
        </View>
      </View>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  sectionOffers: {
    marginVertical: 10,
  },
  container: {
    padding: 10,
  },
});

export default Restaurant;
