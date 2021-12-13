import React from 'react';
import Carousel from '../molecules/Carousel';
import Card from '../atoms/Cards/Card';
import {Offers} from '../../utils/Offers';
export function OffersCarousel() {
  return (
    <Carousel>
      {Offers.map((offer, index) => (
        <Card
          key={index}
          image={offer.image}
          height={200}
          width={350}
          isFirst={index === 0}></Card>
      ))}
    </Carousel>
  );
}
