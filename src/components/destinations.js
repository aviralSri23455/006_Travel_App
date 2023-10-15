import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Animated } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { HeartIcon, ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { destinationData } from '../constants';

const Destinations = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#6A85B6', '#42275A']}
      style={{ flex: 1, margin: 8, paddingVertical: 16, paddingHorizontal: 8 }}
    >
      <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {destinationData.map((item, index) => (
            <DestinationCard navigation={navigation} item={item} key={index} index={index} />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const DestinationCard = ({ item, navigation, index }) => {
  const [isFavourite, toggleFavourite] = useState(false);
  const translateY = new Animated.Value(-100);

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 1000,
      delay: index * 100, // Delay each card based on its index
      useNativeDriver: true,
    }).start();
  }, [translateY, index]);

  return (
    <Animated.View
      style={{
        transform: [{ translateY }],
        width: wp(44),
        height: wp(65),
        position: 'relative',
        marginBottom: 16,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 5, // Add shadow
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate('Destination', { ...item })}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Image
          source={item.image}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 20,
            position: 'absolute',
          }}
        />

        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={{
            width: '100%',
            height: hp(15),
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            position: 'absolute',
            bottom: 0,
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />

        <TouchableOpacity
          onPress={() => toggleFavourite(!isFavourite)}
          style={{
            backgroundColor: 'rgba(255,255,255,0.4)',
            position: 'absolute',
            top: 16,
            right: 16,
            borderRadius: 20,
            padding: 8,
          }}
        >
          <HeartIcon size={wp(5)} color={isFavourite ? '#FF5757' : 'white'} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            top: 16,
            left: 16,
            padding: 8,
            borderRadius: 20,
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
          }}
        >
          <ArrowLeftIcon size={wp(5)} color="white" />
        </TouchableOpacity>

        <View style={{ position: 'absolute', bottom: 16, left: 16 }}>
          <Text style={{ fontSize: wp(4), color: 'white', fontWeight: 'bold' }}>{item.title}</Text>
          <Text style={{ fontSize: wp(2.2), color: 'white', maxWidth: wp(40) }}>{item.shortDescription}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Destinations;
