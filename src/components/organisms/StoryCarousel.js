import React from 'react';
import Carousel from '../molecules/Carousel';
import {StoryCard} from '../molecules/StoryCard';
import {Story} from '../../utils/restaurants/Story';
import {SubTitle} from '../atoms/Texts/SubTitle';
import {Paragraph} from '../atoms/Texts/Paragraph';
import {Text, View} from 'react-native';
export function RestaurantCarousel({
  title = '',
  description = '',
  stroies = [],
}) {
  return (
    <React.Fragment>
      <View
        style={{
          marginBottom: title.length || description.length ? 5 : 0,
          marginLeft: 10,
        }}>
        {title.length ? <SubTitle>{title}</SubTitle> : null}
        {description.length ? <Paragraph>{description}</Paragraph> : null}
      </View>
      <View>
        {stories.map((story, index) => (
          <Story key={index} restaurant={story} isFirst={index === 0} />
        ))}
      </View>
    </React.Fragment>
  );
}
