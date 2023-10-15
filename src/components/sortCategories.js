import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { theme } from '../theme';
import { sortCategoryData } from '../constants';

export default function SortCategories() {
  const [activeSort, setActiveSort] = useState('Popular');
  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animate the scale when the activeSort changes
    Animated.spring(scaleValue, {
      toValue: activeSort === sortCategoryData[0] ? 1.2 : 1,
      useNativeDriver: true,
    }).start();
  }, [activeSort]);

  // Define a custom background color by combining colors
  const customBackgroundColor = 'rgba(0, 0, 255, 0.2)'; // Blue with 20% transparency


  return (
    <View style={styles.container}>
      {sortCategoryData.map((sort, index) => {
        const isActive = sort === activeSort;
        const activeButtonStyle = isActive ? styles.activeButton : null;

        return (
          <TouchableOpacity
            onPress={() => setActiveSort(sort)}
            key={index}
            style={[
              styles.button,
              activeButtonStyle,
              { transform: [{ scale: isActive ? scaleValue : 1 }] },
              { backgroundColor: customBackgroundColor },
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                { color: isActive ? theme.text : 'rgba(0,0,0,0.6)' },
              ]}
            >
              {sort}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: wp(4),
    borderRadius: wp(8),
    padding: wp(2),
    paddingHorizontal: wp(4),
    elevation: 2, // for Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  button: {
    padding: wp(3),
    paddingHorizontal: wp(4),
    borderRadius: wp(6),
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: wp(4),
  },
};
