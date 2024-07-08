import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CartScreen from '../screens/CartScreen/CartScreen';
import {theme} from '../theme';

import HomeIcon from '../assets/icons/HomeIcon';
import BagIcon from '../assets/icons/BagIcon';
import {CenteredView, CircleView} from './AppNavigator.styled';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.colors.white,
          tabBarInactiveTintColor: theme.colors.dark,
          tabBarStyle: {
            height: 90,
            backgroundColor: theme.colors.primary,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            color: theme.colors.white,
          },
          tabBarIconStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
          },
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Inicio',
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => (
              <CenteredView>
                {focused ? (
                  <CircleView>
                    <HomeIcon color={theme.colors.primary} />
                  </CircleView>
                ) : (
                  <HomeIcon color={theme.colors.white} />
                )}
              </CenteredView>
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            title: 'Sacola',
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => (
              <CenteredView>
                {focused ? (
                  <CircleView>
                    <BagIcon color={theme.colors.primary} />
                  </CircleView>
                ) : (
                  <BagIcon color={theme.colors.white} />
                )}
              </CenteredView>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
