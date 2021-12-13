import React from 'react';
import {ScrollView} from 'react-native';

export default function Carousel({children, ...props}) {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      {...props}>
      {children}
    </ScrollView>
  );
}
