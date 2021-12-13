import React from 'react';
import Carousel from '../molecules/Carousel';
import {Categories} from '../../utils/Categories';
import {SquareCard} from '../atoms/Cards/SquareCard';
import {Text, View} from 'react-native';

import {Button, FlatList, StyleSheet} from 'react-native';
export function CategoriesCarousel() {
  return (
    <Carousel>
      {/* <FlatList
        data={Categories}
        renderItem={SquareCard}
        keyExtractor={(item, index) => index}
      /> */}

      {Categories.map((category, index) => (
        <View key={index}>
          <SquareCard
            image={category.image}
            isFirst={index === 0}
            path={category.path || '/restaurant'}
          />
          <Text style={styles.nameCategory}>{category.name}</Text>
        </View>
      ))}
    </Carousel>
  );
}

const styles = StyleSheet.create({
  nameCategory: {
    textAlign: 'center',
    fontSize: 12,
  },
});
