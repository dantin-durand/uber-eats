import React from 'react';
import Carousel from '../molecules/Carousel';
import {RestaurantCard} from '../molecules/RestaurantCard';
import {InTheHeadlines} from '../../utils/restaurants/InTheHeadlines';
import {SubTitle} from '../atoms/Texts/SubTitle';
import {Paragraph} from '../atoms/Texts/Paragraph';
import {Text, View, FlatList, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
export function RestaurantCarousel({
  title = '',
  description = '',
  restaurants = [],
}) {
  console.log('restaurants', restaurants);
  return (
    <React.Fragment>
      <View
        style={{
          marginBottom: title.length || description.length ? 5 : 0,
          marginLeft: 10,
        }}>
        {title.length ? (
          <SubTitle style={{marginLeft: 10}}>{title}</SubTitle>
        ) : null}
        {description.length ? (
          <Paragraph style={styles.description}>{description}</Paragraph>
        ) : null}
      </View>
      <View>
        <FlatList
          data={restaurants}
          keyExtractor={restaurant => restaurant.id}
          renderItem={({item, index}) => (
            <RestaurantCard
              key={index}
              restaurant={item}
              isFirst={index === 0}
            />
          )}
        />
      </View>
      {/* <View style={{backgroundColor: '#eeeeee'}}>
        {restaurants.map((restaurant, index) => {
          // console.log('restaurant', restaurant);
          return (
            <RestaurantCard
              key={index}
              restaurant={restaurant}
              isFirst={index === 0}
            />
          );
        })}
      </View> */}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  description: {
    color: 'grey',
    fontSize: 14,
    marginLeft: 10,
  },
});
