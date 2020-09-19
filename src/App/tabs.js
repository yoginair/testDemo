import React from 'react';
import RecentTab from '../Screens/RecentTab';
import ImageList from '../Screens/ImageLists';
import {createStackNavigator} from 'react-navigation-stack';
import MainTab from '../Screens/MainTab';
export const TabOne = createStackNavigator(
  {
    MainTab: MainTab,
    ImageList: ImageList,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export const TabTwo = createStackNavigator(
  {
    RecentTab: RecentTab,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);
