import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Detail: undefined;
  Login: undefined;
  Main: NavigatorScreenParams<MainBottomTabParamList>;
};

export type MainBottomTabParamList = {
  Mine: undefined;
  Home: undefined;
};

export type MainRouteProp = RouteProp<RootStackParamList, 'Main'>;
export type MainNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Main'
>;

export type HomeRouteProp = RouteProp<MainBottomTabParamList, 'Home'>;
export type HomeNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainBottomTabParamList, 'Home'>,
  StackNavigationProp<RootStackParamList>
>;

export type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;
export type DetailNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Detail'
>;

export type MineRouteProp = RouteProp<MainBottomTabParamList, 'Mine'>;
export type MineNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainBottomTabParamList, 'Mine'>,
  StackNavigationProp<RootStackParamList>
>;

export type LoginRouteProp = RouteProp<RootStackParamList, 'Login'>;
export type LoginNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;
