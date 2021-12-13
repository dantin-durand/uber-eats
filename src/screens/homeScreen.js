import React from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';

import {CategoriesCarousel} from '../components/organisms/CategoriesCarousel';

import {RestaurantCarousel} from '../components/organisms/RestaurantCarousel';
import {InTheHeadlines} from '../utils/restaurants/InTheHeadlines';
import {HomeLayout} from '../layouts/home';

const Home = () => {
  return (
    <HomeLayout>
      <View style={styles.sectionCategories}>
        <CategoriesCarousel />
      </View>

      <View style={styles.sectionOffers}>
        <RestaurantCarousel
          title="D'après vos plats préférés"
          description="Des personnes avec les mêmes goûts que vous ont commandé auprès de ces restaurants"
          restaurants={InTheHeadlines}
        />
      </View>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  sectionCategories: {
    marginVertical: 10,
  },
  sectionOffers: {
    marginVertical: 10,
  },
});

export default Home;
