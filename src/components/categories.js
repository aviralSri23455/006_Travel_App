import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { theme } from '../theme';
import { categoriesData } from '../constants';

export default function Categories() {
  const renderItem = ({ item, index }) => (
    <TouchableOpacity key={index} style={{ alignItems: 'center', marginRight: wp(2) }}>
      <View style={{ width: wp(20), height: wp(20), borderRadius: wp(10), overflow: 'hidden' }}>
        <Image source={item.image} style={{ width: '100%', height: '100%' }} />
      </View>
      <Text style={{ fontSize: wp(3), marginTop: wp(1) }} numberOfLines={1} ellipsizeMode="tail">
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ marginBottom: wp(5) }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: wp(2) }}>
        <Text style={{ fontSize: wp(4), fontWeight: 'bold', color: theme.text }}>Categories</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: wp(4), color: theme.text }}>See all</Text>
        </TouchableOpacity>
      </View>
      <Carousel
        data={categoriesData}
        renderItem={renderItem}
        sliderWidth={wp(100)}
        itemWidth={wp(25)}
        inactiveSlideScale={0.8}
        inactiveSlideOpacity={0.7}
        loop={true}
        autoplay={true}
        autoplayInterval={5000} // Autoplay interval set to 10 seconds
      />
    </View>
  );
}
