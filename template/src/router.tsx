import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@pages/Home';
import Mine from '@pages/Mine';
import Detail from '@pages/Detail';
import BottomTabBar from '@components/BottomTabBar';
const RootStack = createStackNavigator();
const MainBottomTab = createBottomTabNavigator();

const Main = () => {
  const tabBar = useCallback((props) => <BottomTabBar {...props} />, []);

  return (
    <MainBottomTab.Navigator tabBar={tabBar}>
      <MainBottomTab.Screen name="Home" component={Home} />
      <MainBottomTab.Screen name="Mine" component={Mine} />
    </MainBottomTab.Navigator>
  );
};

export default function Root() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <RootStack.Screen name="Main" component={Main} />
        <RootStack.Screen name="Detail" component={Detail} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
