import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Platform, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Categories from '../components/categories';
import SortCategories from '../components/sortCategories';
import Destinations from '../components/destinations';

const ios = Platform.OS == 'ios';
const topMargin = ios ? 'mt-3' : 'mt-10';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className={'space-y-6 ' + topMargin}>
        {/* Navbar */}
        <View className="mx-5 flex-row justify-between items-center mb-6">
          <Text style={{ fontSize: wp(7) }} className="font-bold text-neutral-700">
            Travel App
          </Text>
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity>
              <Image source={require('../../assets/images/connection.gif')} style={{ height: wp(12), width: wp(12) }} />
            </TouchableOpacity>
          </View>
        </View>

        {/* categories */}
        <View className="mb-4">
          <Categories />
        </View>

        {/* sort categories */}
        <View className="mb-4">
          <SortCategories />
        </View>

        {/* destinations */}
        <View>
          <Destinations />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
