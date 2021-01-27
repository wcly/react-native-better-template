import React, { FC, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@pages/Home';
import Mine from '@pages/Mine';
import Detail from '@pages/Detail';
import BottomTabBar from '@components/BottomTabBar';
import {
  MainBottomTabParamList,
  MainNavigationProp,
  MainRouteProp,
  MineRouteProp,
  RootStackParamList,
} from './route';

type MainProps = {
  route: MainRouteProp;
  navigation: MainNavigationProp;
};

const RootStack = createStackNavigator<RootStackParamList>();
const MainBottomTab = createBottomTabNavigator<MainBottomTabParamList>();

const Main: FC<MainProps> = () => {
  const tabBar = useCallback((props) => <BottomTabBar {...props} />, []);

  return (
    <MainBottomTab.Navigator tabBar={tabBar}>
      <MainBottomTab.Screen name="Home" component={Home} />
      <MainBottomTab.Screen name="Mine" component={Mine} />
    </MainBottomTab.Navigator>
  );
};

const Root: FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <RootStack.Screen name="Main" component={Main} />
        <RootStack.Screen name="Detail" component={Detail} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
