import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Color } from 'react-native-svg';

import Header from 'src/components/Header';
import Icon, { IconsNames } from 'src/components/Icon';
import Colors from 'src/styles/Colors';

import ExploreScreen from './ExploreScreen';
import LikesYouScreen from './LikesYouScreen';
import MatchesScreen from './MatchesScreen';
import RecommendationsScreen from './RecommendationsScreen';
import styles, { Constants as StylesConstants } from './styles';

const Tab = createBottomTabNavigator();

interface IRoute {
  component: () => JSX.Element;
  icon: IconsNames;
  iconColors: [Color, Color];
  name: string;
}

const routes: IRoute[] = [
  {
    component: RecommendationsScreen,
    icon: 'TinderLogo',
    iconColors: [Colors.radicalRed, Colors.ghost],
    name: 'Recommendations',
  },
  {
    component: ExploreScreen,
    icon: 'Explore',
    iconColors: [Colors.radicalRed, Colors.ghost],
    name: 'Explore',
  },
  {
    component: LikesYouScreen,
    icon: 'Star',
    iconColors: [Colors.sun, Colors.ghost],
    name: 'LikesYou',
  },
  {
    component: MatchesScreen,
    icon: 'Message',
    iconColors: [Colors.radicalRed, Colors.ghost],
    name: 'Matches',
  },
];

const HomeNav = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <Header />,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      {routes.map(({ component, icon, iconColors, name }) => (
        <Tab.Screen
          component={component}
          key={icon}
          name={name}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                color={focused ? iconColors[0] : iconColors[1]}
                name={icon}
                size={StylesConstants.iconSize}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default HomeNav;
