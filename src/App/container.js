import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {Image, View} from 'react-native';
import {appColor} from '../utils/constants';
import {TabOne, TabTwo} from './tabs';

const tabNavigator = createBottomTabNavigator(
  {
    TabOne: TabOne,
    TabTwo: TabTwo,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let color = focused ? appColor : 'white';
        if (routeName === 'TabOne') {
          return (
            <View style={{backgroundColor: color}}>
              <Image
                source={require('../assets/images/icons-feed/icons-feed.png')}
              />
            </View>
          );
        } else {
          return (
            <View style={{backgroundColor: color}}>
              <Image
                source={require('../assets/images/icons-time/icons-time.png')}
              />
            </View>
          );
        }
      },
    }),
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: 'white',
      },
    },
  },
);

const Container = createAppContainer(tabNavigator);

export default Container;
