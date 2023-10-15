import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleNavigation = () => {
    setLoading(true);
    // Add your navigation logic or async task here
    // For demonstration, I'm using a setTimeout to simulate an async task.
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Home');
    }, 2000); // Replace this with your actual navigation logic
  };

  return (
    <View className="flex-1 flex justify-end">
      {/* background image */}
      <Image
        source={require('../../assets/images/background.gif')}
        className="h-full w-full absolute"
      />

      {/* content & gradient */}
      <View className="p-5 pb-10 space-y-8">
        <LinearGradient
          colors={['transparent', 'rgba(3,105,161,0.8)']}
          style={{ width: wp(100), height: hp(60) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0"
        />
        <View className="space-y-3">
          <Text className="text-white font-bold text-5xl" style={{ fontSize: wp(10) }}>
            Traveling made easy!
          </Text>
          <Text className="text-neutral-200 font-medium" style={{ fontSize: wp(4) }}>
            Experience the world's best adventure around the world with us
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleNavigation}
          style={{ backgroundColor: theme.bg(1) }}
          className="mx-auto p-3 px-12 rounded-full"
        >
          <Text className="text-white font-bold" style={{ fontSize: wp(5.5) }}>
            Let's go!
          </Text>
        </TouchableOpacity>

        {/* Spinner */}
        <Spinner visible={loading} textContent={'Loading...'} textStyle={{ color: '#FFF' }} />
      </View>
    </View>
  );
}
